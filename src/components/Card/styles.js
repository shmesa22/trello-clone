import styled from 'styled-components';
import Icon from 'components/Icon';

export const CardContainer = styled.li`
  width: 45%;
  min-width: 170px;
  max-width: 270px;
  background-color: ${({ background, theme: { cardsColors} }) => cardsColors[background]};
  border-radius: 3px;
  height: 96px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  margin-right: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

export const CardFavorite = styled(Icon)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: ${({ isFavorited, theme: { colors } }) => isFavorited ? colors.yellow : colors.white};
`;
