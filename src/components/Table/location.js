import React from 'react';
import Table from 'react-bootstrap/Table';

const LocTable = (props) => {
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
          <th>Cap</th>
          <td>8</td>
          <th>F/H/D</th>
          <td>1/3/3</td>
        </tr>
        <tr>
          <th>Event</th>
          <td>N</td>
          <th>Promo</th>
          <td>N</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default LocTable;