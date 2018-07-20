import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, SignIn, NotFound } from '@/routes'

const list = [{
	exact: true,
	path: '/',
	component: Home,
}, {
	exact: true,
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
			<Router basename="/">
				<Route path="/" render={({ location }) => <Routers location={location} /> } />
			</Router>
		)
	}
}

class Routers extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { location } = this.props
		return (
			<TransitionGroup style={{ width: '100%', height: '100%' }}>
				<CSSTransition key={location.key} classNames="router" timeout={800}>
					<Switch location={location}>
						{list.map((it, i) => <Route key={i} {...it} />)}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		)
	}
}
