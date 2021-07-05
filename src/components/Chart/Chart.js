import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: [610, 1230, 3400, 300, 2208, 800, 1500, 3800, 8700],
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
          hoverOffset: 4,
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
              text: 'Тут можно поставить общую сумму!',
            },
          },
          animation: {
            animateScale: true,
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Chart;
