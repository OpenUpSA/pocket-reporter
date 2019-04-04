import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { sendWithWhatsApp } from '../../redux/actions/sendWithWhatsApp';
import { update, remove } from '../../redux/modules/stories';

const createSendWithWhatsApp = dispatch => (id) => {
  dispatch(sendWithWhatsApp(id));
  return navigate('/');
};


const mapStateToProps = ({ stories }, ownProps) => ({
  ...ownProps,
  stories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendWithWhatsApp: createSendWithWhatsApp(dispatch),
  remove: id => dispatch(remove(id)),
  update: (id, questionKey, answer) => dispatch(update(id, questionKey, answer)),
  ...ownProps,
});

const connectToReduxStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToReduxStore;
