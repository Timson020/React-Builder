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
	default:
		return state
	}
}
