import { combineReducers } from "redux"
import heart from "./heart"
import cart from "./cart"

const rootReducer = combineReducers({
    water: () => "Redux Water",
    heart,
    cart
})

export default rootReducer