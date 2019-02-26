import styled from 'styled-components';
import media from '../helpers/media';

const Background = styled.div`
  ${media.desktop`
    background-image: url('/static/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `}
`;

export default Background;
