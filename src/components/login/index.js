import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../../redux/actions';
import {
  Container, Input, Button, Rotate,
} from './styles';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <Container>
      <Input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Email" />
      <Input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password" />

      <Button
        circular
        primary
        disabled={!email || !password}
        onClick={() => { dispatch(loginAction({ email, password })); }}
      >
        LOGIN
      </Button>
      <Button
        circular
        primary
        onClick={() => { dispatch(logoutAction('Logged out')); }}
      >
        LOGOUT
      </Button>

      <Rotate>
        {' '}
        <div>{login}</div>
      </Rotate>
    </Container>
  );
};

export default Login;
