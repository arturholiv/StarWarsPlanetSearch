import React, { useContext } from 'react';
import Table from './Table';
import myContext from '../context/myContext';
import NumericFilter from './NumericFilter';
import { GiExplodingPlanet } from 'react-icons/gi';

export default function MainContent() {
  const { filterByName,
    setNameFilter } = useContext(myContext);
  return (
    <div className="main-content">
      <div className="about">
       <div className="title">
        <GiExplodingPlanet className="image"/>
        <h1>StarWars Planets</h1>
       </div>
       <h4>Search information about any planet of the StarWars saga...</h4>
      </div>
      <p></p>
      <main className="forms-container">
        <div className="name-input">
          <label htmlFor="nameInput">
            Search by Name:
            <input
              data-testid="name-filter"
              id="nameInput"
              type="text"
              placeholder="Which planet are you looking for?"
              value={ filterByName.name }
              onChange={ ({ target }) => setNameFilter(target.value) }
              className="input-name"
            />
          </label>
        </div>
        <NumericFilter />
      </main>
      <Table />
    </div>
  );
}
