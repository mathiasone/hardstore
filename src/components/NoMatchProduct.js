import React from 'react';
import {useLocation, Link} from 'react-router-dom';

function NoMatchProduct() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for the product ID: <code>{location.pathname}</code>
      </h3>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

  export default NoMatchProduct;