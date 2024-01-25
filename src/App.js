import './App.css';
import CardList from './components/cardlist/cardlist.component';
import SearchBar from './components/searchbar/searchbar.component';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  //Declaration of variables
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //API Call (the HOOKs)
  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setMonsters(response.data);
    };

    fetchMonsters();
  }, []); 
  // an empty array [] is the dependencies on the initial load

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = monsters
    } else {
      filtered = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredMonsters(filtered);
  }, [monsters, searchInput]);
      // this dependencies means that the hooks will be call
      // whenever there are changes in either monsters or searchInput
  

  const handleInput = e => {
    setSearchInput(e.target.value)
  };
  // RETURN FUNCTION
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar
        placeholder='Search Monster'
        handleInput={handleInput}
      />
      <CardList monsters={monsters} />  
    </div>
  );
}

export default App;
