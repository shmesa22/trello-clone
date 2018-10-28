import React from 'react';

import {
  CardContainer,
  CardTitle,
  CardFavorite,
} from './styles';

const Card = ({
  title,
  isFavorited,
  background,
}) => (
  <CardContainer background={background}>
    <CardTitle>{title}</CardTitle>
    <CardFavorite
      icon="far fa-star"
      isFavorited={isFavorited}
    />
  </CardContainer>
);

export default Card;
