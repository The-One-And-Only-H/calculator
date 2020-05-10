import React, { Component } from 'react';
import './CalculatorKeyPad.scss'; 

class CalculatorKeyPad extends Component {
  constructor() {
    super();
    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  // Below detects numpad button clicks using keycodes

  handleKeyboard(e) {
    switch (e.keyCode) {
      case 48:
        return this.props.buttonPressed('num', '0');

      case 49:
        return this.props.buttonPressed('num', '1');

      case 50:
        return this.props.buttonPressed('num', '2');

      case 51:
        return this.props.buttonPressed('num', '3');

      case 52:
        return this.props.buttonPressed('num', '4');

      case 53:
        return this.props.buttonPressed('num', '5');

      case 54:
        return this.props.buttonPressed('num', '6');

      case 55:
        return this.props.buttonPressed('num', '7');

      case 56:
        return this.props.buttonPressed('num', '8');

      case 57:
        return this.props.buttonPressed('num', '9');

      case 106:
        return this.props.buttonPressed('op', '*');

      case 107:
        return this.props.buttonPressed('op', '+');

      case 109:
        return this.props.buttonPressed('op', '-');

      case 110:
        return this.props.buttonPressed('dot');

      case 111:
        return this.props.buttonPressed('op', '/');

      case 13:
      case 187:
        return this.props.buttonPressed('equal', '=');

      default:
        return 'Error';
    }
  }

  render() {
    return (
      <div className="Buttons">
        <button className="Cancel" name="AC" onClick={() => this.props.buttonPressed('clear')}>
          AC
        </button>
        <button className="Save" name="S" onClick={() => this.props.buttonPressed('save')}>
          SAVE
        </button>
        <button className="Symbols" name="÷" onClick={() => this.props.buttonPressed('op', '/')}>
          ÷
        </button>

        <button className="Decimal" name="." onClick={() => this.props.buttonPressed('dot')}>
          .
        </button>
        <button className="Zero" name="0" onClick={() => this.props.buttonPressed('num', '0')}>
          0
        </button>
        <button className="Multiply" name="x" onClick={() => this.props.buttonPressed('op', '*')}>
          <div className="SymbolRotation">+</div>
        </button>

        <button className="Numbers" name="1" onClick={() => this.props.buttonPressed('num', '1')}>
          1
        </button>
        <button className="Numbers" name="2" onClick={() => this.props.buttonPressed('num', '2')}>
          2
        </button>
        <button className="Numbers" name="3" onClick={() => this.props.buttonPressed('num', '3')}>
          3
        </button>
        <button className="Symbols" name="-" onClick={() => this.props.buttonPressed('op', '-')}>
          -
        </button>

        <button className="Numbers" name="4" onClick={() => this.props.buttonPressed('num', '4')}>
          4
        </button>
        <button className="Numbers" name="5" onClick={() => this.props.buttonPressed('num', '5')}>
          5
        </button>
        <button className="Numbers" name="6" onClick={() => this.props.buttonPressed('num', '6')}>
          6
        </button>
        <button className="Symbols" name="+" onClick={() => this.props.buttonPressed('op', '+')}>
          +
        </button>

        <button className="Numbers" name="7" onClick={() => this.props.buttonPressed('num', '7')}>
          7
        </button>
        <button className="Numbers" name="8" onClick={() => this.props.buttonPressed('num', '8')}>
          8
        </button>
        <button className="Numbers" name="9" onClick={() => this.props.buttonPressed('num', '9')}>
          9
        </button> 
        <button className="Equals" name="=" onClick={() => this.props.buttonPressed('equal', '=')}>
          =
        </button>
      </div>
    );
  }
}

export default CalculatorKeyPad;
