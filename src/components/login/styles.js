import { Input as InputSematic, Button as ButtonSemantic } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const Input = styled(InputSematic)`
  &.ui.input>input{
    border: none;
    border-bottom: 1px solid rgba(34,36,38,.15);
  }
`;

export const Button = styled(ButtonSemantic)`
  min-width: 150px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const Rotate = styled.div`
  /* display: inline-block; */
  margin-top: 150px;
  animation: ${rotate} 20s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
