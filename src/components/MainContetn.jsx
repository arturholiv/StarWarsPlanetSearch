import React, { useContext } from 'react';
import Table from './Table';
import myContext from '../context/myContext';
import NumericFilter from './NumericFilter';

export default function MainContent() {
  const { filterByName,
    setNameFilter } = useContext(myContext);
  return (
    <div>
      <label htmlFor="nameInput">
        Search by Name:
        <input
          data-testid="name-filter"
          id="nameInput"
          type="text"
          placeholder="Which planet are you looking for?"
          value={ filterByName.name }
          onChange={ ({ target }) => setNameFilter(target.value) }
        />
      </label>
      <NumericFilter />
      <Table />
    </div>
  );
}
