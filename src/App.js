import React, { Component } from 'react';
import './App.css';
import CustomerTable from './customerTable';
import AccountTable from './accountTable'

class App extends Component {

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

  _showCustomers = (bool) => {
    this.setState({
      showCustomers: bool
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
    let accounts = '';
    if (this.state.accounts === '') {
      accounts = this.state.accounts;
    }
    else {
      accounts = JSON.parse(this.state.accounts)
    }
    return (
      <div className="App">
        {this.state.showCustomers && <header className="App-header">
          Customers
        </header>}
        {!this.state.showCustomers && <header className="App-header">
          Accounts
        </header>}
        <button onClick={this._showCustomers.bind(null, true)}>Show Customers</button>
        <button onClick={this._showCustomers.bind(null, false)}>Show Accounts</button>
        {this.state.showCustomers && <CustomerTable rows={(customers)} accounts={(accounts)} />}
        {!this.state.showCustomers && <AccountTable rows={(accounts)} />}
      </div>
    );
  }
}

export default App;