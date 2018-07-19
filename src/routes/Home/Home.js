import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './Home.scss'

import { click } from './module'

export default class Home extends Component {
	constructor(props){
		super(props)
		this.state = {}

		this._click = click.bind(this)
	}

	render() {
		return (
			<div id="Home" className="Home" onClick={this._click}>Home</div>
		)
	}
}
