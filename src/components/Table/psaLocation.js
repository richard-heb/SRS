import React from 'react';
import Table from 'react-bootstrap/Table';

const PsaLocationTable = props => {
  const { locations, actionType } = props;
  const locationCount = locations.length;
  const psaLabel =
    actionType && actionType === 'psa'
      ? 'PSA Location'
      : `PSA Locations (${locationCount})`;

  const extraPsas = [
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

  return (
    <div style={{ overflow: 'auto' }}>
      <Table responsive>
        <thead>
          <tr>
            <th className="psa" colSpan={6}>
              {psaLabel}
            </th>
          </tr>
          <tr>
            <th className="psa-header">Area</th>
            <th className="psa-header">Aisle</th>
            <th className="psa-header">Side</th>
            <th className="psa-header">Seg</th>
            <th className="psa-header">Shelf</th>
            <th className="psa-header">Cap</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(location => {
            return (
              <tr>
                <td className="psa-data">{location.area}</td>
                <td className="psa-data">{location.aisle}</td>
                <td className="psa-data">{location.side}</td>
                <td className="psa-data">{location.segment}</td>
                <td className="psa-data">{location.shelf}</td>
                <td className="psa-data">{location.capacity}</td>
              </tr>
            );
          })}
          {actionType !== 'psa' &&
            extraPsas.map(location => {
              return (
                <tr>
                  <td className="psa-data">{location.area}</td>
                  <td className="psa-data">{location.aisle}</td>
                  <td className="psa-data">{location.side}</td>
                  <td className="psa-data">{location.segment}</td>
                  <td className="psa-data">{location.shelf}</td>
                  <td className="psa-data">{location.capacity}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default PsaLocationTable;
