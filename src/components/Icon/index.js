import React from 'react';
import { StyledIcon } from './styles';

const Icon = ({ icon, ...props}) => (
  <StyledIcon {...props}>
    <i className={icon} />
  </StyledIcon>
);

export default Icon;
