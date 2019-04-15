import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Gradient = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 99;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const FooterBar = styled.div`
  top: auto;
  bottom: 0;
  height: 50px;
  width: 100%;
  position: initial;
  background-color: #73c619;
  color: white;
`;

const FooterToolbar = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const FooterList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  width: 33.33%;
  font-size: 12px;
`;

const FooterButton = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const AddButton = styled(Fab)`
  && {
    height: 75px;
    width: 75px;
    background-color: grey;
    background-image: radial-gradient(circle at 50% 50%, #969696, #333);
    border: 5px solid #73c619;
    box-shadow: none;
    color: white;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  && {
    width: 65px;
    height: 66px;
    border: 5px solid white;
    border-radius: 50%;
    padding: 5px;
  }
`;

const Float = styled.div`
  position: relative;
  bottom: 30px;
`;

export {
  Float,
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
  Gradient,
};

export default {
  Float,
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
  Gradient,
};
