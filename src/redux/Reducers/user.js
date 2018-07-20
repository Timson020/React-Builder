import { fromJS } from 'immutable'
import { ActionTypes } from '@/common'

const initialState = fromJS({
	realname: '',
	mobile: '',
	idcard: '',
	sex: '',
	description: '',
})

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case ActionTypes.RESET_ALL_STATE: {
		return initialState
	}
	case ActionTypes.MERGE_USER: {
		return state.merge(action.data)
	}
	default:
		return state
	}
}
