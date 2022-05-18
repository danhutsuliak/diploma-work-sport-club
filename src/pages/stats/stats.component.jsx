import React from "react";
import StatTable from "../../components/stat-table/stat-table.component";

import "./stats.styles.scss";

const Stats = () => {
  return (
    <div className="stats">
      <h1>Статистика</h1>
      <StatTable />
    </div>
  );
};

export default Stats;
