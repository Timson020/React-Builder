import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import User from './user'

const Reducers = combineReducers({
	User,
	routing: routerReducer
})

export default Reducers
