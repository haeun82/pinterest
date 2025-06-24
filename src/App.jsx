import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import SearchBar from './pages/SearchBar';

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </Layout>
        
    </>
  );
}

export default App;
