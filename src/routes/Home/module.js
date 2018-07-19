import { Services, Utils, Validations, Constants, ActionTypes } from '@/common'

export function click() {
	const { history } = this.props
	history.push('/signin', {})
}
