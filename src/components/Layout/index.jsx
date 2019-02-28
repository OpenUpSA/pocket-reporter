import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import t from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './Header';
import Footer from './Footer';


const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;


const ChildWrapper = styled.div`
  padding: ${({ noPadding }) => (noPadding ? '0' : '10px 0 100px')};
`;


const Layout = (props) => {
  const {
    children,
    title,
    back,
    header,
    footer,
    isoKey,
    noPadding,
    fallback,
    link,
  } = props;

  const headerProps = {
    title,
    back,
    isoKey,
    fallback,
    link,
  };

  return (
    <Fragment>
      <CssBaseline />
      <GlobalStyle />
      {header !== false && <Header {...headerProps} />}
      <ChildWrapper {...{ noPadding }}>
        {children}
      </ChildWrapper>
      {footer !== false && <Footer {...{ isoKey, link }} />}
    </Fragment>
  );
};


export default Layout;


Layout.propTypes = {
  fallback: t.bool,
  children: t.node.isRequired,
  title: t.string,
  back: t.oneOfType([t.string, t.func]),
  header: t.bool,
  footer: t.bool,
  isoKey: t.string,
  noPadding: t.bool,
};


Layout.defaultProps = {
  fallback: false,
  isoKey: null,
  title: null,
  noPadding: false,
  back: null,
  header: true,
  footer: true,
};
