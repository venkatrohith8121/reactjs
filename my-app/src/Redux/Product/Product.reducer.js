import { INCR,DECR } from "./Product.action";
let initilState={
    product_NAme:"Marker pen",
    price:30,
    qty:1,
    image:""
}
let productReducer=(state=initilState,action)=>{
    switch (action.type) {
        case 'INCR':
            
            return {}
        case 'DECR':
            
            return {}
    
        default:
            return state
    }
}
export {productReducer}