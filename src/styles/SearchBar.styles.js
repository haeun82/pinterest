import styled from 'styled-components';

export const StickyWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1001;
  background-color: white;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
  width: 100%; 
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 1400px;
  padding: 0 16px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const LogoArea = styled.div`
  flex-shrink: 0; 
  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    img {
      width: 28px;
      height: 28px;
    }
  }
`;


export const StickySearchBar = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  max-width: 1100px;
  height: 44px;
  padding: 0 16px 0 40px;
  background-color: #f1f1f1;
  border-radius: 22px;
  display: flex;
  align-items: center;
  margin: 0 auto;

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
  position: relative;
  flex-grow: 1;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  color: black;
  text-shadow: 0 0 0 black;

  margin-left: 0;
  padding-left: 10px;
  &::placeholder {
    color: #aaa;
    text-shadow: none;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;


export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 16px 20px;
`;
