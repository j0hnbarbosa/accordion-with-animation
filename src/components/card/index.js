import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions';

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

const CardComponent = (props) => {
  const { signin, isAutheticated } = props;
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isAutheticated) { history.push('/showitems'); }

  return (
    <Card>
      <form>
        <ContainerInput>

          <Title>Entrar</Title>

          <ContainerSpace>
            <Input type="email" onChange={(event) => setUsername(event.target.value)} value={username} placeholder="Email ou número de telefone" />
          </ContainerSpace>
          <ContainerSpace>
            <Input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Senha" />
          </ContainerSpace>
          <Button onClick={(event) => {
            event.preventDefault();
            signin({ username, password });
          }}
          >
            Entrar
          </Button>

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
};

CardComponent.propTypes = {
  signin: PropTypes.func.isRequired,
  isAutheticated: PropTypes.bool.isRequired,
};

const mapDispatchProps = (dispatch) => (
  {
    signin: (param) => dispatch(loginAction(param)),
  }
);

const mapStatetoProps = (state) => {
  const { isAutheticated } = state.authetication;
  return ({
    isAutheticated,
  });
};

export default connect(mapStatetoProps, mapDispatchProps)(CardComponent);
