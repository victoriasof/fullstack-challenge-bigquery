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

          <tbody>

            {this.state.customers[0] && this.state.customers[0].map((customer, i)=> 

              <tr key = {i}> 
          
                <td>{customer.prod_code}</td>
                <td>{customer.category}</td>
                <td>{customer.inventory}</td>
                <td>{customer.rotation}</td>
                <td>{customer.lifetime}</td>
                <td>{customer.estimated_overstock}</td>
                <td>{customer.value_at_risk}</td>
                <td>{customer.current_price}</td>
                <td>{customer.optimal_markdown}</td>
                <td>{customer.attainable_increase_turnover}</td>
                <td>{customer.attainable_increase_markdown}</td>
        
              </tr>
             )}

          </tbody>

        </table>

      </div>
    );
  }
}

export default Customers;