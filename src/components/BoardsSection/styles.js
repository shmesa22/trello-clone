import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  line-height: 1.5;
`;

export const SectionCardsContainer = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CardContainer = styled.li`
  height: 96px;
  margin-bottom: 16px;
  margin-right: 16px;
  max-width: 270px;
  min-width: 170px;
  width: 45%;
`;

export const CreateCard = styled.button.attrs({
  children: 'Create new card',
})`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 100%;
  width: 100%;
`;
