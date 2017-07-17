import { fromJS } from 'immutable'
import * as ActionTypes from '../ActionTypes'

const initialState = fromJS({
	realname: null,
	mobile: null,
	idcard: null,
	sex: null
})

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case ActionTypes.RESET_ALL_STATE: {
		return initialState
	}
	default:
		return state
	}
}
