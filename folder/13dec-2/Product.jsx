import React, { useState } from 'react'

const Product = () => {
  let [prod,setProduct]  = useState({ product_Name:"cycle",qty:1,price:4500 })

  return (
    <div>
    <h3>Product component</h3>
    <h4>Prdouct Name:{prod.product_Name}</h4>
    <h4>Prdouct Price:{prod.price}</h4>
    <button onClick={()=>{setProduct({...prod,qty:prod.qty-1})}}>Decr</button>
  {prod.qty}<button onClick={()=>{
    setProduct({...prod,qty:prod.qty+1})
  }}>INCR</button>
    </div>
  )
}

export default Product