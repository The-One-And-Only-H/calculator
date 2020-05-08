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
        return this.props.buttonPressed('num', 0);

      case 49:
        return this.props.buttonPressed('num', 1);

      case 50:
        return this.props.buttonPressed('num', 2);

      case 51:
        return this.props.buttonPressed('num', 3);

      case 52:
        return this.props.buttonPressed('num', 4);

      case 53:
        return this.props.buttonPressed('num', 5);

      case 54:
        return this.props.buttonPressed('num', 6);

      case 55:
        return this.props.buttonPressed('num', 7);

      case 56:
        return this.props.buttonPressed('num', 8);

      case 57:
        return this.props.buttonPressed('num', 9);

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
        <button className="Numbers" name="7" onClick={() => this.props.buttonPressed('num', 7)}>
          <div className="SelectedNumber">7</div>
        </button>
        <button className="Numbers" name="8" onClick={() => this.props.buttonPressed('num', 8)}>
          <div className="SelectedNumber">8</div>
        </button>
        <button className="Numbers" name="9" onClick={() => this.props.buttonPressed('num', 9)}>
          <div className="SelectedNumber">9</div>
        </button>
        <button className="Symbols" name="C" onClick={() => this.props.buttonPressed('clear')}>
          <div className="SelectedSymbol">C</div>
        </button>

        <button className="Numbers" name="4" onClick={() => this.props.buttonPressed('num', 4)}>
          <div className="SelectedNumber">4</div>
        </button>
        <button className="Numbers" name="5" onClick={() => this.props.buttonPressed('num', 5)}>
          <div className="SelectedNumber">5</div>
        </button>
        <button className="Numbers" name="6" onClick={() => this.props.buttonPressed('num', 6)}>
          <div className="SelectedNumber">6</div>
        </button>
        <button className="Symbols" name="+" onClick={() => this.props.buttonPressed('op', '+')}>
          <div className="SelectedSymbol">+</div>
        </button>
        <button className="Symbols" name="-" onClick={() => this.props.buttonPressed('op', '-')}>
          <div className="SelectedSymbol">-</div>
        </button>

        <button className="Numbers" name="1" onClick={() => this.props.buttonPressed('num', 1)}>
          <div className="SelectedNumber">1</div>
        </button>
        <button className="Numbers" name="2" onClick={() => this.props.buttonPressed('num', 2)}>
          <div className="SelectedNumber">2</div>
        </button>
        <button className="Numbers" name="3" onClick={() => this.props.buttonPressed('num', 3)}>
          <div className="SelectedNumber">3</div>
        </button>
        <button className="Symbols" name="÷" onClick={() => this.props.buttonPressed('op', '/')}>
          <div className="SelectedSymbol">÷</div>
        </button>

        <button className="Multiply" name="x" onClick={() => this.props.buttonPressed('op', '*')}>
          <div className="SelectedSymbol">+</div>
        </button>
        <button className="Zero" name="0" onClick={() => this.props.buttonPressed('num', 0)}>
          <div className="SelectedNumber">0</div>
        </button>
        <button className="Symbols" name="." onClick={() => this.props.buttonPressed('dot')}>
          <div className="SelectedNumber">.</div>
        </button>
        <button className="Equals" name="=" onClick={() => this.props.buttonPressed('equal', '=')}>
          =
        </button>
      </div>
    );
  }
}

export default CalculatorKeyPad;
