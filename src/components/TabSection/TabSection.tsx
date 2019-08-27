import * as React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { LocationTable } from '../Table/LocationTable';
import { StoreStockTable } from '../Table/StoreStockTable';
import { PSALocationTable, PSALocation } from '../Table/PSALocationTable';
import { SalesForecastTable } from '../Table/SalesForecastTable';

export interface TabSectionProps {
  actionType: string;
}

const locations: PSALocation[] = [
  {
    area: 11,
    aisle: 2,
    side: 'B',
    segment: 6,
    shelf: 2,
    capacity: 100,
  },
  {
    area: 11,
    aisle: 26,
    side: 'A',
    segment: 12,
    shelf: 4,
    capacity: 50,
  },
  {
    area: 11,
    aisle: 20,
    side: 'A',
    segment: 1,
    shelf: 3,
    capacity: 100,
  },
  {
    area: 11,
    aisle: 14,
    side: 'B',
    segment: 9,
    shelf: 4,
    capacity: 75,
  },
];

export const TabSection: React.FC<TabSectionProps> = ({ actionType }) => (
  <div className="tab-section">
    <Tabs defaultActiveKey="LOC" id="location-ss-tabs">
      <Tab eventKey="LOC" title="Location">
        <LocationTable actionType={actionType} />
        <PSALocationTable locations={locations} actionType={actionType} />
      </Tab>
      <Tab eventKey="PI" title="Product">
        <StoreStockTable />
        <SalesForecastTable />
      </Tab>
    </Tabs>
  </div>
);
