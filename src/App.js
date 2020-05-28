import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction, logoutAction } from './redux/actions';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Email" />
      <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password" />
      <button type="button" onClick={() => { dispatch(loginAction()); }}>LOGIN</button>
      <button type="button" onClick={() => { dispatch(logoutAction()); }}>LOGOUT</button>
      <div>{login}</div>
    </div>
  );
}

export default App;
