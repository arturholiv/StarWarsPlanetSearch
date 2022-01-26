import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

export default function NumericFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    options,
    setOptions,
  } = useContext(myContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function removeFilter() {
    const newOptionsOfColumnToFilter = options
      .filter((option) => option !== column);
    const indexToSetColumn = options.indexOf(column) === 0 ? 1 : 0;
    setOptions(newOptionsOfColumnToFilter);
    setColumn(options[indexToSetColumn]);
  }

  function addFilter() {
    const actualFilter = {
      column,
      comparison,
      value,
    };

    const newFiltersArray = [...filterByNumericValues, actualFilter];

    setFilterByNumericValues(newFiltersArray);
    removeFilter();
  }

  function optionGenerator(option) {
    return (
      <option
        value={ option }
        key={ option }
      >
        {option}
      </option>
    );
  }

  return (
    <div>
      <label htmlFor="columnInput">
        Filtre por coluna:
        <select
          data-testid="column-filter"
          id="columnInput"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {options.map((option) => optionGenerator(option))}
        </select>
        <label htmlFor="comparisonInput">

          Maior ou menor ?
          <select
            data-testid="comparison-filter"
            id="comparisonInput"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option
              value="maior que"
            >
              maior que
            </option>
            <option
              value="menor que"
            >
              menor que
            </option>
            <option
              value="igual a"
            >
              igual a
            </option>
          </select>
        </label>
        <label htmlFor="valueInput">
          Valor:
          <input
            data-testid="value-filter"
            id="valueInput"
            type="number"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ addFilter }
      >
        Filtrar
      </button>
    </div>
  );
}
