import { Iterable, fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

import reducers from './Reducers'

const logger = createLogger({
	stateTransformer: (state) => {
		let newState = {}
		for (let i of Object.keys(state)) {
			if (Iterable.isIterable(state[i])) {
				newState[i] = state[i].toJS()
			} else {
				newState[i] = state[i]
			}
		}
		return newState
	},
})

const immutableTransform = createTransform(
	// set
	state => Iterable.isIterable(state) ? state.toJS() : state,
	// get
	state => JSON.stringify(state) !== '{}' ? fromJS(state) : null
)

const middleware = [
	logger,
]

const persistReducerConfig = {
	key: 'React-Builder',
	storage,
	transforms: [immutableTransform],
	whitelist: ['User'],
}

const store = createStore(persistReducer(persistReducerConfig, reducers), applyMiddleware(...middleware))

export default store
