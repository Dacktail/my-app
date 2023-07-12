import React from 'react';
import { Fragment } from 'react';
import homeImg from "../photo/bitcoin.png";
import './Home.css'


function Home() {
  return (
    <Fragment>
      <div className="container w-100 h={'85vh'} home">
        <img
          className="d-block home-img" 
          style={{ width: "100%", height: "100vh" }}
          src={homeImg}
          alt=""
        />
      </div>
    </Fragment>
  );
}

export default Home