import {GM,GN} from './message.action'
let initialstate={msg:"Hello"}
let messageReducer=(state=initialstate,action)=>{
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case 'GM':
            return{msg:"Hello, Good Morning "}
        case 'GN':
            return{msg:"Hello, Good Afternoon "}            
        default:
            return state;
    }
}
export{messageReducer}