import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, SignIn, NotFound } from '@/routes'

const list = [{
	exact: true,
	path: '/',
	component: Home,
}, {
	path: '/signin',
	component: SignIn,
}, {
	component: NotFound,
}]

export default class Routes extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Router>
				<Routers />
			</Router>
		)
	}
}

class Routers extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Switch>
				{list.map((it, i) => <Route key={i} {...it} />)}
			</Switch>
		)
	}
}
