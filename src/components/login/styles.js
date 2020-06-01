import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/949f70fe-46af-4931-9a83-55cde04f5188/BR-pt-20200302-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  min-width: 360px;
  min-height: 100vh;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
`;

const FooterPage = styled.div`
  height: 180px;
  width: 100%;
  background: rgba(0,0,0,0.85);
`;

const FooterContent = styled.div`
  width: 800px;
  margin: 0 auto;
  color: #757575;
`;

const FooterContentList = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const FooterContentOne = styled.div`
  display: flex;
  font-size: 18px;
  margin: 15px 0px;
`;

const FooterItem = styled.div`
  margin-right: 70px;
  word-wrap: break-word;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export {
  Container,
  Background,
  FooterPage,
  FooterContent,
  FooterContentList,
  FooterItem,
  FooterContentOne,
};
