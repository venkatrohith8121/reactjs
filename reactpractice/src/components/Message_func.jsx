import React from "react";
function Message_func (){
  let eid=101
  let ename="Rohi"
  let loc=["Wayanad","New Delhi"]
  let details={
    sal:45000,
    avail:true 
  }
        return <div>
            <h2>Message component</h2>
            <h3>employee id :{eid}</h3>
            <h3>employee name :{ename}</h3>
            <h3>employee location :{loc}</h3>
            <h3>employee details:{JSON.stringify(details)}</h3>
        </div>
    
}
export default Message_func