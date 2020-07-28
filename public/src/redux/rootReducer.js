import { combineReducers } from 'redux'
//All reducers
import videoReducer from './reducers/videoReducer'
import userReducer from './reducers/userReducer'
import currentVideoState from './reducers/currentVideoReducer'
import favReducer from './reducers/favReducer'
import myReducer from './reducers/myReducer'

const rootReducer = combineReducers({
    videoState: videoReducer,
    userState: userReducer,
    currentVideoState: currentVideoState,
    favState:favReducer,
    myState:myReducer
})

export default rootReducer;