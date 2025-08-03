import React from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    this.setState(
      prev => ({ counter: prev.counter + 1 }),
      () => this.sayHello("Member1")
    );
  };

  handleDecrement() {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  }

  sayHello = (name) => {
    const msg = `Hello! ${name}`;
    console.log(msg);
    alert(msg);
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handlePress = (e) => {
    console.log(e);
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.handleDecrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handlePress}>Click on me</button>
        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
