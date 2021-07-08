import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ tableData, handleChange }) => {
  const [chartData, setChartData] = useState({ tableData });

  let result = [];
  const tableAmountFilter = tableData.map(r => result.push(r.amount));

  let resultColor = [];
  const colorFilter = tableData.map(r => resultColor.push(r.color));

  let total = tableData.reduce((sum, r) => sum + r.amount, 0);

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
              text: `${total} грн.`,
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Chart;
