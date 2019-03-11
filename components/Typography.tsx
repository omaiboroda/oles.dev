import styled from 'styled-components';
import { space, textAlign } from 'styled-system';
import media from '../helpers/media';

export const H1 = styled.h1`
  line-height: 28px;
  font-size: 24px;

  ${media.desktop`
    line-height: 53px;
    font-size: 45px;
  `}
  ${space}
  ${textAlign}
`;

export const H2 = styled.h2`
  line-height: 28px;
  font-size: 24px;
  ${space}
  ${textAlign}
`;

export const H3 = styled.h2`
  line-height: 15px;
  font-size: 13px;

  ${media.desktop`
    line-height: 18px;
    font-size: 15px;
  `}
  ${space}
  ${textAlign}
`;

export const A = styled.a`
  color: ${props => props.theme.colors.greyDarkest};
  ${space}
  ${textAlign}
`;

export const TransparentLink = styled.a`
  text-decoration: none;
  ${space}
  ${textAlign}
`;
