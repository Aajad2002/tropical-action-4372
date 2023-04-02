import { GET_HOMESTAY_FAILURE, GET_HOMESTAY_REQUEST, GET_HOMESTAY_SUCCESS } from "./actionTypes"

import axios from "axios"
export const getHomeStayData =(paramsObj)=> (dispatch) => {
    dispatch({type: GET_HOMESTAY_REQUEST})
    axios
    .get("https://makethejourneyhard.cyclic.app/homeStays",paramsObj)
    .then((res)=>{
        dispatch({type: GET_HOMESTAY_SUCCESS, payload: res.data})
    })
    .catch(()=>{
        dispatch({type: GET_HOMESTAY_FAILURE})
    })
}

export const deleteHomstayData=(id)=>{
    return axios.delete(`https://makethejourneyhard.cyclic.app/homeStays/${id}`)
}
export const patchHomstayData=(id,obj)=>{
    return axios.patch(`https://makethejourneyhard.cyclic.app/homeStays/${id}`,obj)
}
export const postHomeStayData=(obj)=>{
    return axios.post(`https://makethejourneyhard.cyclic.app/homeStays`,obj)
}