import React, { Component } from 'react';
import { CardList } from './components/card-list.component/card-list.component';
import { Search } from './components/search.component/search.component';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));

  }

  handleChange = e => (
    this.setState({ searchField: e.target.value })
  )

  render(){
    const { monsters, searchField } = this.state;
    const FilteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="search for a monster" handlechange={this.handleChange} />
        <CardList monsters={FilteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
