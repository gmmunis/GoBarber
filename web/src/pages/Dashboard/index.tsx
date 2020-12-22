import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  console.log(user);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEIo5yV_WiaHQ/profile-displayphoto-shrink_200_200/0/1599415331003?e=1614211200&v=beta&t=3s2q0yVvnWs9cZKdLb_BxquPiPNL6Rp-JBaLF_z0uqE" alt="Gui Munis" />
            <div>
              <span>Bem-vindo,</span>
              <strong>Gui Munis</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
}

export default Dashboard;