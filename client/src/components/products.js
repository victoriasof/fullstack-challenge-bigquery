import React, { Component } from 'react';
import './products.css';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      markdown:'optimal'
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

//example for radio buttons (still not perfect): 
//https://www.positronx.io/react-radio-button-tutorial-with-example/

  onRadioChange = (e) => {

    this.setState({
      markdown: e.target.value
    });
  }

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

                <td> 
                  <div id="markdown"> 
                    <input type="radio" value="current" checked={this.state.markdown === "current"} onChange={this.onRadioChange} /> Current
                    {/* removed name="markdown"  */}
                  </div>
                  <div id="markdown"> 
                    {/* Warning: Failed prop type: You provided a checked prop to a form field without an onChange handler. This will render a read-only field. 
                    If the field should be mutable use defaultChecked. Otherwise, set either onChange or readOnly. */}
                    {/* https://stackoverflow.com/questions/36715901/reactjs-error-warning/36716016 */}
                    <input type="radio" value="optimal" checked={this.state.markdown === "optimal"} onChange={this.onRadioChange}/> Optimal {product.optimal_markdown*100}%
                  </div>
                  <div id="markdown"> 
                    <input type="radio" value="custom" checked={this.state.markdown === "custom"} onChange={this.onRadioChange} /> Custom  
                    <input type="text" id="markdown" name="percent" /> %
                    {/* [DOM] Found 12 elements with non-unique id #markdown. (I used the id for styling in products.css) */}
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