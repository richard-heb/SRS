import React from 'react';
import Table from 'react-bootstrap/Table';

const LocTable = (props) => {
  const {actionType} = props;
  const capacityLabel = actionType && actionType === 'psa' ? 'Cap' : 'Tot Cap'
  const fhd = actionType === 'psa' ? false : true;
  return (
    <Table responsive >
      <tbody>
        <tr>
          <th>Dept</th>
          <td>Beauty</td>
          <th>UOH</th>
          <td>0</td>
        </tr>
        <tr>
          <th>Pack</th>
          <td>1</td>
          <th>Size</th>
          <td>16oz</td>
        </tr>
        <tr>
          <th>{capacityLabel}</th>
          <td>325</td>
          <th>Event</th>
          <td>N</td>
        </tr>
        <tr>
          <th>Promo</th>
          <td>N</td>
          {
            fhd ? (
              <>
              <th>F/H/D</th>
              <td>1/3/3</td>
              </>
            ) : (
              <>
              <th>User Code</th>
              <td>Manual</td>
              </>
            )
          }
        </tr>
      </tbody>
    </Table>
  );
}

export default LocTable;