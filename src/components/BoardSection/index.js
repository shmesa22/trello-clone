import React from 'react';

import Icon from 'components/Icon';
import Card from 'components/Card';
import {
  SectionCardsContainer,
  SectionTitle,
} from './styles';

import { starredBoards } from './index.mock';

const BoardSection = () => (
  <div>
    <SectionTitle>
      <Icon icon={starredBoards.icon}/> {' '} {starredBoards.title}
    </SectionTitle>
    <SectionCardsContainer>
      {starredBoards.cards.map(({ id, title }) => (
        <Card
          key={id}
          title={title}
        />
      ))}
    </SectionCardsContainer>
  </div>
);

export default BoardSection;
