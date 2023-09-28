import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data }) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Spending - Last 7 days',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove horizontal grid lines
        },
      },
      y: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
    },
  };

  return <Bar data={data} options={chartOptions} />;
};

export default BarChart;