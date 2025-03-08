import React, { Component } from 'react'
 class Listrendering extends Component {
    names=["Rohi","Bala","Nithin","Vamsi"]
  render() {
    return (
      <div>
        {
            this.names.map((name)=>(
                    <h1>{name}</h1>
            ))
        }
      </div>
    )
  }
}

export default Listrendering