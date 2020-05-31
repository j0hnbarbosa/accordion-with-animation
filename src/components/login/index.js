import React from 'react';
import {
  Background,
  Button,
  Card,
  Checkbox,
  Container,
  ContainerInput,
  ContainerRemember,
  ContainerSpace,
  FooterCard,
  Input,
  Link,
  Title,
  Icon,
  ContainerCardFooter,
  InsideFooter,
} from './styles';

const Login = () => (
  <Container>
    <Background>
      <Card>
        <form>
          <ContainerInput>

            <Title>Entrar</Title>

            <ContainerSpace>
              <Input type="email" placeholder="Email ou número de telefone" />
            </ContainerSpace>
            <ContainerSpace>
              <Input type="password" placeholder="Senha" />
            </ContainerSpace>
            <Button>Entrar</Button>

            <ContainerRemember>
              <span>
                <Checkbox label="Lembre-se de mim" />
              </span>
              <span><Link to="/needhelp" underline>Precisa de Ajuda</Link></span>
            </ContainerRemember>

            <FooterCard>
              <ContainerCardFooter>
                <InsideFooter>
                  <Link to="/facebook">
                    <Icon color="white" size="large" name="facebook" />
                    Conectar com Facebook
                  </Link>
                </InsideFooter>

                <InsideFooter>
                  Novo por aqui? Assine agora.
                </InsideFooter>

                <InsideFooter>
                  Esta página é protegida pelo Google reCAPTCHA para garantir
                  que você não é um robô. Saiba mais.
                </InsideFooter>

              </ContainerCardFooter>
            </FooterCard>

          </ContainerInput>
        </form>
      </Card>
    </Background>
  </Container>
);

export default Login;
