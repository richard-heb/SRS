import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToastContents from './contents';
import { closeToast } from '../../redux/application/actions';

const ToastWrapper = props => {
  const { toastOpen, toastMessage, actions } = props;
  if (toastOpen) {
    return (
      <ToastContents message={toastMessage} closeToast={actions.closeToast} />
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = state => {
  return {
    toastOpen: state.application.toastOpen,
    toastMessage: state.application.toastMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ closeToast }, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToastWrapper);
