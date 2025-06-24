import { useEffect, useState } from 'react';
import {
  Container,
  StickyWrapper,
  StickySearchBar,
  SearchInput,
  SearchIconWrapper,
  SearchInputWrapper,
} from '../styles/SearchBar.styles';
import { fetchImages } from '../api/unsplash';
import ImageGrid from '../components/ImageGrid';
import { CiSearch } from 'react-icons/ci';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [placeholder, setPlaceholder] = useState('검색');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchImages({ query });
        setImages(data);
      } catch (error) {
        console.error('이미지 불러오기 실패:(', error);
      }
    };
    load();
  }, [query]);

  return (
    <>
      <StickyWrapper>
        <StickySearchBar>
          {!isFocused && (
            <SearchIconWrapper>
              <CiSearch size={25} color="gray" />
            </SearchIconWrapper>
          )}
          <SearchInputWrapper>
            <SearchInput
              type="text"
              maxLength="12"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value.toUpperCase())}
              onFocus={() => {
                setPlaceholder('');
                setIsFocused(true);
              }}
              onBlur={() => {
                setPlaceholder('검색');
                setIsFocused(false);
              }}
            />
          </SearchInputWrapper>
        </StickySearchBar>
      </StickyWrapper>

      <Container>
        <ImageGrid images={images} />
      </Container>
    </>
  );
}

export default SearchBar;
