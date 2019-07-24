import React from 'react';
import Table from 'react-bootstrap/Table';

const StoreStockTable = (props) => {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <th>Prc $</th>
          <td>Beauty</td>
          <th>GP</th>
          <td>0</td>
          <th>WO</th>
          <td>1</td>
        </tr>
        <tr>
          <th>UOH</th>
          <td>16oz</td>
          <th>Ord Case</th>
          <td>8</td>
          <th>PBill Case</th>
          <td>1/3/3</td>
        </tr>
        <tr>
          <th>UOO</th>
          <td>N</td>
          <th>Ord Qty</th>
          <td>N</td>
          <th>PBill Qty</th>
          <td>1/3/3</td>
        </tr>
        <tr>
          <th>OP</th>
          <td>16oz</td>
          <th>Ovrd</th>
          <td>8</td>
          <th>Next Ord</th>
          <td>1/3/3</td>
        </tr>
        <tr>
          <th>DOS</th>
          <td>N</td>
          <th>30d</th>
          <td>N</td>
          <th>7d</th>
          <td>1/3/3</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StoreStockTable;