import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import ClickWrapper from '../../global/ClickWrapper';

const StyledClickWrapper = styled(ClickWrapper)`
  padding: 20px;
`;

const AboutWrapper = styled.div`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 21px;
  padding: 0px 15px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const AboutButton = styled(Button)`
  && {
    width: 100%;
    text-transform: none;
    background-color: #73c619;
    color: white;
    margin-bottom: 20px;

    :hover {
      background-color: #8fd247;
    }
  }
`;

const AboutHead = styled.h2`
  font-size: 16px;
`;

const AboutText = styled.div`
  font-size: 14px;
`;

const AboutList = styled.ul`
  font-size: 14px;
`;

const AboutLogos = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LogoImage = styled.img`
  margin: 5px;
  max-height: 100px;
  max-width: 30%;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
  font-size: 14px;
`;

export {
  AboutWrapper,
  AboutButton,
  AboutHead,
  AboutText,
  AboutList,
  AboutLogos,
  LogoImage,
  AboutLink,
  Wrapper,
  StyledClickWrapper,
};

export default {
  AboutWrapper,
  AboutButton,
  AboutHead,
  AboutText,
  AboutList,
  AboutLogos,
  LogoImage,
  AboutLink,
  Wrapper,
  StyledClickWrapper,
};
