import React from 'react';
import { Pie } from '@ant-design/charts';
import { json } from 'react-router-dom';

// async function datafetch(){
    
// }
// const datafetch= async()=>{
//     const datares=await fetch('https://jsonplaceholder.typicode.com/todos');
//     const datares2=datares.json()
//     // return typeof(datares2)
//     Object.keys(datares2).forEach(function(key, index) {
//      console.log(datares2[key])
//     });
    

// }



const data = [
    { type: 'A', value: 20 },
    { type: 'B', value: 30 },
    { type: 'C', value: 40 },
    { type:'D',value: 10}
  ];
  const config = {
   
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.5,
    label: {
      type: "inner",
      offset: "50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14
      }
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
    //   title: false as const,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        formatter: function formatter() {
          return `total\n100`;
        }
      }
    }
  };
function MyPieChart() {
    
    
    // datafetch().then(res=>{return res}).then(res=>{console.log(res)})
    
    return (
       
       <> 
       
       <h1>datagot</h1>
       <Pie
         // data={data}
         // angleField="value"
         // colorField="type"
         // radius={1}
         // innerRadius={0.5}
         // label: {
         //     type: "inner",
         //     offset: "-50%",
         //     content: "{value}",
         //     style: {
         //       textAlign: "center",
         //       fontSize: 14
         //     }
         //   },
         {...config}
       /></>
    );
}

export default MyPieChart;
    