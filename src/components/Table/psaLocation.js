import React from 'react';
import Table from 'react-bootstrap/Table';

const PsaLocationTable = (props) => {
  const {locations, actionType} = props;
  const locationCount = locations.length;
  const capacityLabel = actionType && actionType === 'psa' ? 'Cap' : 'Tot Cap'
  const psaLabel = actionType && actionType === 'psa' ? 'PSA Location' : `PSA Locations (${locationCount})`
  
  const extraPsas = actionType === 'psa' ? [] : [
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

  return (
    <div style={{ overflow:'auto'}}>
      <Table responsive >
        <thead>
          <tr >
            <th className='psa' colSpan={1}  >{psaLabel}</th>
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
              </tr>
            );
          })}

          {
            extraPsas.map((location) => {
              return (
                <tr>
                  <td style={{textAlign: 'center'}}>{location.area} / {location.aisle} / {location.side} / {location.segment} / {location.shelf} / {location.capacity}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default PsaLocationTable;