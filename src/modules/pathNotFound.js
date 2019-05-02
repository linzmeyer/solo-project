import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pathNotFound = () => {
  return (
    <div className="wrapper">
      <h1>404</h1>
      <FontAwesomeIcon icon={["far", "eye-slash"]} size='2x' />
      <h2>Page not found</h2>
    </div>
  );
}

export default pathNotFound;