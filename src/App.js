import axios from 'axios';
import { useState, useEffect } from 'react';
import { ITEMS_URL, BASE_URL, POPULATE } from './utils/api';
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + ITEMS_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <h1>Suggested Items</h1>
      <ul>
        {data.length > 0
          ? data.map((item, idx) => {
              return (
              <div className="league" key={idx}>
                <h3>{item.attributes.name}</h3>
                <img className="image" src={item.attributes.image_url} />
                <li>{item.attributes.description}</li>
                <p>Cost: {item.attributes.cost}</p>
                <button>PURCHASE</button>
              </div>
              )
            })
          : null}
      </ul>
    </>
  );
};

export default App;