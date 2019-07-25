import React, { useEffect } from 'react';
import moment from 'moment';

import Chart from 'chart.js';

const StreamViewershipChart = (props) => {
  const chartRef = React.createRef();
  const { data, uuid } = props;

  const dataset = data.map(a => ({
    y: a.authed + a.anon,
    x: moment(a.time).toISOString(),
  }));

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const viewershipChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Viewer Count',
            data: dataset,
            showLine: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                hour: 'hA',
              },
              minUnit: 'hour',
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
            },
            position: 'bottom',
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: value => (value % 1 === 0 ? value : null),
            },
          }],
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          displayColors: false,
          callbacks: {
            title: () => null,
            label: tooltipItems => `${moment(tooltipItems.xLabel).format('h:mmA')} - ${tooltipItems.yLabel} viewer${tooltipItems.yLabel === 1 ? '' : 's'}`,
          },
        },
        elements: {
          line: {
            stepped: true,
            borderColor: '#F25757',
            borderWidth: 2,
          },
          point: {
            radius: 0,
          },
        },
        animation: {
          duration: 0, // general animation time
        },
        hover: {
          animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
      },
    });
  }, [chartRef, data, dataset]);

  return (
    <canvas
      id={`MixerViewershipChart-${uuid}`}
      ref={chartRef}
    />
  );
};

export default StreamViewershipChart;
