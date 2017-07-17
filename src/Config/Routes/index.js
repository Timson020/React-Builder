import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Home, SignIn, NotFoundPage } from '@/Routes'

export default (
	<Route path="/" component={Home}>
		<IndexRoute component={SignIn}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
)
