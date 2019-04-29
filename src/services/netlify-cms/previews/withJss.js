import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './getPageContext';

function withJss(Component) {
    class WithRoot extends React.Component {
      constructor(props) {
        super(props);
        this.muiPageContext = getPageContext();
      }
  
      render() {
        return (
          <JssProvider registry={this.muiPageContext.sheetsRegistry}>
            {/* MuiThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.muiPageContext.theme}
            >       
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...this.props} />
            </MuiThemeProvider>
          </JssProvider>
        );
      }
    }
  
    return WithRoot;
  }
  
  export default withJss;