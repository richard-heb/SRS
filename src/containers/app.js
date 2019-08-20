import React from 'react';
import FloatingActionButton from '../components/Button/floatingAction';
import ToastWrapper from '../components/Toast/wrapper';

const App = (props) => {
  return (
    <div className='app'>
      <ToastWrapper/>
      {/* <FloatingActionButton/> */}
      {props.children}
    </div>
  );
}

export default App ;