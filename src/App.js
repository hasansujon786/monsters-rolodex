import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/Card-list'
import Search from './components/search/Search'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(mon => {
      return mon.name.toLowerCase().includes(searchField.toLowerCase().trim())
    })

    return (
      <div className="App">
        <h1 className="app-heading">Monster Rolodex</h1>
        <Search
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
