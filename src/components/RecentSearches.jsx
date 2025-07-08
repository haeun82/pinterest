// components/RecentSearches.jsx
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 12px 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Keyword = styled.li`
  background-color: #eee;
  padding: 6px 12px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
`;

function RecentSearches({ recent, onClick }) {
  const safeRecent = Array.isArray(recent) ? recent : [];

  if (safeRecent.length === 0) return null;

  return (
    <div>
      <h4>최근 검색어</h4>
      <List>
        {safeRecent?.map((word, i) => (
          <Keyword key={i} onClick={() => onClick(word)}>
            {word}
          </Keyword>
        ))}
      </List>
    </div>
  );
}

export default RecentSearches;
