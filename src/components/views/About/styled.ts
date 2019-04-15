import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { darken } from 'polished';

const ImageItem = styled.li`
  margin: 5px;
  max-height: 100px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 21px;
  padding: 0px 15px;
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

const AboutText = styled(Markdown)`
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
  max-height: 100px;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: #337ab7;
  font-size: 14px;

  &:hover {
    color: ${darken(0.2, '#337ab7')};
  }
`;

export {
  AboutWrapper,
  AboutButton,
  AboutHead,
  AboutText,
  AboutList,
  ImageItem,
  AboutLogos,
  LogoImage,
  AboutLink,
};

export default {
  AboutWrapper,
  AboutButton,
  AboutHead,
  AboutText,
  AboutList,
  ImageItem,
  AboutLogos,
  LogoImage,
  AboutLink,
};
