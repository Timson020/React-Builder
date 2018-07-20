import { Services, Utils, Validations, Constants, ActionTypes } from '@/common'

export function goNotFound() {
	const { history } = this.props
	history.push('/xxxx', {})
}

export function goSignIn() {
	const { history } = this.props
	history.push('/signin', { data: '自定义数据' })
}
