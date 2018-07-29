import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

import './Page.scss'

class SignIn extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		const { location } = this.props
		console.info(location)
		return (
			<div id="SignIn" className="flex SignIn">SignIn</div>
		)
	}
}

export default connect(state => ({
	user: state.User.toJSON(),
}))(SignIn)
