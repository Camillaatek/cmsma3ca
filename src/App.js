import axios from 'axios';
import { useState, useEffect } from 'react';
import { ANIMALS_URL, BASE_URL, POPULATE } from './utils/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + ANIMALS_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {data.length > 0
          ? data.map((item, idx) => {
              return <li key={idx}>{item.attributes.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default App;