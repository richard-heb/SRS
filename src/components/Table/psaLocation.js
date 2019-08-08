import React from 'react';
import Table from 'react-bootstrap/Table';

const PsaLocationTable = (props) => {
  const {locations, actionType} = props;
  const locationCount = locations.length;
  const capacityLabel = actionType && actionType === 'psa' ? 'Cap' : 'Tot Cap'

  return (
    <div style={{ overflow:'auto'}}>
      <Table responsive >
        <thead>
          <tr >
            <th className='psa' colSpan={1}  >PSA Locations ({locationCount})</th>
          </tr>
          <tr>
            <th className='psa-header' style={{textAlign:'center'}}>Area / Aisle / Side / Segment / Shelf / {capacityLabel}</th>
            {/* <th className='psa-header'>Aisle</th>
            <th className='psa-header'>Side</th>
            <th className='psa-header'>Sgmnt</th>
            <th className='psa-header'>Shelf</th>
            <th className='psa-header'>Tot Cap</th> */}
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => {
            return (
              <tr>
                <td style={{textAlign: 'center'}}>{location.area} / {location.aisle} / {location.side} / {location.segment} / {location.shelf} / {location.capacity}</td>
                {/* <td>{location.aisle}</td>
                <td>{location.side}</td>
                <td>{location.segment}</td>
                <td>{location.shelf}</td>
                <td>{location.capacity}</td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PsaLocationTable;