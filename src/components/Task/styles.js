import styled from 'styled-components';

export const TaskContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 3px;
  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
`;

export const TaskInput = styled.input.attrs({
  type: 'text',
  placeholder: props => props.title || 'Click me to edit...',
})`
  border: none;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 24px;
  width: 100%;
`;
