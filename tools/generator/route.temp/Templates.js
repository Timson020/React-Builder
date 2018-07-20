import React, { Component } from 'react'
import { connect } from 'react-redux'
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
			<div id="Templates" className="flex Templates">Templates</div>
		)
	}
}

export default connect(state => ({
	user: state.User.toJSON(),
}))(Templates)
