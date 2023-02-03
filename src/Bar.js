import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const DemoBar = () => {
  let data = [
    {
      year: '1951 ',
      value: 38,
    },
    {
      year: '1952 ',
      value: 52,
    },
    {
      year: '1956 ',
      value: 61,
    },
    {
      year: '1957 ',
      value: 145,
    },
    {
      year: '1958 ',
      value: 48,
    },
  ];
//   const dafa = async()=>{
//     const datafet=await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     return datafet;
//   }
//   dafa().then(datafet=>{
    
//     console.log(datafet.json())
// })
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};

export default DemoBar