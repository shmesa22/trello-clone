import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const DescriptionTitle = styled.input.attrs({
  placeholder: 'React MDE',
})`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
  padding: 0 8px 0 0;
  color: ${({ theme: { colors } }) => colors.textSecondary };
  border: none;
`;

export const DescriptionDetails = styled.p`
  padding: 0 8px;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.textSecondary };
`;
