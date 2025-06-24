import styled from 'styled-components';

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1001;
  background-color: white;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
  width: 100%;  /* 화면 전체 너비 차지 */
`;

export const StickySearchBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 44px;
  padding: 0 16px 0 40px;
  background-color: #f1f1f1;
  border-radius: 22px;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 90%;
    height: 38px;
    padding: 0 12px 0 36px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    height: 36px;
  }
`;


export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  text-shadow: 0 0 0 black;

  &::placeholder {
    color: #aaa;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 16px;
`;
