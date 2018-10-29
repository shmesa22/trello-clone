import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 270px;
  min-width: 270px;
  height: fit-content;
  padding: 8px;
  border-radius: 3px;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  margin-right: 16px;
`;

export const ListTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme: { colors }}) => colors.textPrimary};
  margin: 8px 0;
`;

export const TaskCreate = styled.button`
  background: rgba(0,0,0,0);
  color: ${({ theme: { colors }}) => colors.textSecondary};
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  border: none;
  text-align: left;
  padding: 8px 0;
`;
