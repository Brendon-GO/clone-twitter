import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Brendon Gama</h1>
        <h2>@brendon_gama</h2>

        <p>
          Instagram:  
          <a href="https://www.instagram.com/brendon_gamaa/"> @brendon_gamaa</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de junho de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>50</strong>
          </span>
          <span>
            <strong>500 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed></Feed>
    </Container>
  );
};

export default ProfilePage;
