import * as React from 'react';

import Table from 'react-bootstrap/Table';

export const SalesForecastTable: React.FC = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="psa" colSpan={7}>
            Past Sales & Forecasts
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="psa-header">9</th>
          <th className="psa-header">10</th>
          <th className="psa-header">11</th>
          <th className="psa-header">12</th>
          <th className="psa-header">13</th>
          <th className="psa-header">14</th>
          <th className="psa-header">15</th>
        </tr>
        <tr>
          <td>16</td>
          <td>8</td>
          <td>12</td>
          <td>15</td>
          <td>
            <b>18</b>
          </td>
          <td style={{ color: 'green' }}>18</td>
          <td style={{ color: 'green' }}>18</td>
        </tr>
      </tbody>
    </Table>
  );
};
