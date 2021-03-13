import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
            <ProfileData>
                {/* <EditButton outline>Editar perfil</EditButton> */}
                <h1>Guilherme Luiz</h1>
                <h2>@guilherme_luiz</h2>

                <p>
                    Developer at <a href="rocketseat.com.br">@RocketSeat</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 21 de junho de 2001
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>94 </strong> seguidores
                    </span>
                </Followage>
                
            </ProfileData>
        
    </Container>
    );
}

export default ProfilePage;