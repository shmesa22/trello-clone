import React from 'react';

import Icon from 'components/Icon';
import {
  DescriptionContainer,
  DescriptionDetails,
  DescriptionTitle,
  CardFavorite,
} from './styles';

const BoardDescription = ({ title, isFavorited, onBlur, onFavoriteClick }) => (
  <DescriptionContainer>
    <DescriptionTitle title={title} onBlur={onBlur} />
    <CardFavorite
      icon="far fa-star"
      onClick={onFavoriteClick}
      isFavorited={isFavorited}
    />{' '}
    {' | '}
    <DescriptionDetails>Personal</DescriptionDetails> {' | '}
    <DescriptionDetails>
      <Icon icon="fas fa-lock" /> Private
    </DescriptionDetails>
  </DescriptionContainer>
);

export default BoardDescription;
