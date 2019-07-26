import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media';
import { Box } from './system';

const ContainerStyled = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 100vh;
  ${media.desktop`
    padding: 0 40px;
  `}
`;

interface Props {
  children: React.ElementType;
}

const Container: React.FunctionComponent<Props> = ({ children }: Props) => (
  <div>
    <ContainerStyled>{children}</ContainerStyled>
    <Box height={50} />
  </div>
);

export default Container;
