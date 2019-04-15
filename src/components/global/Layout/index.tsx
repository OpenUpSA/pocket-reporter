import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Footer from './Footer';
import { GlobalStyle, ChildWrapper } from './styled';
import { Tprops } from './schema';

const Layout = ({ isoKey, children, skeleton, ...headerProps }: Tprops): JSX.Element => {
  if (skeleton) {
    return (
      <Fragment>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CssBaseline />
      <GlobalStyle />
      <Header {...{ ...headerProps, isoKey }} />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer {...{ isoKey }} />
    </Fragment>
  );
};

export default Layout;
