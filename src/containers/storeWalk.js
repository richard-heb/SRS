import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/TabSection';

class StoreWalk extends React.Component {

  render() {
    return (
      <div className="store-walk" >
        <Header shared={true} />
        <Sidebar/>
        <div className='page-header'>
          Please select department to walk
        </div>
        <Tabs/>
      </div>
    );
  }
}

export default StoreWalk;