import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '@/redux'
import Routes from  '@/router'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<article className="app flex">
					<Routes />
				</article>
			</Provider>
		)
	}
}
