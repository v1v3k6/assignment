import React from 'react';
const product_data = require('./products.json');
class App extends React.Component
{
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

  render() {
    return (
      <div className="App">
        <header id="hroot">Header</header>
        <div id="croot">
          <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <div id="content">
            {Object.keys(product_data.Brand).map(manufacturers => (
              <div id="product">
              <ul>
                <h1>{manufacturers}:</h1>
                {Object.keys(product_data.Brand[manufacturers]).map(specs => (
                  <div id={specs}>{this.parseData(product_data,manufacturers, specs)}</div>
                ))}
              </ul>
              <div><img id="Pics" src={product_data.Brand[manufacturers].Pics[0]} alt={manufacturers} /><img id="Pics" src={product_data.Brand[manufacturers].Pics[1]} alt={manufacturers} /></div><br />
              <center><button>Add to Cart</button></center><br />
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
