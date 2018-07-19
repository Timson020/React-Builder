import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './NotFound.scss'

export default class NotFound extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="NotFound" className="NotFound">NotFound</div>
		)
	}
}
