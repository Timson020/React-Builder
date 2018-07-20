import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition'

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

list.forEach((it, i) => {
	it.atEnter = { opacity: 0, translateX: -100 }
	it.atLeave = { opacity: 0, translateX: -100 }
	it.atActive = { opacity: 1, translateX: 0 }
})

export default class Routes extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		// <AnimatedSwitch atEnter={{ opacity: 0, translateX: -100 }} atLeave={{ opacity: 0, translateX: 100 }} atActive={{ opacity: 1, translateX: 0 }} className="transfrom-container">
		// </AnimatedSwitch>
		return (
			<Router basename="/" forceRefresh={false}>
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
				{list.map((it, i) => <AnimatedRoute className="transfrom-container" key={i} mapStyles={this._mapStyles} {...it} />)}
			</Switch>
		)
	}

	_mapStyles(styles) {
		console.info(styles)
		return {
			transform: `translateX(${styles.translateX})`,
		}
	}
}
