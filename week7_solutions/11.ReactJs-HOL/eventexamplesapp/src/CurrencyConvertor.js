import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    alert("Converting to Euro");
    const { rupees } = this.state;
    const euro = rupees && !isNaN(rupees)
      ? (parseFloat(rupees) / 90).toFixed(2)
      : '';
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <div>
          <label htmlFor="inr">Amount:</label>{' '}
          <input
            id="inr"
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="INR"
          />
        </div>
        <div>
          <label htmlFor="eur">Converted (€):</label>{' '}
          <input
            id="eur"
            type="text"
            value={this.state.euro}
            readOnly
          />
        </div>
        <button onClick={this.handleSubmit}>Convert</button>
      </div>
    );
  }
}

export default CurrencyConvertor;
