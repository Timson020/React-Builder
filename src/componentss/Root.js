import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import { Routes } from '@/Config'

export default class Root extends Component {
	render() {
		let { store, history }= this.props
		return (
			<Provider store={store}>
				<Router history={history} routes={Routes}/>
			</Provider>
		)
	}
}
