import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

//piechart for countries
const PieChart = () => {
  const [countries, setCountries] = useState([]);

  //  countries data via API
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

  const countryGDP = {};
  countries.map((country) => {
    countryGDP[country['name']] = country['gdp_billions'];
  });

  const countryNames = Object.keys(countryGDP);
  const gdp = Object.values(countryGDP);

  const chartColor = [
    'rgba(255, 99, 132, 1)', // Light red
    'rgba(54, 162, 235, 1)', // Light blue
    'rgba(255, 205, 86, 1)', // Light yellow
    'rgba(75, 192, 192, 1)', // Light teal
    'rgba(153, 102, 255, 1)', // Light purple
    'rgba(255, 159, 64, 1)', // Light orange
    'rgba(0, 204, 102, 1)', // Green
    'rgba(102, 102, 255, 1)', // Light blue-violet
    'rgba(255, 102, 178, 1)', // Pink
    'rgba(204, 204, 0, 1)', // Olive
    'rgba(255, 153, 51, 1)', // Light brown
    'rgba(102, 255, 255, 1)', // Light cyan
    'rgba(204, 51, 255, 1)', // Magenta
  ];

  // Pie chart data
  const chartData = {
    labels: countryNames,
    datasets: [
      {
        data: gdp,
        backgroundColor: chartColor.slice(0, countryNames.length),

        borderColor: chartColor
          .slice(0, countryNames.length)
          .map((color) => color.replace('0.5', '1')),
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="mt-5 m-auto flex flex-col items-center p-5 w-full max-w-lg bg-slate-800 rounded-2xl shadow-lg shadow-black">
      <p className="text-center text-xl font-mono text-white"></p>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

// primary GDP component which is returned for rendering
const GDP = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Navbar />
      <PieChart />
    </div>
  );
};

export default GDP;
