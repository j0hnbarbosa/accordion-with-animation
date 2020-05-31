import {
  Input as InputSematic,
  Button as ButtonSemantic,
  Checkbox as CheckboxSemantic,
  Icon as IconSemantic,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/949f70fe-46af-4931-9a83-55cde04f5188/BR-pt-20200302-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  max-height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 360px;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  height: 110vh;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
`;

export const Card = styled.div`
  width: 430px;
  height: 600px;
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  margin-top: 80px;
  border-radius: 3px;
  color: #FFF;
`;

export const Input = styled(InputSematic)`
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

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px;
`;

export const Button = styled(ButtonSemantic)`
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
  }

  &.ui.button:active {
    border: none;
    border: 1px solid #FFF;
    height: 49px;
  } 
`;

export const ContainerSpace = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Checkbox = styled(CheckboxSemantic)`
margin-top: 20px;

  &&.ui.checkbox>label{
    color: #B3B3B3;
  }
`;

export const ContainerRemember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Link = styled(LinkRouter)`
  color: #B3B3B3;
  &:hover{
    color: #B3B3B3;
    ${(props) => (props.underline ? 'text-decoration: underline;' : '')};
  }
`;

export const FooterCard = styled.div`
  margin-top: 50px;
`;

export const Icon = styled(IconSemantic)`
`;

export const ContainerCardFooter = styled.div`
  color: #B3B3B3;

`;

export const InsideFooter = styled.div`
  color: #B3B3B3;
  margin-bottom: 15px;
`;
