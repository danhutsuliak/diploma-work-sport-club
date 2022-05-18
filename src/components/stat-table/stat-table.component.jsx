import React from "react";

import "./stat-table.styles.scss";

const StatTable = () => {
  function PlayerStatRow() {
    return (
      <tr>
        <td className="img">
          <img
            src="https://img.bleacherreport.net/img/slides/photos/004/362/076/0449d8257094d0cf722b2a5289072d71_crop_exact.jpg?w=2975&h=2048&q=85"
            alt=""
          />
        </td>
        <td>Lorem ipsum</td>
        <td>23</td>
        <td>421</td>
        <td>{(421 / 23).toFixed(1)}</td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>ГРАВЕЦЬ</th>
          <th>ІГОР</th>
          <th>ОЧКИ</th>
          <th>СЕР.</th>
        </tr>
      </thead>
      <tbody>
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
        <PlayerStatRow />
      </tbody>
    </table>
  );
};

export default StatTable;
