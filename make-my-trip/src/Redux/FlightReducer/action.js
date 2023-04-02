import { GET_REQ_SUCCESS, REQUEST, REQ_FAILD } from "./actionTypes"
import axios from "axios"
const url='https://makethejourneyhard.cyclic.app/airports'
export const getData=(params)=>(dispatch)=>{
    dispatch({type:REQUEST})
    axios.get(url,params)
    .then(res=>dispatch({type:GET_REQ_SUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:REQ_FAILD}))
}