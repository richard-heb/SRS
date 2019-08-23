import React from 'react';
import Table from 'react-bootstrap/Table';

const PsaLocationTable = (props) => {
  const {locations, actionType} = props;
  const locationCount = locations.length;
  const capacityLabel = actionType && actionType === 'psa' ? 'Cap' : 'Tot Cap';
  const totalCap = actionType && actionType === 'psa' ? '100' : '325';
  const psaLabel = actionType && actionType === 'psa' ? 'PSA Location' : `PSA Locations (${locationCount})`
  
  return (
    <div style={{ overflow:'auto'}}>
      <Table responsive >
        <thead>
          <tr >
            <th className='psa' colSpan={6}  >{psaLabel}</th>
          </tr>
          <tr className="psa-row">
            <th className='psa-header'>Area</th>
            <th className='psa-header'>Aisle</th>
            <th className='psa-header'>Side</th>
            <th className='psa-header'>Seg</th>
            <th className='psa-header'>Shelf</th>
            <th className='psa-header'>Cap</th>
          </tr>
        </thead>
        <tbody>
          { actionType != 'psa' ? (
            locations.map((location) => {
              const active = location.active ? 'highlight' : ''
              return (
                <tr className={`psa-row ${active}`}>
                  <td >{location.area}</td>
                  <td className={`${active}`}>{location.aisle}</td>
                  <td className={`${active}`}>{location.side}</td>
                  <td className={`${active}`}>{location.segment}</td>
                  <td className={`${active}`}>{location.shelf}</td>
                  <td className={`${active}`}>{location.capacity}</td>
                </tr>
              );
            })
          ) : (
            <tr className="psa-row highlight">
              <td >{locations[0].area}</td>
              <td >{locations[0].aisle}</td>
              <td >{locations[0].side}</td>
              <td >{locations[0].segment}</td>
              <td >{locations[0].shelf}</td>
              <td >{locations[0].capacity}</td>
            </tr>
          )
            
          }
        </tbody>
      </Table>
    </div>
  );
}

export default PsaLocationTable;