import React from 'react';
//import App from './App';
//import ReactDOM from 'react-dom';
class Forms extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {name: ''};
    this.getVal = this.getVal.bind(this);
    this.subVal = this.subVal.bind(this);
  }
  getVal(event)
  {
    this.setState({name: event.target.value});
    console.log("Event: " + event + "</br>Target: " + event.target + "</br>Value: " + event.target.value);
  }
  subVal(event)
  {
    alert("Hi "+this.state.name+"!");
    //ReactDOM.render(<App />, document.getElementById('root'));
    event.preventDefault();
  }
  render()
  {
    return(<pre align="center"><form>
        Full Name: <input type="text" value={this.state.value} onChange={this.getVal} /><br /><br />
        <button onClick={this.subVal}>Submit</button>
      </form></pre>
    );
  }
}
export default Forms;