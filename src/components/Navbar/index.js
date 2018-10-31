import React from 'react';

import Icon from 'components/Icon';
import {
  Nav,
  NavButton,
  NavSection,
  NavTitle
} from './styles';

const Navbar = () => (
  <Nav>
    <NavSection>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fas fa-home"
          color="white"
        />
      </NavButton>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fab fa-trello"
          color="white"
        />
      </NavButton>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fas fa-search"
          color="white"
        />
      </NavButton>
    </NavSection>
    <NavSection>
      <NavTitle>
        <Icon icon="fab fa-trello"/> {' '} Trello
      </NavTitle>
    </NavSection>
    <NavSection>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fas fa-plus"
          color="white"
        />
      </NavButton>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fas fa-info"
          color="white"
        />
      </NavButton>
      <NavButton
        to="/boards"
      >
        <Icon
          icon="fas fa-bell"
          color="white"
        />
      </NavButton>
    </NavSection>
  </Nav>
);

export default Navbar;
