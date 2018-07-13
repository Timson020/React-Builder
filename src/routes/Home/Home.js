import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './Home.scss'

export default class Home extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div id="Home" className="Home">
				{this.props.children}
			</div>
		)
	}
}

Home.propTypes = {}
