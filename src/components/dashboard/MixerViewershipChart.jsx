import React, { useEffect } from 'react';

import Chart from 'chart.js';

import { daysOfWeek } from '../../constants';

const MixerViewershipChart = (props) => {
  const chartRef = React.createRef();
  const { data } = props;
  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    const viewershipChart = new Chart(myChartRef, {
      type: 'bar',
      data: {
        // Bring in data
        labels: daysOfWeek,
        datasets: [
          {
            label: 'Average Viewership',
            data,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }, [chartRef, data]);

  return (
    <canvas
      id="myChart"
      ref={chartRef}
    />
  );
};

export default MixerViewershipChart;
