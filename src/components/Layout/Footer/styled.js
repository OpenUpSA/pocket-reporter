import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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

const FooterList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 100%;
display: flex;
justify-content: space-between;
`;

const FooterItem = styled.li`
width: 33.33%;
font-size: 12px;
:hover, :active {
  background-color: #8fd247;
  border-radius: 0;
}
`;

const FooterButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const AddButton = styled(Fab)`
&&{
  background-color: grey;
  background-image: radial-gradient(circle at 50% 50%, #969696, #333);
  border: 5px solid #73c619;
  box-shadow: none;
  width: 30%;
  color: white;
  height: 75px;
  width: 75px;
  top: -30px;
  position: absolute;
}

:hover, :active {
  border: 5px solid #8fd247;
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


export {
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
};


export default {
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
};
