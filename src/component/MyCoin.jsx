import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import axios from "axios";
import "./MyCoin.css";

function MyCoin() {
  const [mydata, setData] = useState([]);

  const myaxios = () => {
    axios.get("https://api.coingecko.com/api/v3/exchanges").then((e) => {
      setData(e.data);
      console.log(e.data);
    });
  };

  useEffect(() => {
    myaxios();
  }, []);
  return (
    <div>
      <div className="container mycoin d-flex w-100  flex-wrap">
        
          {mydata.map((e) => {
            return (
              
              <div className="mycoin-info " key={e.id} >
                <div className="image pt-3">
                  <img src={e.image} alt="" />
                </div>
                <div className="image-info">
                  <p className="card-text">{e.trust_score_rank}</p>
                  <h5 className="card-title mb-2">{e.name}</h5>
                  <Link to={e.url} className="btn btn-primary mb-3">
                     {e.name}
                    
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default MyCoin;
