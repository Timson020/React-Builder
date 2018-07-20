import { Services, Utils, Validations, Constants, ActionTypes } from '@/common'

export function goNotFound() {
	const { history } = this.props
	history.push('/xxxx')
}

export function goSignIn() {
	const { history, dispatch } = this.props
	dispatch({ type: ActionTypes.MERGE_USER, data: { realname: 'timson' } })
	history.push('/signin')
}
