import React from 'react';
import './CalculatorResult.scss';

const CalculatorResult = ({ display }) => (
  <div className="Wrapper">
    <p className="Result">{display}</p>
  </div>
);

export default CalculatorResult;
