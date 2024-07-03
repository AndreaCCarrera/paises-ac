import { useEffect, useState } from 'react';
import { Country } from './Template/country';
import './ficha.css';

  const Pais = () => {
  const url = window.location.href;
  const names = url.split('/');
  const name = names[names.length - 1];

  const [data, setData] = useState<Country | null>(null);

  const handleClick = () => {
    window.location.href = "/";
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const countryData: Country[] = await response.json();
      setData(countryData[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
  
  <div className="card-container">
    <button className="back-btn" onClick={handleClick}>Back</button>
    <div className="country-info">
      <div className="poster">
      <h1>{data.name.common}</h1>
        <img src={data.flags.png} alt={data.name.common} />
        
        
      </div>
      <div className="info-columns">
      
      <h2>Information</h2>
        <div className="column">
          <p><strong>Capital:</strong> {data.capital}</p>
          <p><strong>Region:</strong> {data.region}</p>
          <p><strong>Population:</strong> {data.population}</p>
          <p><strong>Independent:</strong> {data.independent ? 'Yes' : 'No'}</p>
          <p><strong>Landlocked:</strong> {data.landlocked ? 'Yes' : 'No'}</p>
          <p><strong>UN Member:</strong> {data.unMember ? 'Yes' : 'No'}</p>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Pais;