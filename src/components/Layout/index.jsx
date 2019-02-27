import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './Header';
import Footer from './Footer';


const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
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
  } = props;

  const headerProps = {
    title,
    back,
    isoKey,
  };

  return (
    <Wrapper>
      <CssBaseline />
      {header !== false && <Header {...headerProps} />}
      <ChildWrapper {...{ noPadding }}>
        {children}
      </ChildWrapper>
      {footer !== false && <Footer />}
    </Wrapper>
  );
};


export default Layout;


Layout.propTypes = {
  children: t.node.isRequired,
  title: t.string,
  back: t.oneOfType([t.string, t.func]),
  header: t.bool,
  footer: t.bool,
  isoKey: t.string,
  noPadding: t.bool,
};


Layout.defaultProps = {
  isoKey: null,
  title: null,
  noPadding: false,
  back: null,
  header: true,
  footer: true,
};
