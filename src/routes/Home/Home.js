import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

import './Home.scss'

import { goNotFound, goSignIn } from './module'

class Home extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
		this._goSignIn = goSignIn.bind(this)
		this._goNotFound = goNotFound.bind(this)
	}

	render() {
		return (
			<div id="Home" className="flex Home">
				<input type="button" value="前往登录" onClick={this._goSignIn} />
				<input type="button" value="前往NotFound" onClick={this._goNotFound} />
			</div>
		)
	}
}

export default connect(state => ({
	user: state.User.toJSON(),
}))(Home)
