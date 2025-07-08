import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 320px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 12px;
  z-index: 100;
`;

const Title = styled.h4`
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

const KeywordList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const KeywordItem = styled.li`
  background-color: #eee;
  padding: 6px 14px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;

  &:hover {
    background-color: #ad081b;
    color: white;
  }
`;

function PopularKeywords({ keywords = [], onClick }) {
  if (!Array.isArray(keywords) || keywords.length === 0) return null;

  return (
    <Popup role="listbox" aria-label="인기 검색어 목록">
      <Title>인기 검색어</Title>
      <KeywordList>
        {keywords.map((word, i) => (
          <KeywordItem
            key={i}
            onClick={() => onClick(word)}
            role="option"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(word);
              }
            }}
          >
            {word}
          </KeywordItem>
        ))}
      </KeywordList>
    </Popup>
  );
}

export default PopularKeywords;
