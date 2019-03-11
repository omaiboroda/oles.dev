import React from 'react';
import styled from 'styled-components';
import { GoLocation, GoPerson } from 'react-icons/go';
import media from '../helpers/media';
import { Flex } from './system';

const ProfileContainer = styled.div`
  margin-bottom: 30px;
  ${media.desktop`
    max-width: 230px;
    margin-right: 40px;
    min-width: 230px;
  `}
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  filter: grayscale();
  ${media.desktop`
    margin: 0 auto 20px;
    width: 140px;
    height: 140px;
  `}
`;

const Info = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0 10px;
  justify-content: center;
  ${media.desktop`
    margin: 0;
  `}
  li {
    margin: 5px 0;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  ${media.desktop`
    flex-direction: column;
  `}

  li:not(:first-child)::before {
    content: '•';
    margin: 0 10px;

    ${media.desktop`
      display: none;
  `}
  }
`;

const Profile = () => {
  return (
    <ProfileContainer theme="party" className="ProfileContainer">
      <Flex justifyContent="space-betcween" flexDirection={['row', 'row', 'column']}>
        <div>
          <Avatar src="/static/avatar.jpeg" />
        </div>
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
