import { State, GetterMap, Getter, ActionMap, StoreOption } from '../types'

export interface Pool<DPO> {
	[index: string]: any

	// defineStore: <
	// 	Id extends string,
	// 	S extends State,
	// 	GM extends GetterMap<Getter<S>>,
	// 	AM extends ActionMap
	// >(
	// 	id: Id,
	// 	option: StoreOption<S, GM, AM>
	// ) => any
	// getStore: (id: string) => any

	// 初始化
	init: <
		Id extends string,
		S extends State,
		GM extends GetterMap<Getter<S>>,
		AM extends ActionMap
	>(
		id: Id,
		option: StoreOption<S, GM, AM>
	) => any

	setState: (id: string, state: State) => void

	getState: (id: string) => State

	defaultPoolOption?: DPO
}

export type _Pool = Pool<any>
