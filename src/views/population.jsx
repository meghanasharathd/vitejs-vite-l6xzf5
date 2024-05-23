import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Component to build the chart using the provided data via props
const BuildChart = ({ data }) => {
  // Map countries to their population
  const countriesPop = {};
  data.map((country) => {
    countriesPop[country['name']] = country['population'];
  });

  const countryNames = Object.keys(countriesPop);
  const populations = Object.values(countriesPop);

  // Generate different colors for each bar
  const backgroundColors = countryNames.map(
    (_, index) => `hsl(${(index / countryNames.length) * 360}, 70%, 50%)`
  );

  // Make chart data
  const chartData = {
    labels: countryNames,
    datasets: [
      {
        label: 'Population',
        data: populations,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) =>
          color.replace('50%', '40%')
        ),
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 18,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 16,
          },
        },
        title: {
          display: true,
          text: 'Country',
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 16,
          },
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 16,
          },
        },
        title: {
          display: true,
          text: 'Population',
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="bg-slate-800 text-white p-5 w-3/4 rounded shadow-lg shadow-black mx-auto my-auto">
      <p className="font-mono text-bold text-2xl text-center">
        Population in South American countries
      </p>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

// Component to fetch countries data and build the chart
const ChartContainer = () => {
  const [countries, setCountries] = useState([]);

  // useEffect to fetch countries data via API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          'https://cs464p564-frontend-api.vercel.app/api/countries'
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen p-10">
      <BuildChart data={countries} />
    </div>
  );
};

// Primary population component to render the page
const Population = () => {
  return (
    <div>
      <Navbar />
      <ChartContainer />
    </div>
  );
};

export default Population;
