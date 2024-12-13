import React from "react";
class Product extends React.Component {
    state = { qty: 1 }
    incrhandler = () => { this.setState({ qty: this.state.qty + 1 }) }
    decrhandler = () => { this.setState({ qty: this.state.qty - 1 }) }

    render() {
        return <div>
            <h3>Product Comp</h3>
            <h3>PRoduct Qty:{this.state.qty}</h3>
            <button onClick={this.decrhandler}>DECR</button>
            <button onClick={this.incrhandler}>INCR</button>
        </div>
    }


}
export default Product