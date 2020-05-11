import React, { Component } from 'react';
import './Calculator.scss';

import CalculatorResult from './CalculatorResult';
import CalculatorKeyPad from './CalculatorKeyPad';

import commify from './Commify';

// TO DO:
// - Tidy styles
// - Shrink font size dependent on number of digits in display and expression
// - Update README when complete

const performCalculation = (op, n1, n2) => {
  switch (op) {
    case '÷':
      return n1 / n2;
    case 'x':
      return n1 * n2;
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    default:
      return 'Error';
  }
};

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      expr: null,
      display: '0',
      operand: 0,
      operator: null,
      newOperation: true,
    };
  }

  // Adds commas to expression 
  getExpression() {
    const { expr, newOperation, display, operand, operator } = this.state;

    if (expr) {
      return expr;
    }

    if (operator === null) {
      return commify(display);
    }

    if (newOperation) {
      return`${commify(operand)} ${operator}`
    }

    return`${commify(operand)} ${operator} ${commify(display)}`
  }

  inputDigit(digit) {
    const { display, newOperation } = this.state;    

    if (display === 'Error') {
      return;
    }

    let newDisplay = newOperation ? digit : display + digit;

    // Prevents multiple zeros and allows for floats beginning with zero
    newDisplay = newDisplay.replace(/^0*/, "");
    if (newDisplay === "" || newDisplay[0] === '.') {
      newDisplay = '0' + newDisplay;
    }

    this.setState({
      expr: null,
      display: newDisplay,
      newOperation: false,
    });
  }

  inputDecimal() {
    const { display } = this.state;

    if (display === 'Error') {
      return;
    }

    // If the display does not contain a decimal point
    if (!display.includes('.')) {
      // Append the decimal point
      this.setState({ 
        display: `${display}.`, 
        newOperation: false 
      });
    }
  }

  handleEqual() {
    const { display, operator, operand } = this.state;

    if (display === 'Error') {
      return;
    }

    const op2 = parseFloat(display);

    let result;

    if (operator !== null) {
      // There is an operation to perform: do the math and prepare the result
      // as the operand for the following operation
      result = performCalculation(operator, operand, op2);

      if (!Number.isFinite(result)) {
        this.setState({
          display: 'Error',
        });
        return;
      }

      // Prevent display of long decimals
      result = parseFloat(result.toFixed(15));
    } else {
      // = pressed but no operation dialled in
      result = op2;
    }

    this.setState({
      expr: `${this.getExpression()} =`,
      display: String(result),
      operand: result,
      operator: null,
      newOperation: true,
    });
  }

  handleOperator(nextOperator) {
    const { display, newOperation } = this.state;

    if (display === 'Error') {
      return;
    }

    // Handle unary minus
    if (newOperation && nextOperator === '-') {
      this.inputDigit(nextOperator);
      return;
    }

    // perform the operation in case we are in a chain like 1 + 2 + 3
    this.handleEqual();

    // Store the next operation to perform
    this.setState({ 
      expr: null,
      operator: nextOperator 
    });
  }

  invertDisplay() {
    let { display, operand } = this.state;
    const { newOperation } = this.state;

    if (display === 'Error') {
      return;
    }

    display = String(-parseFloat(display));
    if (newOperation && operand !== null) {
      // Handle the case of user typing 10 * - for example
      // the value in the display was just copied in the operand so we have to flip it too
      operand = -operand;
    }
    this.setState({
      expr: null,
      display,
      operand,
    });
  }

  saveResult() {
    fetch("http://localhost/php/Save.php", {
      method: "post",
      body: `result=${this.state.display}`,
      mode: "no-cors",
      headers: 
        {
          "Content-Type": "application/x-www-form-urlencoded"
        },
    }).then(function(data) { console.log(data) })
  }

  buttonPressed(type, button) {
    // console.log(type, button);
    if (type === 'op') {
      return this.handleOperator(button);
    } else if (type === 'save') {
      return this.saveResult();
    } else if (type === 'clear') {
      return this.resetCalculator();
    } else if (type === 'num') {
      return this.inputDigit(button);
    } else if (type === 'dot') {
      return this.inputDecimal();
    } else if (type === 'inv') {
      return this.invertDisplay();
    } else if (type === 'equal') {
      return this.handleEqual(button);
    }
    return this.setState({ display: 'Error' });
  }

  resetCalculator() {
    this.setState({
      expr: null,
      display: '0',
      operand: 0,
      operator: null,
      newOperation: true,
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="Container">
        <div className="CalculatorBody">
          <form action="./Save.php" method="post">
            <CalculatorResult
              expr={this.getExpression()}
              display={this.state.display}
              operator={this.state.operator}
            />
          </form>
          <CalculatorKeyPad
            buttonPressed={(type, button) => this.buttonPressed(type, button)}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
