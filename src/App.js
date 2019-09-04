import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
const product_data = require('./products.json');
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      qty : 0
    };
    this.AddToCart=this.AddToCart.bind(this);
  }
  parseData(jsonObj,manufacturers,specs)
  {
    switch(specs)
    {
      case "Model":
          return (<li key={specs}>{specs} : {jsonObj.Brand[manufacturers].Model}</li>);
      case "Year":
          return (<li key={specs}>{specs} : {jsonObj.Brand[manufacturers].Year}</li>);
      case "Specifications":
          return (<ul><h4>{specs} :</h4> {Object.keys(jsonObj.Brand[manufacturers].Specifications).map(intspecs => (
            <li key={intspecs} id={intspecs}>{intspecs} : {jsonObj.Brand[manufacturers].Specifications[intspecs]}</li>
            ))}</ul>);
        case "Price":
          return(<li key={specs}>{specs}: {jsonObj.Brand[manufacturers].Price}</li>);
      default:
        return;
    }
  }

  AddToCart()
  {
    this.setState({
      qty: this.state.qty + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header id="hroot">
            <div id="hinner">
                <div id="hleft">Shopping Site Dummy</div>
                <div id="hright">Cart: {this.state.qty}</div>
            </div>
        </header>
        <div id="croot">
          <div id="content">
            {Object.keys(product_data.Brand).map(manufacturers => (
              <div id="product">
              <ul>
                <h1>{manufacturers}:</h1>
                {Object.keys(product_data.Brand[manufacturers]).map(specs => (
                  <div id={specs}>{this.parseData(product_data,manufacturers, specs)}</div>
                ))}
              </ul>
              <div><img height="500px" width="450px" id="Pics" src={product_data.Brand[manufacturers].Pics[0]} alt={manufacturers} /><img height="500px" width="450px" id="Pics" src={product_data.Brand[manufacturers].Pics[1]} alt={manufacturers} /></div><br />
              <center><button onClick={this.AddToCart}>Add to Cart</button></center><br />
              </div>
            ))}
          </div>
        </div>
        <footer id="froot">Footer</footer>
      </div>
    );
  }
}
export default App;
