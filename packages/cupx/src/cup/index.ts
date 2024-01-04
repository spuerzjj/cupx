import { Cup, CupOption } from './Cup'
import {
	ActionMap,
	CreateCup,
	Getter,
	GetterMap,
	State,
	Store,
	StoreGeneric,
	StoreOptionGeneric
} from '../types'

import { createStore } from '../store'
import { createMockStore } from '../mockStore'

// export function createCup(options: CupOption): void {
// 	_cup = new Cup(options)
// }

// export function useCup(): Cup {
// 	if (_cup) return _cup
// 	throw new Error('please run fucntion createCup before use hook useCup')
// }

export const createCup: CreateCup = options => {
	// 1. 创建Cup实例
	const _cup = new Cup(options)

	return function defineStore(id, option) {
		// state默认初始值
		const _mock_store = createMockStore(id, option as any)
		// 初始化store
		_cup.setMockStore(id, _mock_store, option)
		return function useStore() {
			const store = _cup.getStore(id) as any
			return store
				? store
				: createStore(id, option as unknown as StoreOptionGeneric, _cup)
		}
	}
}
