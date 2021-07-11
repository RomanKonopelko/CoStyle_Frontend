import React, { memo } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ tableData, handleChange }) => {
  const { categoriesSummary } = tableData;
  const resultСategoriesSummary = Object.entries(categoriesSummary);

  const result = [];
  const tableAmountFilter = resultСategoriesSummary.map(r =>
    result.push(r[1].value),
  );

  const resultColor = [];
  const colorFilter = resultСategoriesSummary.map(r =>
    resultColor.push(r[1].color),
  );

  return (
    <div className="doughnutSize">
      <Doughnut
        onChange={handleChange}
        data={{
          datasets: [
            {
              data: result,
              backgroundColor: resultColor,
              hoverOffset: 3,
            },
          ],
        }}
        options={{
          cutout: 90,
          rotation: 180,
          borderWidth: 0,
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default memo(Chart);
