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

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(people => {
        this.setState({ people });
      });
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
