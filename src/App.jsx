import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import BeersContainer from "./components/BeersContainer/BeersContainer";
import { useState, useEffect } from "react";

const App = () => {
  const [beersArrData, setBeersArrData] = useState([]);

  const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setBeersArrData(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>

      <SideBar></SideBar>
      <BeersContainer beersArr={beersArrData}></BeersContainer>
    </div>
  );
};

export default App;
