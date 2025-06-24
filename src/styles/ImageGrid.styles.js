import Masonry from "react-masonry-css";
import styled from "styled-components";


export const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -16px;
  width: auto;

  .my-masonry-grid_column {
    padding-left: 16px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 25px;
  }

  @media (max-width: 1200px) {
    max-width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  &:hover .button-group {
    opacity: 1;
  }

  &:hover img {
    filter: brightness(70%);
    transform: scale(1.03);
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
  transition: all 0.3s ease;
  object-fit: cover;
`;

export const ButtonGroup = styled.div`
  width: 120px;
  position: absolute;
  top: 12px;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
`;

export const Button = styled.button`
  background-color: #e60023;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ad081b;
  }
`;

export const IconButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: #ddd;
  }
`;