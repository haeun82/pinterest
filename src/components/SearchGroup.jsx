import React from 'react';
import {
  Popup,
  Section,
  Title,
  KeywordList,
  KeywordItem
} from '../styles/SearchGroup.styles';

function SearchGroup({ keywords = [], recent = [], onClick }) {
  return (
    <Popup>
      {recent.length > 0 && (
        <Section>
          <Title>🕐최근 검색어</Title>
          <KeywordList>
            {recent.map((item, index) => (
              <KeywordItem key={index} onClick={() => onClick(item)}>
                {item}
              </KeywordItem>
            ))}
          </KeywordList>
        </Section>
      )}
      {keywords.length > 0 && (
        <Section>
          <Title>🔥인기 검색어</Title>
          <KeywordList>
            {keywords.map((item, index) => (
              <KeywordItem key={index} onClick={() => onClick(item)}>
                {item}
              </KeywordItem>
            ))}
          </KeywordList>
        </Section>
      )}
    </Popup>
  );
}

export default SearchGroup;
