import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import {reducer as flightReducer} from flightreducer
// import {reducer as HotelReducer} from hotel wala reducer loaction
// import {reducer as HomeStaysReducer} from homestays file reducer
import { homeStaysReducer } from "./HomeStaysReducer/reducer";
const allReducer=combineReducers({
    homeStaysReducer
})

export const store=legacy_createStore(allReducer,applyMiddleware(thunk))