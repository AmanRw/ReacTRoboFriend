import React, { Component } from "react";
import CardList from "../CardList";
// import { robots } from "./robot";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>  response.json())
      .then((user) =>{ this.setState({ robots: user })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {robots, searchfield } = this.state;
    const filterRobot = robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !robots.length?
     <h1>Loading</h1> : (
        <div className="tc">
          <h1 className="f1 lh-title">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <ErrorBoundary>
          <CardList robots={filterRobot} />
          </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
