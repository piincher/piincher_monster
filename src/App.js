import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
	const [ monsters, setMonsters ] = useState([]);
	const [ searchField, setSearchField ] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};
	const filteredMonsters = monsters.filter((monster) =>
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	);

	return (
		<div className="App">
			<h1>Piincher Monsters </h1>
			<SearchBox onSearchChange={onSearchChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	);
};
export default App;
