import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

export const StyledCard = styled(Link)`
  background-color: ${({ theme: { cardsColors } }) =>
    cardsColors[Math.floor(Math.random() * 9)]};
  border-radius: 3px;
  display: block;
  height: 100%;
  padding: 8px;
  position: relative;
  width: 100%;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const CardFavorite = styled(Icon)`
  bottom: 8px;
  color: ${({ isFavorited, theme: { colors } }) =>
    isFavorited ? colors.yellow : colors.white};
  position: absolute;
  right: 8px;
`;
