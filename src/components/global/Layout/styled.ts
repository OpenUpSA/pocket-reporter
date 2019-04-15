import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

interface ChildWrapperShape {
  noPadding?: boolean;
  children: JSX.Element | JSX.Element[];
  [key: string]: any;
}

const ChildWrapper = styled.div`
  padding: 10px 20px 100px;
  max-width: 1000px;
  margin: 0 auto;
`;

export { GlobalStyle, ChildWrapper };
export default { GlobalStyle, ChildWrapper };
