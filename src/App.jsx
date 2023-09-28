import React from 'react';
import data from './assets/data.json';
import BarChart from './components/BarChart'
import './app.css'

const labels = data.map(item => item.day);
const dataValues = data.map(item => item.amount);

const chartData = {
  labels: labels,
  datasets: [
    {
      label: 'Amount',
      data: dataValues,
      backgroundColor: 'rgb(236,117,93)',
      hoverBackgroundColor: 'rgb(118,181,188)',
      borderRadius: 3,
    },
  ],
};

function App() {
  return (
    <>
      <div className='balance-container'>
        <div>
          <p className='balance-title'>My balance</p>
          <p className='balance-amount'>$921.48</p>
        </div>
        <img className='logo' src='./logo.svg' alt='logo' />
      </div>
      <div className='chart-container'>
        <h1>Spending - Last 7 Days</h1>
        <BarChart data={chartData} /> {/* Render your BarChart component */}
        <div className='total-container'>
          <div>
            <p className='total-title'>Total this month</p>
            <p className='total-amount'>$921.48</p>
          </div>
          <div>
            <p className='total-percentage'>+2.4%</p>
            <p className='total-message'>from last month</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




