import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { Search } from "./components/search/search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      search: ""
    };
  }

  async componentDidMount() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");

    const peopleJson = await request.json();

    this.setState({ people: peopleJson });
  }

  render() {
    const { people, search } = this.state;

    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <Search
          placeholder="Search person"
          changeHandler={ev => this.setState({ search: ev.target.value })}
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
