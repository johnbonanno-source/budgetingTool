import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const BasicPie = ({ data }) => {
  const width = 400; 
  const height = 200; 

  return (
    <PieChart series={data} width={width} height={height} />
  );
}


export default BasicPie;