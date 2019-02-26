import React from 'react';
import styled from 'styled-components';
import { GoLocation, GoPerson } from 'react-icons/go';
import media from '../helpers/media';
import { Flex } from './system';

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  filter: grayscale();
  margin: 0 auto 20px;
  ${media.desktop`
    width: 140px;
    height: 140px;
  `}
`;

const Info = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  ${media.desktop`
    margin: 0;
  `}

  li {
    margin: 8px 0;
  }
`;

const ProfileContainer = styled.div`
  max-width: 250px;
  padding: 0 20px;
  ${media.desktop`
    min-width: 250px;
  `}
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const Profile = () => {
  return (
    <ProfileContainer theme="party" className="ProfileContainer">
      <Flex justifyContent="space-between" flexDirection={['row', 'row', 'column']}>
        <Avatar src="/static/avatar.jpeg" />
        <Info>
          <li>
            <GoPerson />
            &nbsp;
            <span>Oles Maiboroda</span>
          </li>
          <li>
            <GoLocation />
            &nbsp;
            <span>Berlin, Germany</span>
          </li>
        </Info>
      </Flex>
      <p>
        Hi, I’m Oles Maiboroda. I do Frontend for a living and have interest in Engineering, UI/UX
        and Product development
      </p>
      <Links>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://dev.to/omaiboroda">
            dev.to
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="http://github.com/omaiboroda">
            github
          </a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </Links>
    </ProfileContainer>
  );
};

export default Profile;
