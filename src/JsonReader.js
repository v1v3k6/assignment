import React from 'react';
var data;
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "data.json", true);
oReq.send();

function reqListener(e) {
    data = JSON.parse(this.responseText);
    console.log(data);
}
console.log(data);

var List = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};    
  },
  render: function() {
    var listItems = this.state.data.map(function(item) {
        var eachItem = item.works.work;        

        var photo = eachItem.map(function(url) {
            return (
                <td>{url.urls}</td> 
            )
        });
    });
    return <ul>{listItems}</ul>
  }
});

var redBubble = React.createClass({
    render: function() {
      return (
        <div>
          <List data={data}/>          
        </div>
      );
    }
  });

module.exports = redBubble;