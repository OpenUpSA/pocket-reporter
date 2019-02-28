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
  /** React content nested inside this component. */
  children: t.node.isRequired,
  /** The title that will be displayed in the page header-bar. */
  title: t.string,
  /** If a value is passed to this prop then a back button will
   * be displayed in the header. If the value is a string then
   * a user will go to that URL if clicked, if the value is a
   * function then the function will be called when the back button is clicked */
  back: t.oneOfType([t.string, t.func]),
  /** Determines whether or not the header should be displayed on a page. */
  header: t.bool,
  /** Determines whether or not the footer should be displayed on a page. */
  footer: t.bool,
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string,
  /** Determines whether padding should be added to the page. */
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
