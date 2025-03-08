import React, { Component } from 'react'
 class Listrendering extends Component {
    names=["Rohi","Bala","Nithin","Vamsi"]
    nameslist=this.names.map((name)=>(<h1>{name}</h1>))
  render() {
    return (
      <div>{this.nameslist}
      </div>
    )
  }
}

export default Listrendering