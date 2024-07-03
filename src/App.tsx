import { useState, useEffect } from 'react';
import { Table } from "./Components/table";
import { Searcher } from './Components/searcher';
import { Country } from './Template/country';
import './App.css';

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [colorLines, setColorLines] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [fullCountryList, setFullCountryList] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(response => {
        setCountries(response);
        setFullCountryList(response);
      });
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleReset = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(response => {
        setCountries(response);
        setFullCountryList(response); // Actualiza fullCountryList con la lista de países actuales
      });
  };

  const handleColorLines = () => {
    setColorLines(!colorLines);
  };

  return (
    <>
      <img
        src={'./paises.png'}
        alt={"Logo mundo"}
        style={{ width: '100px'}}
      />
      <h1>Countries AC</h1>
      <Searcher onSearch={handleSearch} />
      <br></br>
      <div className="buttons">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleColorLines}>Colours</button>
      </div>
      <div className="card">
        <Table searchTerm={searchTerm} colorLines={colorLines} originalCountries={fullCountryList}/>
      </div>
    </>
  );
}

export default App;