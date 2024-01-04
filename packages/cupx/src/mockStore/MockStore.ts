import type {
	State,
	Getter,
	GetterMap,
	ActionMap,
	StoreOption,
	Action,
	Store,
	StoreGeneric,
	StoreOptionGeneric,
	_Method
} from '../types'

import type { Cup } from '../cup/Cup'

// 用户层，传入option，生成
// mock层向下给pool提供数据
// mock层向上给用户提供对象
// 对外提供拓展mock的能力，只要暴露MockStoreInterface，外部实现这个接口就可以了
export interface MockStoreInterface {
	id: string

	[index: string]: any

	setState: (state: State) => void

	getState: () => State

	getGetters: (key: string) => Getter<any>

	getActions: (key: string) => Action
}

class MockStore implements MockStoreInterface {
	id
	private state
	private getters
	private actions

	constructor(
		id: string,
		option: StoreOption<State, GetterMap<Getter<State>>, ActionMap>
	) {
		this.id = id
		this.state = option.state() // 解出state的初始值
		this.getters = option.getters
		this.actions = option.actions
	}

	setState: (state: State) => void = state => {
		this.state = state
	}

	setStateByKey: (propKey: string, value: any) => void = (propKey, value) => {
		this.state[propKey] = value
	}

	getState: () => State = () => this.state

	getGetters: (key: string) => Getter<any> = key => {
		return this.getters[key]
	}

	getActions: (key: string) => Action = key => {
		return this.actions[key]
	}
}

export default MockStore
