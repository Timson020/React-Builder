import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

import './NotFound.scss'

class NotFound extends Component {
	static propTypes = {}

	constructor(props){
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="NotFound" className="flex NotFound">NotFound</div>
		)
	}
}

export default connect(state => ({
	user: state.User.toJSON(),
}))(NotFound)

