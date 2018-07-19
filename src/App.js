import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// import { Root } from '@/Components'

import { redux } from '@/config'
console.info(redux)

// const history = syncHistoryWithStore(browserHistory, Redux)

export default class App extends Component {
	render() {
		return (
			<article className="app-container">

			</article>
		)
	}
}
