import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import BeersContainer from "./components/BeersContainer/BeersContainer";
import { useState, useEffect } from "react";

const App = () => {
  const [beersArrData, setBeersArrData] = useState([]);
  const [searchBoxInput, setSearchBoxInput] = useState("");

  const getBeers = async () => {
    let APIAllData = [];
    for (let i = 1; i < 6; i++) {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`
      );
      const APIDataPerPage = await response.json();
      Array.prototype.push.apply(APIAllData, APIDataPerPage);
    }
    setBeersArrData(APIAllData);
  };

  // const getBeers = async () => {
  //   const response = await fetch(
  //     `https://api.punkapi.com/v2/beers?page=1&per_page=80`
  //   );
  //   const data = await response.json();
  //   setBeersArrData(data);
  // };

  const handleInput = (event) => {
    setSearchBoxInput(event.target.value);
  };

  const filterBeersArrData = beersArrData.filter((object) => {
    const beerName = object.name.toLowerCase();
    return beerName.includes(searchBoxInput.toLowerCase());
  });

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="App">
      <NavBar
        handleInput={handleInput}
        searchBoxInput={searchBoxInput}
      ></NavBar>

      {/* <SideBar></SideBar> */}
      <BeersContainer beersArr={filterBeersArrData}></BeersContainer>
    </div>
  );
};

export default App;
