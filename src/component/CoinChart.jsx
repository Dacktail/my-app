import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';



function CoinChart() {
      let { id } = useParams();
  const [chart,setChart]=useState();
  const [days,setDays]=useState(1);
  const currency='INR';

  const myaxios=()=>{
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1%2C14%2C30%2Cmax`
      )
      .then((i) => {
        console.log(i.data.prices);
        setChart(i.data.prices);
      });
    // setChart(data);
    // console.log(chart);
  }

  useEffect(()=>{
      myaxios()
  }
  ,[currency,days])


  return (
    <div className='container'>
      
      <Line
      data={{labels:chart.map((coin)=>{
        let date = new Date(coin[0]);
        let time = date.getHours()>12?`${date.getHours()-12}:${date.getMinutes()}PM`
        :`${date.getHours()}:${date.getMinutes()}AM`;

        return days===1? time: date.toLocaleDateString()
      }),

      datasets:[{
        data:chart.map((coin)=>coin[1]),
        label:`Price (Past ${days} Days) in ${currency}`,
        borderColor:"#EEBC1D",
      }]
    }}
      />


    </div>
  )
}

export default CoinChart