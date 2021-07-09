import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ tableData, handleChange }) => {
  const { categoriesSummary, incomeValue, consumptionValue } = tableData;

  const resultСategoriesSummary = Object.entries(categoriesSummary);

  const [chartData, setChartData] = useState({ resultСategoriesSummary });

  let result = [];
  const tableAmountFilter = resultСategoriesSummary.map(r =>
    result.push(r[1].value),
  );

  let resultColor = [];
  const colorFilter = resultСategoriesSummary.map(r =>
    resultColor.push(r[1].color),
  );
  // console.log(`resultColor`, resultColor);

  const chart = () => {
    setChartData({
      datasets: [
        {
          data: result,
          backgroundColor: resultColor,
          hoverOffset: 5,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ height: '320px', width: '320px' }}>
      <Doughnut
        onChange={handleChange}
        data={chartData}
        options={{
          cutout: 90,
          rotation: 180,
          borderWidth: 0,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: `${incomeValue - consumptionValue} грн.`,
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Chart;
