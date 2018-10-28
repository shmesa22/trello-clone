import styled from 'styled-components';
import {
  small,
  medium,
  large,
} from 'styles/mediaQueries';

const Container = styled.div`
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;

  ${small} {
    max-width: 600px;
  }

  ${medium} {
    max-width: 750px;
  }

  ${large} {
    max-width: 1100px;
  }
`;

export default Container;
