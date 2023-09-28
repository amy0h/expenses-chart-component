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
      hoverBackgroundColor: 'rgb(255,155,134)',
      borderRadius: 3,
    },
  ],
};

function App() {
  return (
    <main>
      <div className='balance-container'>
        <div>
          <p className='balance-title'>My balance</p>
          <p className='balance-amount bold'>$921.48</p>
        </div>
        <img className='logo' src='./logo.svg' alt='logo' />
      </div>
      <div className='chart-container'>
        <h1 className='chart-title bold'>Spending - Last 7 Days</h1>
        <BarChart data={chartData} /> {/* Render your BarChart component */}
        <div className='total-container'>
          <div className='total-left'>
            <p className='total-title'>Total this month</p>
            <p className='total-amount bold'>$921.48</p>
          </div>
          <div className='total-right'>
            <p className='total-percentage bold'>+2.4%</p>
            <p className='total-message'>from last month</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;




