import React from 'react';
import Table from 'react-bootstrap/Table';

const StoreStockTable = (props) => {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <th>Prc $</th>
          <td>Beauty</td>
          <th>7d</th>
          <td>1/3/3</td>
          <th>WO</th>
          <td>1</td>
        </tr>
        <tr>
          <th>UOH</th>
          <td>16</td>
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
          <th>Add</th>
          <td>Y</td>
          <th>Coupon</th>
          <td>N</td>
          <th>TPR</th>
          <td>Y</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StoreStockTable;