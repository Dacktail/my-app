// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// // import { Link } from 'react-router-dom';
// import Typewriter from "typewriter-effect";
// import './TrendingCoin.css';
// import AliceCarousel from "react-alice-carousel";

// function TrendingCoin() {
//   // Initialize state for the data
//   const [mydata, setData] = useState([]);

//   // Use the useEffect hook to fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make the API request
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/search/trending"
//         );
//         // Set the data in the state
//         setData(response.data.coins);
//         // console.log(response.data.coins)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle errors here (e.g., display an error message)
//       }
//     };

//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // The empty dependency array means this effect runs once on mount


//  const responsive = {
//     0: { 
//         items: 1,
//         // nav: true
//     },
//     600: {
//         items: 2,
//         // nav: false
//     },
//     1000: {
//         items: 3,
//         nav: true,
//         // loop: false
//     }
//   };
 
// const trendCoin =  
//           mydata.map((coin) => (
//             <div className="trend-coin-info" key={coin.id}>
//               <div className="image pt-3 ">
//                 <img src={coin.item.large} alt="" />
//               </div>
//               <p>{coin.item.id}</p>
//             </div>
//           ))
 
//   return (
//     <Fragment>
//       {console.log(mydata)}
//       <div className="container-fluid home_text">
//         <div className="home-text">
//           <Typewriter
//             onInit={(typewriter) => {
//               // eslint-disable-next-line no-unused-expressions
//               typewriter
//                 .typeString("Welcome To Crypto World")
//                 .pauseFor(1000)
//                 .deleteAll()
//                 .typeString("Crypto Coin Is The Future Of Currency")
//                 .pauseFor(1000)
//                 .deleteAll()
//                 .typeString("Crypto Coin Trading For Everyone")
//                 .pauseFor(1000)
//                 .deleteAll()
//                 .typeString("Invest In The Future Of Currency")
//                 .start();
                
//             }}
//           />
//         </div>
//         <div className="container trend-text">
//           <h1>These coins trend in last 24hrs</h1>
//         </div>

       
//           <AliceCarousel
//           mouseTracking
//           infinite
//           autoPlayInterval={1000}
//           animationDuration={1500 }
//           disableButtonsControls
//           responsive={responsive}
//           autoPlay
//           disableDotsControls
//           items={trendCoin}
//           />
//         </div>
//     </Fragment>
//   );
// }

// export default TrendingCoin;



import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import AliceCarousel from "react-alice-carousel";
import "./TrendingCoin.css";
import cryimg from '../photo/6919411_29932.jpg'

function TrendingCoin() {
  const [mydata, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setData(response.data.coins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3, nav: true },
  };

  const trendCoin = mydata.map((coin) => (
    <div className="trend-coin-info" key={coin.id}>
      <div className="image pt-3">
        <img src={coin.item.large} alt="" />
      </div>
      <p>{coin.item.id}</p>
    </div>
  ));

  return (
    <Fragment>
      <div className="container-fluid home_text">
       
        <div className="hero-section">
          <div className="home-text">
              <Typewriter
                onInit={(typewriter) =>
                  typewriter
                    // .typeString("Welcome To Crypto World")
                    // .pauseFor(1000)
                    // .deleteAll()
                    // .typeString("Crypto Coin Is The Future Of Currency")
                    // .pauseFor(1000)
                    // .deleteAll()
                    // .typeString("Crypto Coin Trading For Everyone")
                    // .pauseFor(1000)
                    // .deleteAll()
                    // .typeString("Invest In The Future Of Currency")
                    .start()
                }
                options={{
                  strings: [
                    `Welcome To Crypto World`,
                    `Crypto Coin Is The Future Of Currency`,
                    `Invest In The Future Of Currency`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
           
          </div>
          <div className="img-section">
            <img className="hero-img" src={cryimg} alt="" />
          </div>
        </div>
        <div className="container trend-text">
          <h2>These Coins Trend In The Last 24HRS</h2>
        </div>
        <div className="container trend-carousel">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={1500}
              disableButtonsControls
              responsive={responsive}
              autoPlay
              disableDotsControls
              items={trendCoin}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default TrendingCoin;
