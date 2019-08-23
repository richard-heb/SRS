import React from 'react';
import Table from 'react-bootstrap/Table';

const TraditionalWalkTable = (props) => {
  return (
    <Table responsive style={{marginTop: '1em'}}>
      <tbody>
        <tr>
          <th>Dept</th>
          <td colspan={3}>Beauty</td>
        </tr>
        <tr>
          <th>Pack</th>
          <td>1</td>
          <th>Size</th>
          <td>1</td>
        </tr>
        <tr>
          <th>Cap</th>
          <td>20</td>
          <th>UOH</th>
          <td>25</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TraditionalWalkTable;