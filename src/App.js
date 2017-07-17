import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Root } from '@/Components'

import { Redux } from '@/Config'

const history = syncHistoryWithStore(browserHistory, Redux)

export default class App extends Component {
	render() {
		return (
			<div id="App" className="App">
				<Root store={Redux} history={history}/>
			</div>
		)
	}
}
