import styled from 'styled-components';

export const StyledIcon = styled.span`
  color: ${({ color, theme }) => theme.colors[color] || color};
  font-size: ${({ size }) => size};
`;

StyledIcon.defaultProps = {
  size: '16px',
  color: 'inherit',
};
