import React from 'react';
import { Fragment } from 'react';
import './Home.css';
// import About from './About';
import TrendingCoin from './TrendingCoin';



function Home() {
  return (
    <Fragment>
      <TrendingCoin/>
      {/* <About/> */}
    </Fragment>
  );
}

export default Home