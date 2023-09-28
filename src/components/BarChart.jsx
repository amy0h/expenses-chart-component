import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, defaults } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

defaults.font.family = 'Helvetica Neue';
defaults.font.size = 15;

export const BarChart = ({ data }) => {
  // Find the index of the maximum value in dataValues array
  const maxIndex = data.datasets[0].data.indexOf(Math.max(...data.datasets[0].data));

  // Create an array of background colors with a different color for the max bar
  const backgroundColor = data.labels.map((_, index) => (index === maxIndex ? 'rgb(118,181,188)' : 'rgb(236, 117, 93)'));

  // Modify the data object to set backgroundColor based on the index
  data.datasets[0].backgroundColor = backgroundColor;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        yAlign: 'bottom',
        
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        borderColor: 'rgba(255, 255, 255, 0.5)', 
        borderWidth: 1, 
        displayColors: false, 
        padding: 8, 
        caretSize: 0,
        callbacks: {
          title: () => '',
          label: (tooltipItem) => {
            return `$${tooltipItem.formattedValue}`;
          },
        },
        bodyFont: {
          family: 'Helvetica Neue',
          weight: 'bold',
          size: 15,
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false, 
        title: {
          display: false, 
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Bar
      data={data}
      options={chartOptions}
      aria-label="Bar Chart" // Add an aria-label for accessibility
    />
  );
};

export default BarChart;