// 数字校验
export function number(num = '', max, min = 1) {
	if (new RegExp(`^\\d{${min},${max}}$`).test(num)) return true
	return false
}

// 手机号码校验
export function phone(phone = '') {
	if (/^[1][3578][0-9]{9}$/ig.test(phone)) return true
	return false
}
