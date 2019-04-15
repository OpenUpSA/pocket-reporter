import styled from 'styled-components';
import { Typography, Select, CircularProgress } from '@material-ui/core';

const StyledSelect = styled(Select)`
  && {
    width: 100%;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12);

    & .select {
      padding: 16px;
    }
  }
`;

const Loader = styled(CircularProgress)`
  && {
    color: rgb(74, 74, 74);
  }
`;

const SelectWrap = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const StyledWrapper = styled.div`
  background-color: #73c619;
  background-image: radial-gradient(circle at 50% 50%, #b4ec51, #429321);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  display: none;

  @media screen and (min-height: 500px) {
    display: block;
    width: 200px;
    height: 200px;
  }
`;

const DisplayText = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: bold;
    color: rgb(74, 74, 74);
    margin-top: 10px;
  }
`;

const HeadingWrap = styled.div`
  text-align: center;
  max-width: 300px;
`;

export { StyledSelect, SelectWrap, StyledWrapper, StyledImage, DisplayText, HeadingWrap, Loader };

export default {
  StyledSelect,
  SelectWrap,
  StyledWrapper,
  StyledImage,
  DisplayText,
  HeadingWrap,
  Loader,
};
