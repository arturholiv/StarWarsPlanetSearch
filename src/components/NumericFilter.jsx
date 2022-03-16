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
        className="option-dropdown"
      >
        {option}
      </option>
    );
  }

  return (
    <div className="filters-container">
      <label htmlFor="columnInput">
        Filter by column:
        <select
          data-testid="column-filter"
          id="columnInput"
          onChange={ ({ target }) => setColumn(target.value) }
          className="select"
        >
          {options.map((option) => optionGenerator(option))}
        </select>
        </label>
        <label htmlFor="comparisonInput">

          Bigger or smaller?
          <select
            data-testid="comparison-filter"
            id="comparisonInput"
            onChange={ ({ target }) => setComparison(target.value) }
            className="select"
          >
            <option
              value="maior que"
              className="option-dropdown"
            >
              bigger than
            </option>
            <option
              value="menor que"
              className="option-dropdown"
            >
              smaller than
            </option>
            <option
              value="igual a"
              className="option-dropdown"
            >
              equals to
            </option>
          </select>
          </label>
        <label htmlFor="valueInput">
          Value:
          <input
            data-testid="value-filter"
            id="valueInput"
            type="number"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ addFilter }
      >
        Filter
      </button>
    </div>
  );
}
