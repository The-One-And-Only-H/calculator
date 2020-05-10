import React from 'react';
import './CalculatorResult.scss';

import commify from './Commify';

const CalculatorResult = ({ expr, display }) => (
  <div className="Wrapper">
    <p className="Expression">{expr}</p>
    <p className="Result">{commify(display)}</p>
  </div>
);

export default CalculatorResult;
