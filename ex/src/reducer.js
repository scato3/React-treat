import { combineReducers } from "redux";

import addSubReducer from "./reducers/addsub";
import countingReducer from "./reducers/counting";

const rootReducer = combineReducers({
    value:addSubReducer,
    count:countingReducer
})

export default rootReducer