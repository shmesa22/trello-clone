import React from 'react';

import Icon from 'components/Icon';
import {
  DescriptionContainer,
  DescriptionDetails,
  DescriptionTitle,
} from './styles';

const BoardDescription = () => (
  <DescriptionContainer>
    <DescriptionTitle>
      React MDE {' '}
      <Icon icon="far fa-star" />
    </DescriptionTitle> {' | '}
    <DescriptionDetails>
      Personal
    </DescriptionDetails> {' | '}
    <DescriptionDetails>
      <Icon icon="fas fa-lock" /> {' '}
      Private
    </DescriptionDetails>
  </DescriptionContainer>
);

export default BoardDescription;
