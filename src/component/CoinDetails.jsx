import { Fragment, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, ProgressBar } from "react-bootstrap";
import './CoinDetails.css';
import { Badge, Box } from "@mui/material";
import CoinChart from "./CoinChart";



function CoinDetails() {
    const currency = "₹";
    let { id } = useParams();
    const [mydata, setData] = useState(null);
  
  useEffect(() => {
    const myaxios = () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((i) => {
        console.log(i.data);
        setData(i.data);
      });
    };
    myaxios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {mydata && (
        <Fragment>
          <div className="container coin-detail-info w-100 flex-wrap p-0">
            <div className="card-info-detail ">
              <div className="img">
                <Image src={mydata.image.large} alt="" />
                <p
                  style={{
                    color:
                      mydata.market_data.price_change_percentage_24h > 0
                        ? "rgb(14, 203, 129)"
                        : "red",
                    fontWeight: 500,
                  }}
                >
                  {mydata.market_data
                    .market_cap_change_percentage_24h_in_currency.inr >= 0 &&
                    "+"}
                  {mydata.market_data.price_change_percentage_24h?.toFixed(2)}%
                </p>
              </div>
              <div className="coin-about">
                <h4>{mydata.name}</h4>
                <p>
                  {currency} {mydata.market_data.current_price.inr}
                </p>
                <div className="coin-update">
                  <p>
                    Last Updated on {Date(mydata.last_updated).split("G")[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="coin-info container-md">
            <Badge className="market-coin-rank">{`#${mydata.market_cap_rank}`}</Badge>
            <ProgressBar
              min={`${currency}${mydata.market_data.low_24h.inr}`}
              value={`${currency}${mydata.market_data.current_price.inr}`}
              max={`${currency}${mydata.market_data.high_24h.inr}`}
            ></ProgressBar>
            <div className="low-high">
              <Badge>{`${currency}${mydata.market_data.low_24h.inr}`}</Badge>
              <Badge>{`${currency}${mydata.market_data.high_24h.inr}`}</Badge>
            </div>
            <Box className="w-100 p-4">
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>MAX SUPPLY</p>
                <p>{mydata.market_data.max_supply}</p>
              </div>
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>CIRCULATING SUPPLY</p>
                <p>{mydata.market_data.circulating_supply}</p>
              </div>
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>TOTAL SUPPLY</p>
                <p>{mydata.market_data.total_supply}</p>
              </div>
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>MARKET CAP</p>
                <p>{mydata.market_data.market_cap.inr}</p>
              </div>
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>ALL TIME LOW</p>
                <p>{`${currency}${mydata.market_data.atl.inr}`}</p>
              </div>
              <div className="coin-detail w-100 d-flex justify-content-evenly">
                <p>ALL TIME HIGH </p>
                <p>{`${currency}${mydata.market_data.ath.inr}`}</p>
              </div>
            </Box>
          </div>
          <div>
            <CoinChart />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CoinDetails;
