import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ transactions, handleChange }) => {
  const [chartData, setChartData] = useState({ transactions });

  let result = [];
  const tableAmountFilter = transactions.map(r => result.push(r.amount));

  let resultColor = [];
  const colorFilter = transactions.map(r => resultColor.push(r.color));

  let total = transactions.reduce((sum, r) => sum + r.amount, 0);

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
