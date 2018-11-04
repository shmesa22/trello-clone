import React from 'react';

import Icon from 'components/Icon';
import Card from 'components/Card';
import {
  CardContainer,
  SectionCardsContainer,
  SectionTitle,
  CreateCard,
} from './styles';

const BoardsSection = ({ icon, title, boards, onCreateClick }) => (
  <div>
    <SectionTitle>
      <Icon icon={icon} /> {title}
    </SectionTitle>
    <SectionCardsContainer>
      {!!boards &&
        boards.map(({ id, ...props }) => (
          <CardContainer key={id}>
            <Card to={`/boards/${id}`} {...props} />
          </CardContainer>
        ))}
      {onCreateClick && (
        <CardContainer>
          <CreateCard onClick={onCreateClick} />
        </CardContainer>
      )}
    </SectionCardsContainer>
  </div>
);

export default BoardsSection;
