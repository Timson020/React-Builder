import React, { Component } from 'react'
import Proptypes from 'prop-types'

import './NotFoundPage.scss'

export default class NotFoundPage extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div id="NotFoundPage" className="NotFoundPage"></div>
		)
	}
}

NotFoundPage.propTypes = {}
