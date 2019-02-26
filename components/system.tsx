import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  lineHeight,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system';

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);
