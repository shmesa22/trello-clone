import styled from 'styled-components';

export const ListsContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: calc(100vh - 103px);
  min-width: 100vw;
  overflow: auto;
  padding: 0 8px;
`;

export const NewList = styled.button.attrs({
  type: 'button',
})`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  height: fit-content;
  margin-right: 16px;
  min-width: 270px;
  padding: 8px;
  width: 270px;
`;
