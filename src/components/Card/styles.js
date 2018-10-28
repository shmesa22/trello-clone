import styled from 'styled-components';
import Icon from 'components/Icon';

export const StyledCard = styled.div`
  width: 48%;
  min-width: 170px;
  max-width: 270px;
  background-color: ${({ background }) => background};
  border-radius: 3px;
  height: 96px;
  padding: 8px;
  position: relative;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.white};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

export const CardFavorite = styled(Icon)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: ${({ theme }) => theme.white};
`;
