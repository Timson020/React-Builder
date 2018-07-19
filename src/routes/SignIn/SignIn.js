import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './SignIn.scss'

export default class SignIn extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="SignIn" className="SignIn">SignIn</div>
		)
	}
}
