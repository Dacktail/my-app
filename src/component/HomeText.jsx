// import * as React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import useMediaQuery from "@mui/material/useMediaQuery";


//  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

//  const theme = React.useMemo(
//    () =>
//      createTheme({
//        palette: {
//          mode: prefersDarkMode ? "dark" : "light",
//        },
//      }),
//    [prefersDarkMode]
//  );

// function HomeText() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <main>This app is using the dark mode</main>
//     </ThemeProvider>
//   );
// }

// export default HomeText;



import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TrendingCoin from "./TrendingCoin";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mod
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp >
        </MyApp>
        <TrendingCoin/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}












// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function TrendingCoin() {
  
//     const [mydata, setData] = useState([]);
  
//   useEffect(() => {
//     const myaxios = async() => {
//      await axios.get(`https://api.coingecko.com/api/v3/search/trending`).then((i) => {
//         console.log(i.data);
//         setData(i.data);
//       });
//     };
//     myaxios();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div>
//         <div className="container ">
        
//           {mydata.map((e => {
//             return (
              
//               <div className="mycoin-info " key={e.id} >
//                 <div className="image pt-3">
//                   <img src={e.image} alt="" />
//                 </div>
//                 <div className="image-info">
//                   <p className="card-text">{e.trust_score_rank}</p>
//                   <h5 className="card-title mb-2">{e.name}</h5>
//                   <Link to={e.url} className="btn btn-primary mb-3">
//                      {e.name}
                    
//                   </Link>
//                 </div>
//               </div>
//             );
//           }))}
//         </div>
//     </div>
//   )
// }

// export default TrendingCoin
