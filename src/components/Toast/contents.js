import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default class ToastContents extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const {message, closeToast} = this.props;
    return (
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '100px'
        }}
      >
        <Toast
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
          autohide
          delay={5000} 
          onClose={closeToast}>
          <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
      </div>
    );
  }
}
