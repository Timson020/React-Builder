import Loadable from 'react-loadable'
import Loading from './Loading'

const routes = {
	Home: Loadable({ loader: () => import('./Home'), loading: Loading }),
	SignIn: Loadable({ loader: () => import('./SignIn'), loading: Loading }),
	NotFound: Loadable({ loader: () => import('./NotFound'), loading: Loading }),
}

export default routes
