import React from 'react';
import FloatingActionButton from '../components/Button/floatingAction';

const App = (props) => {
  return (
    <div className='app'>
      <FloatingActionButton/>
      {props.children}
    </div>
  );
}

export default App ;