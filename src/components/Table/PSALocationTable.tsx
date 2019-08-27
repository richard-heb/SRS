import * as React from 'react';
import Table from 'react-bootstrap/Table';

export interface PSALocation {
  area: number;
  aisle: number;
  side: string;
  segment: number;
  shelf: number;
  capacity: number;
  active?: boolean;
}

export interface PSALocationTableProps {
  locations: PSALocation[];
  actionType?: string;
}

export const PSALocationTable: React.FC<PSALocationTableProps> = ({
  locations,
  actionType,
}) => {
  const locationCount = locations.length;

  // TODO: create actionType enum
  const isPSA = actionType === 'psa';

  const psaLabel = isPSA ? 'PSA Location' : `PSA Locations (${locationCount})`;
  const capacityLabel = isPSA ? 'Cap' : 'Tot Cap';
  const totalCap = isPSA ? '100' : '325';

  const extraPsas: PSALocation[] = [
    {
      area: 11,
      aisle: 26,
      side: 'A',
      segment: 12,
      shelf: 4,
      capacity: 50,
      active: false,
    },
    {
      area: 11,
      aisle: 20,
      side: 'A',
      segment: 1,
      shelf: 3,
      capacity: 100,
      active: false,
    },
    {
      area: 11,
      aisle: 14,
      side: 'B',
      segment: 9,
      shelf: 4,
      capacity: 75,
      active: false,
    },
  ];

  return (
    <div style={{ overflow: 'auto' }}>
      <Table responsive>
        <thead>
          <tr>
            <th className="psa" colSpan={6}>
              {psaLabel}
            </th>
          </tr>
          <tr className="psa-row">
            <th className="psa-header">Area</th>
            <th className="psa-header">Aisle</th>
            <th className="psa-header">Side</th>
            <th className="psa-header">Seg</th>
            <th className="psa-header">Shelf</th>
            <th className="psa-header">Cap</th>
          </tr>
        </thead>
        <tbody>
          {!isPSA &&
            locations.map(location => {
              const active = location.active ? 'highlight' : '';

              return (
                <tr className={`psa-row ${active}`}>
                  <td>{location.area}</td>
                  <td className={`${active}`}>{location.aisle}</td>
                  <td className={`${active}`}>{location.side}</td>
                  <td className={`${active}`}>{location.segment}</td>
                  <td className={`${active}`}>{location.shelf}</td>
                  <td className={`${active}`}>{location.capacity}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
