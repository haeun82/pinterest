import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

const AppWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 70px;
  width: calc(100% - 70px);
`;

const StickyContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageGridWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 16px;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <MainContent>
        <StickyContent>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar />
                <ImageGridWrapper>
                <ImageGrid />
                </ImageGridWrapper>
              </>
            } />
            {/* 다른 라우트도 여기 추가 가능 */}
          </Routes>
        </StickyContent>
      </MainContent>
    </AppWrapper>
  );
}

export default App;
