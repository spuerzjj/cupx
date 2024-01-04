import { Pool, State } from 'cupx'
import { LocalOpt } from '../types'

export function getKey(id: string) {
	return id
}

//  因为loacl存不了函数，所以只用来存state，getter和action还是在内存里
export function createPool(useHistory: boolean, opt: LocalOpt): Pool<any> {
	return {
		init: (id, option) => {
			if (useHistory && opt.get(id)) {
				// console.log('跳过初始化state')
			} else {
				opt.set(id, option.state())
			}
		},
		getState(id: string) {
			return opt.get(id)
		},
		setState(id, state) {
			opt.set(id, state)
		}
	}
}

// 给opt套一层，来捕获异常
function wrap() {}
