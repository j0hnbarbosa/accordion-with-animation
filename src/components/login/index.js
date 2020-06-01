import React from 'react';
import CardCompoent from '../card';
import {
  Container,
  Background,
  FooterPage,
  FooterContent,
  FooterContentList,
  FooterItem,
} from './styles';

const Login = () => (
  <>
    <Container>
      <Background>

        <CardCompoent />

      </Background>

      <FooterPage>
        <FooterContent>
          <FooterContentList>
            Dúvidas? Ligue:
            {' '}
            <FooterItem>0800-761-4631</FooterItem>
          </FooterContentList>
          <FooterContentList>
            <FooterItem>Termos dos Cartões pré-pagos</FooterItem>
            <FooterItem>Termos de uso</FooterItem>
            <FooterItem>Declaração de privacidade</FooterItem>
          </FooterContentList>
        </FooterContent>
      </FooterPage>

    </Container>
  </>
);

export default Login;
