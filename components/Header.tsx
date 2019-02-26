import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media';
import { H1, H3 } from './Typography';

const StyledHeader = styled.header`
  text-align: center;
  ${media.desktop`
    margin-bottom: 40px;
  `}
`;

const Header = () => {
  return (
    <StyledHeader>
      <H1>Opinionated frontend</H1>
      <H3>UX/DX</H3>
    </StyledHeader>
  );
};

export default Header;
