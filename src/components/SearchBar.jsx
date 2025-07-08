import { useEffect, useState, useRef, useCallback } from 'react';
import {
  Container,
  StickyWrapper,
  StickySearchBar,
  SearchInput,
  SearchIconWrapper,
  SearchInputWrapper,
  HeaderBar
} from '../styles/SearchBar.styles';
import { fetchImages } from '../api/unsplash';
import ImageGrid from './ImageGrid';
import { CiSearch } from 'react-icons/ci';
import ScrollToTopButton from './ScrollToTopButton';
import RecentSearches from './RecentSearches';
import PopularKeywords from './PopularKeywords';
import SearchGroup from './SearchGroup';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('검색');
  const [showPopular, setShowPopular] = useState(false);
  const observer = useRef();

  const [recentSearches, setRecentSearches] = useState([
    '강아지', '고양이', '풍경'
  ]);

  // 인기 키워드 예시 배열
  const popularKeywords = [
    '여행', '맛집', '인테리어', '패션', '자동차', '카페', '음악'
  ];



  // 마지막 이미지 감지용 ref 콜백
  const lastImageRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  // 검색어가 바뀌면 초기화
  useEffect(() => {
    setImages(([]));
    setPage(1);
  }, [query]);

  // 이미지 로딩
  useEffect(() => {
    const searchTerm = query || 'popular';

    

    const load = async () => {
      try {

        console.log('요청 전:', { query: searchTerm, page});

        const data = await fetchImages({ query: searchTerm, page });
        console.log('이미지 불러오기 성공', data);
        
        const results = Array.isArray(data) ? data : data.results || [];
        setImages((prev) => [...prev, ...results]);
        
      } catch (error) {
        console.error('이미지 불러오기 실패:', error);
      }
    };
    load();
  }, [page, query]);

  

  const containerRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowPopular(false);
        setIsFocused(false);
        setPlaceholder('검색');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return() => document.removeEventListener('mousedown', handleClickOutside);
  },[]);


  const handleKeywordClick = (word) => {

  setQuery(word);
  setImages([]);
  setPage(1);
  setShowPopular(false);
  setIsFocused(false);
  setPlaceholder('검색');

  setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== word);
      return [word, ...filtered].slice(0,10)
    })
  };

  const handleInputFocus = () => {
    setPlaceholder('');
    setIsFocused(true);
    setShowPopular(true);
  }

  const handleInputBlue = () => {

  }

  return (
    <>
      <StickyWrapper>
        <HeaderBar>
          <StickySearchBar>
            {!isFocused && (
              <SearchIconWrapper>
                <CiSearch size={25} color="gray" />
              </SearchIconWrapper>
            )}
            <SearchInputWrapper ref={containerRef} style={{ position: 'relative' }}>
              <SearchInput
                type="text"
                maxLength="12"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value.toUpperCase())}
                onFocus={handleInputFocus}
                onBlur={handleInputBlue}
              />
              {showPopular && (
                <SearchGroup 
                  keywords={popularKeywords} 
                  recent={recentSearches}
                  onClick={handleKeywordClick} 
                />
              )}
            </SearchInputWrapper>
          </StickySearchBar>
        </HeaderBar>
      </StickyWrapper>


      <Container>
        <ImageGrid images={images} lastImageRef={lastImageRef} />
        <ScrollToTopButton />
      </Container>
    </>
  );
}

export default SearchBar;
