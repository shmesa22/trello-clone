import React from 'react';

import { StyledCard, CardTitle, CardFavorite } from './styles';

const Card = ({ title, isFavorited, to }) => (
  <StyledCard to={to}>
    <CardTitle>{title}</CardTitle>
    <CardFavorite icon="far fa-star" isFavorited={isFavorited} />
  </StyledCard>
);

export default Card;
