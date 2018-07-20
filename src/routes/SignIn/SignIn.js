import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

import './SignIn.scss'

class SignIn extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
		console.info(this.props.location.state)
	}

	render() {
		return (
			<div id="SignIn" className="flex SignIn">SignIn</div>
		)
	}
}

export default connect(state => ({
	user: state.User.toJSON(),
}))(SignIn)
