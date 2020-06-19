import React from 'react';
import {
  Button,
  Card,
  Checkbox,
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
  TextColor,
} from './styles';

const CardComponent = () => (
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
              <TextColor>Novo por aqui?</TextColor>
              {' '}
              <Link to="subscribe" white underline size="20px">Assine agora.</Link>
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
);

export default CardComponent;
