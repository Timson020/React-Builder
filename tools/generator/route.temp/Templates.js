import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './Templates.scss'

export default class Templates extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div id="Templates" className="Templates"></div>
		)
	}
}

Templates.propTypes = {}
