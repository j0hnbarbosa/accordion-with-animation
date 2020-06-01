import {
  Input as InputSematic,
  Button as ButtonSemantic,
  Checkbox as CheckboxSemantic,
  Icon as IconSemantic,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const Card = styled.div`
  position: relative;
  width: 430px;
  height: 600px;
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  margin-top: 80px;
  border-radius: 3px;
  color: #FFF;
  margin-bottom: 90px;
`;

const Input = styled(InputSematic)`
  width: 100%;
  height: 55px;
  border-radius: 3px;

  &.ui.input>input {
    background: #333333;
    border: none;
    color: #FFF;

  }

  &.ui.input>input:focus {
    background: #454545;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px;
`;

const Button = styled(ButtonSemantic)`
  width: 100%;
  height: 50px;

  color: #FFF;

  &.ui.button {
    background: #E50914;
    border: 1px solid #E50914;
    color: #FFF;
    font-size: 20px;
    margin: 0px;
    margin-top: 25px;
    min-height: 50px;
  }

  &.ui.button:active {
    border: none;
    border: 1px solid #FFF;
    height: 49px;
  } 
`;

const ContainerSpace = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Checkbox = styled(CheckboxSemantic)`
margin-top: 20px;

  &&.ui.checkbox>label{
    color: #B3B3B3;
  }
`;

const ContainerRemember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Link = styled(LinkRouter)`
  color: ${(props) => (props.white ? '#FFF' : '#B3B3B3')};
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  
  &:hover{
    ${(props) => (props.underline ? 'text-decoration: underline;' : '')};
    color: ${(props) => (!props.white ? ' #B3B3B3;' : '#FFF')};
  }
`;

const FooterCard = styled.div`
  margin-top: 50px;
`;

const Icon = styled(IconSemantic)`
`;

const ContainerCardFooter = styled.div`
  color: #B3B3B3;

`;

const InsideFooter = styled.div`
  color: #B3B3B3;
  margin-bottom: 15px;
`;

const TextColor = styled.span`
  color: #737373;
  font-size: 20px;
`;

export {
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
};
