import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

import createTODO from "./createTODO"

export default combineReducers({
    createTODO,
    form: formReducer
})