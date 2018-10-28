import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 4px;
  width: 100%;
  min-width: 300px;
`;

export const NavButton = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  border-radius: 3px;
  border: 0;
  display: flex;
  height: 32px;
  justify-content: space-around;
  min-width: 32px;
  background-color: hsla(0,0%,100%,.3);
  color: #fff;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: hsla(0,0%,100%,.4);
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
  font-size: 20px;
  color: hsla(0,0%,100%,.4);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
