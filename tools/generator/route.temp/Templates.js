import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './Templates.scss'

export default class Templates extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="Templates" className="Templates">Templates</div>
		)
	}
}
