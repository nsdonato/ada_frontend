import React from 'react';
import Card from './components/Card';

import './App.css';

const App = () => {

  const products = [
    {
      "id": "MLA819328068",
      "title": "Motorola G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram",
      "price": 35000,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA31239994076_062019-I.jpg"
    },
    {
      "id": "MLA807148555",
      "title": "Motorola G6 32 Gb Índigo Oscuro 3 Gb Ram",
      "price": 10999,
      "condition": "new",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/632562-MLA31003470563_062019-I.jpg"
    }
  ]

  return (
    <div className="main">
      {products.map(element => {
        return <Card info={element} />
      })}
    </div>
  );
}

export default App;
