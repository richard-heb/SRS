import React from 'react';
import Table from 'react-bootstrap/Table';

const PsaLocationTable = (props) => {
  const {locations} = props;
  const locationCount = locations.length

  return (
    <div style={{ overflow:'auto'}}>
      <Table responsive >
        <thead>
          <tr>
            <th className='psa' colSpan={6}>PSA Locations ({locationCount})</th>
          </tr>
          <tr>
            <th className='psa-header'>Area</th>
            <th className='psa-header'>Aisle</th>
            <th className='psa-header'>Side</th>
            <th className='psa-header'>Sgmnt</th>
            <th className='psa-header'>Shelf</th>
            <th className='psa-header'>Cap</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => {
            return (
              <tr>
                <td>{location.area}</td>
                <td>{location.aisle}</td>
                <td>{location.side}</td>
                <td>{location.segment}</td>
                <td>{location.shelf}</td>
                <td>{location.capacity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PsaLocationTable;