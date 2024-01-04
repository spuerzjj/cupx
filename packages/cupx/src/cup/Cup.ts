import {
	Store,
	State,
	Getter,
	GetterMap,
	Action,
	ActionMap,
	StoreOption,
	StoreGeneric
} from '../types'

import { MockStoreInterface } from '../mockStore/MockStore'

import { _Pool } from '../pool'

export type CupOption = {
	maxLength?: number
	expireTime?: number
	pool?: _Pool
}

export class Cup {
	__mock__storage: { [index: string]: MockStoreInterface }
	pool: _Pool | undefined = undefined
	_s: { [index: string]: StoreGeneric }

	constructor(option: CupOption) {
		this.__mock__storage = {}
		this._s = {}
		this.pool = option.pool
	}

	hasPool(): boolean {
		return this.pool !== undefined
	}

	getPool(): _Pool | undefined {
		return this.pool
	}

	getMockStore(id: string): MockStoreInterface {
		return this.__mock__storage[id]
	}

	setMockStore<
		S extends State,
		GM extends GetterMap<Getter<S>>,
		AM extends ActionMap
	>(
		id: string,
		store: MockStoreInterface,
		option: StoreOption<S, GM, AM>
	): void {
		this.__mock__storage[id] = store
	}

	getStore(id: string): StoreGeneric {
		return this._s[id]
	}

	setStore(id: string, store: StoreGeneric): void {
		this._s[id] = store
	}
}
