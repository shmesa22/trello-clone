import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  min-width: 300px;
  padding: 4px;
  width: 100%;
`;

export const NavButton = styled(Link).attrs({
  type: 'button',
})`
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.3);
  border: 0;
  border-radius: 3px;
  color: #fff;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 32px;
  justify-content: space-around;
  min-width: 32px;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const NavSection = styled.div`
  display: flex;
  justify-content: left;

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: right;
  }
`;

export const NavTitle = styled.h1`
  color: hsla(0, 0%, 100%, 0.4);
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
