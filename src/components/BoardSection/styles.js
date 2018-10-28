import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.textPrimary};
`;

export const SectionCardsContainer = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CardContainer = styled.li`
  width: 45%;
  min-width: 170px;
  max-width: 270px;
  height: 96px;
  margin-bottom: 16px;
  margin-right: 16px;
`;
