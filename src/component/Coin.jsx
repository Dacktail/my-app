import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import './Coin.css';
// import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {Container }from "react-bootstrap";

function Coin() {
  const [mydata, setData] = useState([]);
  const currency = "₹";

  const myaxios = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
      .then((i) => {
        setData(i.data);
        console.log(i.data);
      });
  };

  useEffect(() => {
    myaxios();
  }, []);
  return (
    <div>
      
      <div className="container d-flex w-100 flex-wrap ">
        {mydata.map((i) => {
          return (
        
              <Link to={`/coin/${i.id}`}>
                <div className="card-info" key={i.id}>
                  <div className="img">
                    <img src={i.image} alt="" />
                  </div>
                  <div className="img-info">
                    <h3>{i.symbol}</h3>
                    <h5>{i.name}</h5>
                    <p>
                      {currency}
                      {i.current_price}
                    </p>
                    <div className="market-price">
                      <span className="low-price">
                        {currency} {i.low_24h}
                      </span>
                      <br />
                      <span className="high-price">
                        {currency} {i.high_24h}
                      </span>
                    </div>
                    <p>Last Updated on {Date(i.last_updated).split("G")[0]}</p>
                  </div>
                </div>
              </Link>
            
          );
        })}
      </div>
    
    </div>
  );
}

export default Coin;
