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
        //console.log(customers);

        this.setState({customers}, () => console.log('Customers fetched...', customers))
      });
  }

  render() {
    console.log(this.state.customers);

    return (
      <div>

        {/* <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul> */}

        <table>

          <thead>
            <tr>
              <th>Prod.code</th>
              <th>Category</th>
              <th>Inventory</th>
              <th>Rotation</th>
              <th>Lifetime</th>
              <th>Est.overstock</th>
              <th>Value at risk</th>
              <th>Current price</th>
              <th>Markdown</th>
              <th>Attainable increase TURNOVER</th>
              <th>Attainable increase MARGIN</th>
            </tr>
          </thead>

          <tbody>
            {this.state.customers[0] && this.state.customers[0].map((customer, i)=> 

              <tr key = {i}> 
          
                <td>{customer.prod_code}</td>
                <td>{customer.category}</td>
                <td>{customer.inventory}</td>
                <td>{customer.rotation}</td>
                <td>{customer.lifetime}</td>
                <td>{customer.estimated_overstock}</td>
                <td>€ {customer.value_at_risk}</td>
                <td>€ {customer.current_price}</td>
                <td>Optimal {customer.optimal_markdown*100}%</td>
                <td id="attainable-increase">€ {customer.attainable_increase_turnover}</td>
                <td id="attainable-increase">€ {customer.attainable_increase_markdown}</td>
        
              </tr>
             )}

          </tbody>

        </table>

      </div>
    );
  }
}

export default Customers;