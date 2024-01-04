export function isMatch(...args) {
	let argList = []
	const _fn = (...args) => {
		argList.concat(args)
		return _fn
	}

	_fn.prototype.run = function () {
		let pre = argList[0]

		argList.forEach(ele => {
			if (pre !== ele) {

                

				pre = ele
			}
		})

		return true
		// argList.reduce((pre, cur) => {
		// }, true)
	}
	_fn(...args)
}
