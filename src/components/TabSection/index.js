import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LocationTable from '../Table/location';
import StoreStockTable from '../Table/storeStock';
import PsaLocationTable from '../Table/psaLocation';
import SalesAndForecastTable from '../Table/salesAndForecast';

const locs =[
  {
    area: 11,
    aisle: 2,
    side: 'B',
    segment: 6,
    shelf: 2,
    capacity: 100
  },
  // {
  //   area: 11,
  //   aisle: 2,
  //   side: 'B',
  //   segment: 6,
  //   shelf: 2,
  //   capacity: 100
  // },
  // {
  //   area: 11,
  //   aisle: 2,
  //   side: 'B',
  //   segment: 6,
  //   shelf: 2,
  //   capacity: 100
  // },
  // {
  //   area: 11,
  //   aisle: 2,
  //   side: 'B',
  //   segment: 6,
  //   shelf: 2,
  //   capacity: 100
  // },
  // {
  //   area: 11,
  //   aisle: 2,
  //   side: 'B',
  //   segment: 6,
  //   shelf: 2,
  //   capacity: 100
  // },
]


const TabSection = (props) => {
  return (
    <div className='tab-section'>
      <Tabs defaultActiveKey="LOC" id="location-ss-tabs">
        <Tab eventKey="LOC" title="LOC">
          <LocationTable/>
          <PsaLocationTable locations={locs}/>
        </Tab>
        <Tab eventKey="SS" title="SS">
          <StoreStockTable/>
          <SalesAndForecastTable/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabSection;