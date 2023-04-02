import { GET_REQ_SUCCESS, REQUEST, REQ_FAILD } from "./actionTypes";

const initialState = {
    isLoading:false,
    isError:false,
    airports:[]
};

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case REQUEST:{
            return ({...state,isLoading:true})
        }
        case GET_REQ_SUCCESS:{
            return ({...state,isLoading:false,isError:false,airports:payload})
        }
        case REQ_FAILD:{
            return ({...state,isLoading:false,isError:true})
        }

        default:return state;
    }
}

const initialDate={
    date:{}
}
// export const getDate=(obj)=>{
//    return  dispatch({type:GET_DATE,payload:obj})
// }
// const GET_DATE="GET_DATE"
//  export const dateReducer=(state=initialDate,{type,payload})=>{
//     switch(type){
//         case GET_DATE:{
//             return {...state,date:payload}
//         }
//         default:{
//             return state
//         }
//     }
// }