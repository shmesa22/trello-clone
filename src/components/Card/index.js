import React from 'react';

import {
  StyledCard,
  CardTitle,
  CardFavorite,
} from './styles';

const Card = ({
  title,
  isFavorited,
  background,
  to,
}) => (
  <StyledCard
    to={to}
    background={background}
  >
    <CardTitle>{title}</CardTitle>
    <CardFavorite
      icon="far fa-star"
      isFavorited={isFavorited}
    />
  </StyledCard>
);

export default Card;
