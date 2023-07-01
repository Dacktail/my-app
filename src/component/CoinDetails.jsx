import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import './CoinDetails.css';
// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import {Container }from "react-bootstrap";

function CoinDetails() {
    // const currency = "₹";
    let { id } = useParams();
    const [mydata, setData] = useState({});
  
  useEffect(() => {
    const myaxios = () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((i) => {
        console.log(i.data);
        setData(i.data);
      });
    };

    myaxios();
  }, []);
  return (
    <div>
      {mydata.length>0 &&
       <div className="container d-flex w-100 flex-wrap " >
        <div className="card-info ">
          <div className="img">
            <Image src={mydata.image.large} alt="" />
          </div>
          <div className="img-info">
            <h3>{mydata.symbol}</h3>
            <h3>{mydata.id}</h3>
            <h5>{mydata.name}</h5>
            {/* <p>{currency} {mydata.market_data.current_price.inr}</p> */}

                <p>Last Updated on {Date(mydata.last_updated).split("G")[0]}</p>
              </div>
            </div>
          </div>
           
          <div className="progress-bar container-md  w-75 ">
            <div className="row d-block">
              <div className="col-6">
                <i className="mdi mdi-progress-alert:">50</i>
              </div>
            
            <div className="market-price ">
              <span>
                {currency}
                {/* {mydata.market_data.low_24h.inr} */}
              </span>
              <br />
              <span>
                {currency}
                {/* {mydata.market_data.high_24h.inr} */}
              </span>
            </div>
            </div>
          </div>
        
      )}
    </div>

    // <div>
    //   <div className="container d-flex w-100 flex-wrap ">
    //     <div className="card-info ">
    //       <div className="img">
    //          {/* <Image src={mydata.image.large} alt="" /> */}
    //       </div>
    //       <div className="img-info">
    //         <h3>{mydata.symbol}</h3>
    //         <h3>{mydata.id}</h3>
    //         <h5>{mydata.name}</h5>
    //         {/* <p>{currency} {mydata.market_data.current_price.inr}</p> */}
    //         <p>Last Updated on {Date(mydata.last_updated).split("G")[0]}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CoinDetails;
