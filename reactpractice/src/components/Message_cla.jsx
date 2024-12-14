import React from "react";
class Message_cla extends React.Component{
    eid = 101
    ename = "Rohi"
    loc = ["Wayanad", "New Delhi"]
    details = {
        sal: 45000,
        avail: true
    }
    render() {
        return <div>
            <h2>Message component</h2>
            <h3>employee id :{this.eid}</h3>
            <h3>employee name :{this.ename}</h3>
            <h3>employee location :{this.loc}</h3>
            <h3>employee details:{JSON.stringify(this.details)}</h3>
        </div>
    }
}

export default Message_cla