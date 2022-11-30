import React, { useState, useEffect } from "react";
import CardList from "../CardList";
// import { robots } from "./robot";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        setRobots(user)});
  },[]);
 
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterRobot = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1 lh-title">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobot} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
