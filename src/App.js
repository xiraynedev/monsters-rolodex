import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(monsters => {
      this.setState(() => {
        return {
          monsters: monsters
        }
      })
    })
  }

  handleOnChange = (e) => {
    this.setState({ searchfield: e.target.value})
  }

  render() {
   const { monsters, searchfield } = this.state
   const filteredMonsters = monsters.filter(monster => {
     return monster.name.toLowerCase().includes(searchfield.toLowerCase())
   })
   return (
    <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters'
      handleOnChange={this.handleOnChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  ); 
  }
}

export default App;

// https://jsonplaceholder.typicode.com/users