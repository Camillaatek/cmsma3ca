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
              return (
              <div className="league" key={idx}>
                <div className="image">{item.attributes.image.url}</div>
                <li>{item.attributes.name}</li>
                <p>{item.attributes.description}</p>
              </div>
              )
            })
          : null}
      </ul>
    </>
  );
};

export default App;