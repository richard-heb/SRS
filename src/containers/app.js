import React from 'react';

import ToastWrapper from '../components/Toast/wrapper';

const App = props => {
  return (
    <div className="app">
      <ToastWrapper />
      {props.children}
    </div>
  );
};

export default App;
