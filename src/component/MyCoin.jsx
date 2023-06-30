import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import './MyCoin.css';

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
      
      <div className="container mt-5">
        <div className="row mt-5">
          {mydata.map((e) => {
            return (
              // <div className="">
              <div className="col-lg-2" >
                <div
                  className="col-md-3 mb-3 card"
                  style={{ width: "180px" , height:"370px" }}
                  key={e.id}
                >
                  <Card.Img src={e.image} />
                  <div className="card ">
                    <div className="card-body">
                      <p className="card-text">{e.trust_score_rank}</p>
                      <h5 className="card-title">{e.name}</h5>
                      <Link to={e.url} className="btn btn-primary">
                        {e.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyCoin;
