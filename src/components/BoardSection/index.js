import React from 'react';

import Icon from 'components/Icon';
import Card from 'components/Card';
import {
  CardContainer,
  SectionCardsContainer,
  SectionTitle,
} from './styles';
import { getFriendlyUrl } from 'utils/getFriendlyUrl';

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
          <CardContainer key={id}>
            <Card
              to={`/boards/${getFriendlyUrl(title)}`}
              title={title}
              isFavorited={isFavorited}
              background={background}
            />
          </CardContainer>
        ))
      }
    </SectionCardsContainer>
  </div>
);

export default BoardSection;
