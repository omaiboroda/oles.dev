import styled from 'styled-components';
import media from '../helpers/media';

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 100vh;
  ${media.desktop`
    padding: 30px 40px;
  `}
`;

export default Container;
