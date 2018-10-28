import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-size: 1.15rem;
  line-height: 1.5;
  color: ${({theme}) => theme.textPrimary};
`;

export const SectionCardsContainer = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
