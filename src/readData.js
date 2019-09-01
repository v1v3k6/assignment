import React from 'react';
function readData(jsonData)
{
  var ret;
  for(let data in jsonData)
  {
    if(typeof(jsonData[data])=="object")
    {
      ret+=<div><br />{data}: {readData(jsonData[data])}</div>;
      document.write("<br />"+data);
    }
    else
        ret+=<div><br />{jsonData[data]}</div>;
    if(typeof(jsonData[data])!="object")
      document.write("<br />"+data+" : "+jsonData[data]);
  }
  document.write("<br />");
  return ret;
}
export default readData;