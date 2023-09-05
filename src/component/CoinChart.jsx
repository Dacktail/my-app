import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function CoinChart() {
      let { id } = useParams();
  const [chart,setChart]=useState([]);
  const [days,setDays]=useState(1);
  const currency='INR';

  const myaxios=()=>{
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=1%2C14%2C30%2Cmax`
      )
      .then((i) => {
        console.log(i.data.prices);
        setChart(i.data.prices);
        setDays(i.data.prices[0]);
      });
    // setChart(data);
    // console.log(chart);
  }

  useEffect(()=>{
      myaxios()
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[])

  return (
    <div className="container">
      <Line
        data={{
          labels: chart.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: chart.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in ${currency}`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
}
  //   const currency = "₹";
export default CoinChart