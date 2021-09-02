import React, { Component } from 'react';
import './products.css';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        //console.log(products);

        this.setState({products}, () => console.log('products fetched...', products))
      });
  }

  render() {
    console.log(this.state.products);

    return (
      <div>

        {/* <h2>products</h2>
        <ul>
        {this.state.products.map(product => 
          <li key={product.id}>{product.firstName} {product.lastName}</li>
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
            {this.state.products[0] && this.state.products[0].map((product, i)=> 

              <tr key = {i}> 
          
                <td>{product.prod_code}</td>
                <td>{product.category}</td>
                <td>{product.inventory}</td>
                <td>{product.rotation}</td>
                <td>{product.lifetime}</td>
                <td>{product.estimated_overstock}</td>
                <td>€ {product.value_at_risk.toLocaleString('en-US')}</td>
                <td>€ {product.current_price}</td>
                <td>Optimal {product.optimal_markdown*100}%</td>
                <td id="attainable-increase">€ {product.attainable_increase_turnover.toLocaleString('en-US')}</td>
                <td id="attainable-increase">€ {product.attainable_increase_markdown.toLocaleString('en-US')}</td>
        
              </tr>
             )}

          </tbody>

        </table>

      </div>
    );
  }
}

export default Products;