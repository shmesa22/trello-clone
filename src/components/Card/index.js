import React from 'react';

import {
  CardContainer,
  CardTitle,
  CardFavorite,
} from './styles';

const Card = ({ title }) => (
  <CardContainer background="rgb(0, 121, 191)">
    <CardTitle>{title}</CardTitle>
    <CardFavorite icon="far fa-star" />
  </CardContainer>
);

export default Card;
