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
  /** Nested structure that needs this wrapper **/
  children: t.node.isRequired,
  /** The title that will be displayed in the header. **/
  title: t.string,
  /** Determines whether or not the back button should be displayed in the header. **/
  back: t.oneOfType([t.string, t.func]),
  /** Determines whether or not the header should be displayed on a page. **/
  header: t.bool,
  /** Determines whether or not the footer should be displayed on a page. **/
  footer: t.bool,
  /** Displays the language that has been selected by the user. **/
  isoKey: t.string,
  /** Determines whether padding should be added to the page. **/
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
