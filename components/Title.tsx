import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media';
import { H1, H3 } from './Typography';

const StyledTitle = styled.div`
  text-align: center;
  ${media.desktop`
    margin-bottom: 40px;
  `}
`;

const Title = () => {
  return (
    <StyledTitle>
      <H1>Opinionated frontend</H1>
      <H3>UX/DX</H3>
    </StyledTitle>
  );
};

export default Title;
