import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => {
        console.log(customers);

        this.setState({customers}, () => console.log('Customers fetched...', customers))
      });
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {/* ΔΕΙΞΕ ΕΔΩ ΤΟ TABLE ΚΑΙ ΤΡΑΒΑ ΤΑ ΔΕΔΟΜΕΝΑ ΤΟΥ TABLE ΑΠΟ ΤΟ STATE */}
        {/* {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )} */}
        </ul>
      </div>
    );
  }
}

export default Customers;
