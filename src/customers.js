import React, { Component } from 'react';
import './customers.css';
import DenseTable from './customerTable';

class Customers extends Component {

  state = {
    customers: '',
    showCustomers: true,
    accounts: ''
  };

  componentDidMount() {
    this.callCustomers()
      .then(res => this.setState({ customers: res.express }))
      .catch(err => console.log(err));
    this.callAccounts()
      .then(res => this.setState({ accounts: res.express }))
      .catch(err => console.log(err));
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  callCustomers = async () => {
    const response = await fetch('/customers');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  callAccounts = async () => {
    const response = await fetch('/accounts');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let customers = '';
    if (this.state.customers === '') {
      customers = this.state.customers;
    }
    else {
      customers = JSON.parse(this.state.customers)
    }
    return (
      <div className="App">
        <header className="App-header">
          <DenseTable rows={(customers)} />
        </header>
      </div>
    );
  }
}

export default Customers;