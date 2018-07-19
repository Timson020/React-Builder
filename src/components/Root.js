import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Router from '@/router'

export default class Root extends Component {
	render() {
		let { store } = this.props
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}
