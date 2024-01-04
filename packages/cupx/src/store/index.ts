import type { State, StoreGeneric, StoreOptionGeneric, _Method } from '../types'

import type { Cup } from '../cup/Cup'

export function createStore(
	id: string,
	option: StoreOptionGeneric,
	cup: Cup
): StoreGeneric {
	const in_action: number = 0
	const mockStore = cup.getMockStore(id)
	const _state_keys = Object.keys(mockStore.getState())
	const _getter_keys = Object.keys(option.getters)
	const _action_keys = Object.keys(option.actions)

	// 初始化插件
	cup.hasPool() && cup.getPool()?.init(id, option)

	// 设置插件数据
	const setPoolState = (state: State) => {
		cup.getPool()?.setState(id, state)
	}

	// 获取state
	const getState = () => {
		// has pool
		// 从pool中取state
		// 不用对齐mock，因为没必要
		// 无pool，直接取mock
		const _state = cup.hasPool()
			? cup.getPool()!.getState(id)
			: mockStore.getState()

		return _state
	}

	const store = new Proxy({} as StoreGeneric, {
		get(target, propKey, receiver) {
			const _state = getState()

			// get state
			if (_state_keys.includes(propKey as string)) {
				// return _state[propKey]
				// 返回被监听的state
				return ob(_state[propKey], setPoolState, _state)
			}

			// get getter
			if (_getter_keys.includes(propKey as string)) {
				return mockStore.getGetters(propKey as string).call(receiver, _state)
			}

			// get action
			if (_action_keys.includes(propKey as string)) {
				return (...args: any[]) => {
					mockStore.getActions(propKey as string).apply(receiver, args)
				}
			}

			// 兜个底
			return mockStore[propKey as string]
		},
		set(target, propKey, value, receiver) {
			// set state
			if (_state_keys.includes(propKey as string)) {
				const _state = getState()
				_state[propKey] = value
				setPoolState(_state)
				return true
			}
			// 兜底
			return Reflect.set(target, propKey, value, receiver)
		}
	})

	store._c = cup

	store._o = option

	cup.setStore(id, store)

	return store
}

// state对象里层的数据返回
function ob(obj: any, cb: _Method, state: State): any {
	if (isPlainObject(obj)) {
		return new Proxy(obj, {
			get(target, propKey, value) {
				const val = Reflect.get(target, propKey, value)
				return ob(val, cb, state)
			},
			set(target, propKey, value, receiver) {
				// 这里target已经拿到state对象的成员了，直接操作即可
				const result = Reflect.set(target, propKey, value, receiver)
				result && cb.call(this, state)
				return result
			}
		})
	} else {
		return obj
	}
}

function isPlainObject(o: any): boolean {
	return (
		o &&
		typeof o === 'object' &&
		Object.prototype.toString.call(o) === '[object Object]' &&
		typeof o.toJSON !== 'function'
	)
}
