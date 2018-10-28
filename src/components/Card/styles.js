import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

export const StyledCard = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ background, theme: { cardsColors} }) => cardsColors[background]};
  display: block;
  border-radius: 3px;
  padding: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
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
