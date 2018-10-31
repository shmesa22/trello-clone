import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  margin-bottom: 16px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const TaskInput = styled.input.attrs({
  type: 'text',
  placeholder: props => props.title || 'Click me to edit...'
})`
  border: none;
  width: 100%;
  height: auto;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
