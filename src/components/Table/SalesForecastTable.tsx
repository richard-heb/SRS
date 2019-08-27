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
          <th className="psa-header">
            Mon
            <br />
            8/9
          </th>
          <th className="psa-header">
            Tues
            <br />
            8/10
          </th>
          <th className="psa-header">
            Wed
            <br />
            8/11
          </th>
          <th className="psa-header">
            Thurs
            <br />
            8/12
          </th>
          <th className="psa-header">
            Fri
            <br />
            8/13
          </th>
          <th className="psa-header">
            Sat
            <br />
            8/14
          </th>
          <th className="psa-header">
            Sun
            <br />
            8/15
          </th>
        </tr>
        <tr>
          <td className="psa-data">16</td>
          <td className="psa-data">8</td>
          <td className="psa-data">12</td>
          <td className="psa-data">15</td>
          <td className="psa-data">
            <b>18</b>
          </td>
          <td className="psa-data" style={{ color: 'green' }}>
            18
          </td>
          <td className="psa-data" style={{ color: 'green' }}>
            18
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
