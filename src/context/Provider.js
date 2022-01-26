import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

export default function Provider({ children }) {
  const INITIAL_OPTIONS = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [options, setOptions] = useState(INITIAL_OPTIONS);

  const state = {
    planets,
    setPlanets,
    filterByName: {
      name: nameFilter,
    },
    setNameFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    options,
    setOptions,
  };

  return (
    <myContext.Provider value={ state }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
