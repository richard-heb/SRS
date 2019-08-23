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
    capacity: 100,
    active: true
  },
  {
    area: 11,
    aisle: 26,
    side: 'A',
    segment: 12,
    shelf: 4,
    capacity: 50
  },
  {
    area: 11,
    aisle: 20,
    side: 'A',
    segment: 1,
    shelf: 3,
    capacity: 100
  },
  {
    area: 11,
    aisle: 14,
    side: 'B',
    segment: 9,
    shelf: 4,
    capacity: 75
  }
]


const TabSection = (props) => {
  const {actionType} = props;
  return (
    <div className='tab-section'>
      <Tabs defaultActiveKey="LOC" id="location-ss-tabs">
        <Tab eventKey="LOC" title="Location">
          <LocationTable actionType={actionType}/>
          <PsaLocationTable locations={locs} actionType={actionType} />
        </Tab>
        <Tab eventKey="PI" title="Product">
          <StoreStockTable/>
          <SalesAndForecastTable/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabSection;