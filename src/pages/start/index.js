import { createElement } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';


import { setLanguage } from '../../redux/modules/info';
import SplashScreen from '../../views/SplashScreen';


const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCallback: (isoKey) => {
    dispatch(setLanguage(isoKey));
    return navigate(`${isoKey}/folders/index.html`);
  },
  ...ownProps,
});


const connectToStore = connect((state, ownProps) => ownProps, mapDispatchToProps);


const page = props => createElement(SplashScreen, props);


export default connectToStore(page);
