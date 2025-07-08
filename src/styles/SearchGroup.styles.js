import styled from "styled-components";

export const Popup = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  z-index: 10;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const Section = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const KeywordItem = styled.li`
  background-color: #eee;
  padding: 6px 12px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ddd;
  }
`;
