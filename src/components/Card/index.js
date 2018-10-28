import React from 'react';

import {
  StyledCard,
  CardTitle,
  CardFavorite,
} from './styles';

const Card = () => (
  <StyledCard background="rgb(0, 121, 191)">
    <CardTitle>This is a long title with ellipsis</CardTitle>
    <CardFavorite icon="far fa-star" />
  </StyledCard>
);

export default Card;
