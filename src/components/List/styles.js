import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  border-radius: 3px;
  height: fit-content;
  margin-right: 16px;
  min-width: 270px;
  padding: 8px;
  width: 270px;
`;

export const ListTitle = styled.h3`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: 20px;
  margin: 8px 0;
`;

export const TaskCreate = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  color: ${({ theme: { colors } }) => colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0;
  text-align: left;
  width: 100%;
`;
