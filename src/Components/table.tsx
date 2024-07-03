import { useState, useEffect } from 'react';
import { Country, Props } from '../Template/country';

export function Table({ searchTerm, colorLines, originalCountries }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [ascending, setAscending] = useState(true);
  const [defaultOrder, setDefaultOrder] = useState<Country[] | null>(null); 

  useEffect(() => {
    setCountries(originalCountries);
    setFilteredCountries(originalCountries);
    setDefaultOrder(originalCountries);
  }, [originalCountries]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  const flagClick = (countryName: string): void => {  
    window.location.href ='/pais/' + countryName;
  };

  const deleteCountry = (countryName: string): void => {
    const updatedCountries = countries.filter(
      country => country.name.common !== countryName
    );
    setCountries(updatedCountries);
    setFilteredCountries(updatedCountries);
  };

  const orderByPopulation = (): void => {
    const sortedCountries = [...filteredCountries].sort((a, b) => {
      return ascending ? b.population - a.population : a.population - b.population;
    });
    setFilteredCountries(sortedCountries);
    setSortBy('population');
    setAscending(!ascending);
  };

  const orderByName = (): void => {
    const sortedCountries = [...filteredCountries].sort((a, b) => {
      return ascending ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
    });
    setFilteredCountries(sortedCountries);
    setSortBy('name');
    setAscending(!ascending);
  };

  const resetOrder = (): void => {
    if (defaultOrder !== null) {
      setFilteredCountries(defaultOrder); 
      setSortBy(null); 
    }
  };

  const handleSortClickPop = (sortByFunction: () => void): void => {
    if (sortBy === 'population' && sortByFunction === orderByPopulation) {
      resetOrder();
    } else {
      sortByFunction();
    }
  };

  const handleSortClickNam = (sortByFunction: () => void): void => {
    if (sortBy === 'name' && sortByFunction === orderByName) {
      resetOrder();
    } else {
      sortByFunction();
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Flag</th>
          <th id="name" onClick={() => handleSortClickNam(orderByName)}>Name</th>
          <th>Official Name</th>
          <th id="population" onClick={() => handleSortClickPop(orderByPopulation)}>Population</th>
          <th>Main city</th>
          <th>Actions</th>
        </tr>
      </thead>
      <br />
      {filteredCountries.map((country, index) => ( 
        <tbody key={country.name.common}>
          <tr style={{ backgroundColor: colorLines && index % 2 === 1 ? 'lightgray' : 'white' }}>
            <td onClick={() => flagClick(country.name.common)}>
              <img src={country.flags.png} alt={country.name.common} />
            </td>
            <td>{country.name.common}</td>
            <td>{country.name.official}</td>
            <td>{country.population}</td>
            <td>{country.capital}</td>
            <td>
              <button onClick={() => deleteCountry(country.name.common)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}