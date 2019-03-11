import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Text } from './system';
import { TransparentLink } from './Typography';

const Logo = styled.div`
  color: white;
  background-color: ${props => props.theme.colors.greyDark};
  border-radius: 2px;
  padding: 8px 16px;
  font-weight: bold;
  letter-spacing: 0.6px;
`;

const Header = () => {
  return (
    <Flex height={60} alignItems="center">
      <Link as="/" passHref>
        <TransparentLink>
          <Logo>oles.dev</Logo>
        </TransparentLink>
      </Link>
    </Flex>
  );
};

export default Header;
