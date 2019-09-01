import React from 'react';
const product_data = require('./products.json');
class ReadData extends React.Component
{
  readData(jsonData)
  {
    var ret="";
    for(let data in jsonData)
    {
      if(typeof(jsonData[data])=="object")
        ret+="<div>"+this.readData(jsonData[data])+"<div>";
      if(typeof(jsonData[data])!="object" && data!="Brand" && data!="0" && data!="1")
        ret+="<div id='devicePane'>" + data + " => " + jsonData[data]+"</div>";
      if(data=="Camera")
      ret+="<br />";
    }
    return "<div>"+ret+"</div>";
  }
  render()
  {
    document.getElementById('content').innerHTML = this.readData(product_data);
    return(
      <div></div>
    );
  }
}
export default ReadData;