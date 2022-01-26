export async function fetchPlanets() {
  const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(PLANETS_URL);
  const data = await response.json();
  return data;
}

export function fetchany() { }
