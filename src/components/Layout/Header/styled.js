import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';


const HeaderWrapper = styled.div`
  color: white;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
`;


const HeaderBar = styled.div`
  top: 0;
  width: 100%;
  position: initial;
  background-color: #4a4a4a;
  height: 50px;
  display: flex;
  align-items: center;
`;


const HeaderLink = styled.a`
  color: white;
`;


const HeaderText = styled.p`
  width: 100%;
  margin: 0;
  color: white;
  text-align: center;
`;


const HeaderTitle = styled.h3`
  margin: 10px 0;
  color: #4a4a4a;
`;


const HeaderProgress = styled(LinearProgress)`
  && {
    background: #f5f5f5;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    height: 20px;
  }
  
  & .label {
    background: ${({ barColorPrimary }) => barColorPrimary};
  }
`;


export {
  HeaderWrapper,
  HeaderBar,
  HeaderLink,
  HeaderText,
  HeaderTitle,
  HeaderProgress,
};


export default {
  HeaderWrapper,
  HeaderBar,
  HeaderLink,
  HeaderText,
  HeaderTitle,
  HeaderProgress,
};
