import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ranking de vendedores',
    },
  },
};

export default function RankinkSeller({dataGraphic}) {

  const labels = dataGraphic.map((item) => {
    return item.nome;
  });

const numbersTest = dataGraphic.map((item) => {
    return item.total;
  });
const data = {
  labels,
  datasets: [
    
    {
      label: 'Total de vendas',
      data: numbersTest,
      backgroundColor: 'rgba(53, 162, 235, 0.8)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
