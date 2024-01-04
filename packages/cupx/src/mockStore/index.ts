import type {
	State,
	Getter,
	GetterMap,
	ActionMap,
	StoreOption,
	_Method
} from '../types'

import { MockStoreInterface } from './MockStore'
import MockStore from './MockStore'

// 创建内存级别的存储
export function createMockStore(
	id: string,
	option: StoreOption<State, GetterMap<Getter<State>>, ActionMap>
): MockStoreInterface {
	return new MockStore(id, option)
}
