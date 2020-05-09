import React from 'react';
import './CalculatorResult.scss';

const CalculatorResult = ({ expr, display }) => (
  <div className="Wrapper">
    <p className="Expression">{expr}</p>
    <p className="Result">{display}</p>
  </div>
);

export default CalculatorResult;
