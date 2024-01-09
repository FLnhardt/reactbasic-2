import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setTimeout(() => setCountries(data), 1000))
  }, [])

  return (
    <div className="App">
      {countries ? <Countries countries={countries} /> : <p>loading...</p>}
    </div>
  );
}

export default App;