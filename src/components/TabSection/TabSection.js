import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import LocationTable from '../Table/location';
import StoreStockTable from '../Table/storeStock';
import PsaLocationTable from '../Table/psaLocation';
import SalesAndForecastTable from '../Table/salesAndForecast';

const locations = [
  {
    area: 11,
    aisle: 2,
    side: 'B',
    segment: 6,
    shelf: 2,
    capacity: 100,
  },
];

export const TabSection = props => {
  const { actionType } = props;
  return (
    <div className="tab-section">
      <Tabs defaultActiveKey="LOC" id="location-ss-tabs">
        <Tab eventKey="LOC" title="Location">
          <LocationTable actionType={actionType} />
          <PsaLocationTable locations={locations} actionType={actionType} />
        </Tab>
        <Tab eventKey="PI" title="Product">
          <StoreStockTable />
          <SalesAndForecastTable />
        </Tab>
      </Tabs>
    </div>
  );
};
