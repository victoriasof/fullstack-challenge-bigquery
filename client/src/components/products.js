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

  //examples for radio buttons: 
  //https://www.codegrepper.com/code-examples/javascript/event+handler+in+react+radio+button
  //https://www.codegrepper.com/code-examples/javascript/uncheck+to+find+value++radio+button+with+same+name+in+react

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({[name]: value});
  };

  render() {
    //console.log(this.state.products);

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
        
              {/* Warning: validateDOMNesting(...): <th> cannot appear as a child of <th> */}
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

                <td >
                  <div id="markdown">
                    <input type="radio" value="current" name="markdown" onChange={this.handleChange} /> Current
                  </div>
                  <div id="markdown">
                    {/* Warning: Failed prop type: You provided a checked prop to a form field without an onChange handler. This will render a read-only field. 
                    If the field should be mutable use defaultChecked. Otherwise, set either onChange or readOnly. */}
                    <input type="radio" value="optimal" name="markdown" defaultChecked onChange={this.handleChange} /> Optimal {product.optimal_markdown*100}%
                  </div>
                  <div id="markdown"> 
                    <input type="radio" value="custom" name="markdown" onChange={this.handleChange} /> Custom  
                    <input type="text" id="markdown" name="percent" /> %
                    {/* [DOM] Found 12 elements with non-unique id #markdown.
                    I used the id for styling in products.css*/}
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