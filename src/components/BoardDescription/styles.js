import styled from 'styled-components';

import Icon from 'components/Icon';

export const DescriptionContainer = styled.div`
  align-items: center;
  display: flex;
  min-width: 300px;
  padding: 8px;
  width: 100%;
`;

export const DescriptionTitle = styled.input.attrs({
  placeholder: props => props.title,
})`
  border: none;
  color: ${({ theme: { colors } }) => colors.textSecondary};
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
  padding: 0 8px 0 0;

  &::placeholder {
    text-transform: capitalize;
  }
`;

export const DescriptionDetails = styled.p`
  color: ${({ theme: { colors } }) => colors.textSecondary};
  font-size: 14px;
  padding: 0 8px;
`;

export const CardFavorite = styled(Icon)`
  color: ${({ isFavorited, theme: { colors } }) =>
    isFavorited ? colors.yellow : colors.textPrimary};

  &:hover {
    cursor: pointer;
  }
`;
