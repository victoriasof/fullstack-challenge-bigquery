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
        
              <th colSpan="2">Attainable increase
                  <th> TURNOVER</th>
                  <th> MARGIN</th>
              </th>
                   
            </tr>
          </thead>

          <tbody>

            {/* was trying to map in empty array ...added condition:  */}

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

                <td id="markdown">
                  <div id="markdown">
                    <input type="radio" value="current" /> Current
                  </div>
                  <div id="markdown">
                    <input type="radio" value="optimal" checked="{{ isChecked }}"/> Optimal {product.optimal_markdown*100}%
                  </div>
                  <div id="markdown"> 
                    <input type="radio" value="custom"  /> Custom  
                    <input type="text" id="markdown" name="percent" /> %
                  </div> 
                </td>

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