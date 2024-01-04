import { Pool, State } from 'cupx'
import type { Option, LocalOpt } from '../types'
import { createPool, getKey } from '@/pool/base'

export function createLocalStoragePool(option?: Option): Pool<Option> {
	// 这是底层对抽象的实现，如何实现，或者说实现后的格式，依赖于抽象的定义
	const opt: LocalOpt = {
		set(id: string, state: State) {
			localStorage.setItem(getKey(id), JSON.stringify(state))
            console.log('local', state)
		},
		get(id: string) {
			const _stateStr = localStorage.getItem(getKey(id))
			return _stateStr ? JSON.parse(_stateStr) : null
		}
	}

	// 这是使用端，使用上层时，把实现一并带入，依赖注入
	return createPool(option ? option.useHistory : false, opt)
}
