import React from 'react';
const product_data = require('./products.json');
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      qty : 0
    };
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

  addToCart = (val) =>
  {
    // eslint-disable-next-line
    if(val != -1 || this.state.qty>0)
    {
      this.setState({
      qty: this.state.qty + val
    });
    }
    else
      alert("Cart is empty! Please add before removing...");
  }

  setHeader()
  {
    return(
      <div id="hinner">
        <div id="hleft">Shopping Site Dummy</div>
        <div id="hright">Cart: {this.state.qty}</div>
      </div>
    );
  }

  setFooter()
  {
    return(
      <div id="finner">
        <div id="address">Footer</div>
        <div id="support"></div>
      </div>
    );
  }

  loadContent()
  {
    return(
    <div id="content">
      {Object.keys(product_data.Brand).map(manufacturers => (
        <div id="product">
          <ul>
            <h1>{manufacturers}:</h1>
              {Object.keys(product_data.Brand[manufacturers]).map(specs => (
                <div id={specs}>{this.parseData(product_data,manufacturers, specs)}</div>
              ))}
          </ul>
          <div className="Pics"> <img className="Pics" alt={product_data.Brand[manufacturers].Pics[0]} src={product_data.Brand[manufacturers].Pics[0]} /></div>
          <div className="Pics"> <img className="Pics" alt={product_data.Brand[manufacturers].Pics[1]} src={product_data.Brand[manufacturers].Pics[1]} /></div>
          <center><button onClick={(param) => this.addToCart(1)}>Add to Cart</button><button onClick={(param) => this.addToCart(-1)}>Remove from Cart</button></center><br />
        </div>
        ))}
    </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header id="hroot">{this.setHeader()}</header>
        <div id="croot">{this.loadContent()}</div>
        <footer id="froot">{this.setFooter()}</footer>
      </div>
    );
  }
}
export default App;
