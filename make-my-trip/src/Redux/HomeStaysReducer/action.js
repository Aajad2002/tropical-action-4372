import { GET_HOMESTAY_FAILURE, GET_HOMESTAY_REQUEST, GET_HOMESTAY_SUCCESS } from "./actionTypes"

import axios from "axios"
export const getHomeStayData =(paramsObj)=> (dispatch) => {
    dispatch({type: GET_HOMESTAY_REQUEST})
    axios
    .get("http://localhost:8080/homeStays",paramsObj)
    .then((res)=>{
        dispatch({type: GET_HOMESTAY_SUCCESS, payload: res.data})
    })
    .catch(()=>{
        dispatch({type: GET_HOMESTAY_FAILURE})
    })
}