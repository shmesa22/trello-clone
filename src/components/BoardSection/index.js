import React from 'react';

import Icon from 'components/Icon';
import Card from 'components/Card';
import {
  SectionCardsContainer,
  SectionTitle,
} from './styles';

const BoardSection = ({
  icon,
  title,
  cards
}) => (
  <div>
    <SectionTitle>
      <Icon icon={icon}/> {' '} {title}
    </SectionTitle>
    <SectionCardsContainer>
      {
        cards.map(({
          id,
          title,
          isFavorited,
          background,
        }) => (
          <Card
            key={id}
            title={title}
            isFavorited={isFavorited}
            background={background}
          />
        ))
      }
    </SectionCardsContainer>
  </div>
);

export default BoardSection;
