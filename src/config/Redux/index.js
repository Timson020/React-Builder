import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate, createTransform } from 'redux-persist'
import { Iterable, fromJS } from 'immutable'
import Reducers from './Reducers'

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

const middleware = [
	thunk,
	logger,
]

const Store = compose(
	applyMiddleware(...middleware),
	autoRehydrate()
)(createStore)(Reducers)

const immutableTransform = createTransform(
	state => Iterable.isIterable(state) ? state.toJS() : state,
	state => JSON.stringify(state) !== '{}' ? fromJS(state) : null
)

persistStore(Store, {
	transforms: [
		immutableTransform,
	],
	whitelist: [
		'User'
	],
})

export default Store
