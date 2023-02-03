// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Line } from '@ant-design/plots';

// const DemoLine = () => {
//   const data=[
//     {
//       "Date": "2010-01",
//       "scales": 1998
//     },
//     {
//       "Date": "2010-02",
//       "scales": 1850
//     },
//     {
//       "Date": "2010-03",
//       "scales": 1720
//     },
//     {
//       "Date": "2010-04",
//       "scales": 1818
//     },
//     {
//       "Date": "2010-05",
//       "scales": 1920
//     },
//     {
//       "Date": "2010-06",
//       "scales": 1802
//     },
//     {
//       "Date": "2010-07",
//       "scales": 1945
//     },
//     {
//       "Date": "2010-08",
//       "scales": 1856
//     }
// ]
//   const config = {
//     data,
//     padding: 'auto',
//     xField: 'Date',
//     yField: 'scales',
//     annotations: [
      
//       {
//         type: 'regionFilter',
//         start: ['min', 'median'],
//         end: ['max', '0'],
//         color: '#F4664A',
//       },
//       {
//         type: 'text',
//         position: ['min', 'median'],
        
//         offsetY: -4,
//         style: {
//           textBaseline: 'bottom',
//         },
//       },
//       {
//         type: 'line',
//         start: ['min', 'median'],
//         end: ['max', 'median'],
//         style: {
//           stroke: '#F4664A',
//           lineDash: [2, 2],
//         },
//       },
//     ],
//   };

//   return <Line {...config} />;
// };

// // ReactDOM.render(<DemoLine />, document.getElementById('container'));
// export default DemoLine;
import React, { useState, useEffect } from 'react';

import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        const data2=data.filter(function(el){
          return el.name!=="Japan"
        })
        console.log(data2)
        
      })
      

      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,

    animation: {
      appear: {
        animation: 'path-in',
        duration: 2000,
      },
    },
  };

  return <Line {...config} />;
};

export default DemoLine