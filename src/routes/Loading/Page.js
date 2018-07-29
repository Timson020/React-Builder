import React, { Component } from 'react'
// import Proptypes from 'prop-types'

import './Loading.scss'

export default class Loading extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="Loading" className="flex Loading">Loading</div>
		)
	}
}
