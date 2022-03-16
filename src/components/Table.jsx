import React, { useContext, useEffect } from 'react';
import myContext from '../context/myContext';
import TableHeaders from './TableHeaders';
import TableRows from './TableRows';
import { fetchPlanets } from '../services/planetsAPI';

export default function Table() {
  const {
    planets,
    setPlanets,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(myContext);

  const operator = {
    'maior que': (a, b) => a > b,
    'menor que': (a, b) => a < b,
    'igual a': (a, b) => a === b,
  };

  function applyFilters(planetsToFilter) {
    filterByNumericValues.forEach((filter) => {
      planetsToFilter = planetsToFilter.filter((planet) => {
        const planetValue = Number(planet[filter.column]);
        const filterValue = Number(filter.value);
        return operator[filter.comparison](planetValue, filterValue);
      });
    });
    return planetsToFilter;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPlanets();
      setPlanets(data.results);
    }
    fetchData();
  }, [setPlanets]);
  function planetsToRender() {
    const filteredByNumbers = applyFilters(planets);
    return filteredByNumbers
      .filter((planet) => (planet.name).toLowerCase().includes((name).toLowerCase()))
      .map((planet) => TableRows(planet)); // aqui eu chamo a funçao do componente tablerows para criar cada linha
  }

  return (
    <table cellspacing="5">
      <thead>
        <TableHeaders />
      </thead>

      <tbody>
        {planetsToRender()}
      </tbody>
    </table>
  );
}
