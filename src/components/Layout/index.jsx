import React, { Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './Header';
import Footer from './Footer';


const ChildWrapper = styled.div`
  padding: 10px;
`;


const Layout = (props) => {
  const { 
    children,
    title,
    header = true,
    footer = true
  } = props;

  return (
    <Fragment>
      <CssBaseline />
      <Header {...{ title }} />
      <ChildWrapper>
        {children}
      </ChildWrapper>
      <Footer />
    </Fragment>
  );
};


export default Layout;


Layout.propTypes = {
  children: t.node.isRequired,
  title: t.string.isRequired,
  header: t.bool,
  footer: t.bool,
};


Layout.defaultProps = {
  header: true,
  footer: true,
};
