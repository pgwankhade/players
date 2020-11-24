import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5fbd01094f12502c21d7ecef')
      .then(response=> response.json())
      .then(users => {this.setState({ players: users.playerList})
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { players, searchfield } = this.state;
    const filteredplayer = players.filter( player =>{
      return player.PFName.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !players.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Players</h1>
          <SearchBox searchChange={this.onSearchChange}/>
            <CardList player={filteredplayer} />
        </div>
      );
  }
}

export default App;