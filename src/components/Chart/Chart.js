import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ tableData, handleChange }) => {
  const { categoriesSummary, incomeValue, consumptionValue } = tableData;

  const resultСategoriesSummary = Object.entries(categoriesSummary);

  const [chartData, setChartData] = useState({ resultСategoriesSummary });

  let result = [];
  const tableAmountFilter = resultСategoriesSummary.map(r => result.push(r[1]));

  // let resultColor = [];
  // const colorFilter = tableData.map(r => resultColor.push(r.color));

  const chart = () => {
    setChartData({
      datasets: [
        {
          data: result,
          backgroundColor: [
            'rgba(0, 173, 132, 1)',
            'rgba(36, 204, 167, 1)',
            'rgba(129, 225, 255, 1)',
            'rgba(74, 86, 226, 1)',
            'rgba(110, 120, 232, 1)',
            'rgba(197, 186, 255, 1)',
            'rgba(253, 148, 152, 1)',
            'rgba(255, 216, 208, 1)',
            'rgba(254, 208, 87, 1)',
          ],
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
              text: `${incomeValue + consumptionValue} грн.`,
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Chart;
