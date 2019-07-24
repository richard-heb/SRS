import React from 'react';
import Table from 'react-bootstrap/Table';

const SalesAndForecastTable = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className='psa' colSpan={5}>Past Sales & Forecasts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11</td>
          <td>2</td>
          <td>B</td>
          <td>6</td>
          <td>2</td>
        </tr>
        <tr>
          <td>11</td>
          <td>2</td>
          <td>B</td>
          <td>6</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SalesAndForecastTable;