import styled from 'styled-components';

export const StyledIcon = styled.span`
  font-size: ${({ size }) => size};
  color: ${({ color, theme }) => theme[color] || color};
`;

StyledIcon.defaultProps = {
  size: '16px',
  color: 'inherit'
};
