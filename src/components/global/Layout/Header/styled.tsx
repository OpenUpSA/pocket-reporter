import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const HeaderWrapper = styled.div`
  color: white;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

const HeaderText = styled.p`
  width: 100%;
  margin: 0;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeaderTitle = styled.h3`
  margin: 10px 0;
  color: #4a4a4a;
`;

const HeaderProgress = ({ barColorPrimary, ...otherProps }): JSX.Element => {
  const InnerComponent = styled(LinearProgress)`
    && {
      background: #f5f5f5;
      border: 0;
      color: white;
      padding: 0 30px;
      height: 20px;
    }

    & .label {
      background: ${barColorPrimary};
    }
  `;

  return <InnerComponent {...otherProps} />;
};

const BackButtonWrapper = styled(IconButton)`
  && {
    color: white;
    width: 40px;
    height: 40px;
    padding: 8px;
    margin-left: 16px;
  }
`;

const IsoKeyWrapper = styled(Button)`
  && {
    height: 40px;
    color: white;
    margin-right: 16px;
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WarningWrapper = styled.div`
  width: 24px;
`;

export {
  Wrapper,
  HeaderWrapper,
  HeaderBar,
  BackButtonWrapper,
  HeaderText,
  HeaderTitle,
  HeaderProgress,
  IsoKeyWrapper,
  WarningWrapper,
};

export default {
  Wrapper,
  HeaderWrapper,
  HeaderBar,
  BackButtonWrapper,
  HeaderText,
  HeaderTitle,
  HeaderProgress,
  IsoKeyWrapper,
  WarningWrapper,
};
