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

export const CreateCard = styled.button.attrs({
  children: 'Create new card',
})`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
`;
