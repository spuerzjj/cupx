import { Pool } from './pool'

/**
 * Generic type for a function that can infer arguments and return type
 *
 * For internal use **only**
 */
export type _Method = (...args: any[]) => any

// 最小的数据单元
declare type State = { [index: string | symbol | number]: any }

// 计算属性函数签名
declare type Getter<S extends State> = (state: S) => any
declare type GetterMap<G extends Getter<any>> = Record<string, G>

// 操作state的函数签名
declare type Action = (...args: any[]) => any
declare type ActionMap = Record<string, Action>

// useStore返回签名
declare type Store<
	S extends State,
	GM extends GetterMap<Getter<S>>,
	AM extends ActionMap
> = { id: string } & S & _StoreWithGetters<GM> & AM

// Store通用签名
declare type StoreGeneric = Store<State, GetterMap<Getter<State>>, ActionMap>

// defineStore第二个参数签名
declare interface StoreOption<
	S extends State,
	GM extends GetterMap<Getter<S>>,
	AM extends ActionMap
> {
	state: () => S
	getters: GM
	actions: AM & ThisType<Store<S, GM, AM>>
}

declare type StoreOptionGeneric = StoreOption<
	State,
	GetterMap<Getter<State>>,
	ActionMap
>

// 插件的格式
// declare interface Pool<DPO> {
// 	[index: string]: any

// 	defineStore: <
// 		Id extends string,
// 		S extends State,
// 		GM extends GetterMap<Getter<S>>,
// 		AM extends ActionMap
// 	>(
// 		id: Id,
// 		option: StoreOption<S, GM, AM>
// 	) => any
// 	getStore: (id: string) => any

// 	defaultPoolOption?: DPO
// }

// createCup参数
export declare type CupOption<DPO> = {
	pool?: Pool<DPO>
}

// createCup函数签名   createCup => defineStore => useStore 用户使用的主流程
export type CreateCup = <DPO>(options: CupOption<DPO>) => <
	Id extends string,
	S extends State,
	GM extends GetterMap<Getter<S>>,
	AM extends ActionMap
>(
	id: Id,
	// option: StoreOption<S, GM, AM> & DPO,
	option: StoreOption<S, GM, AM>
) => StoreDefinition<S, GM, AM>

/**
 * Return type of `defineStore()`. Function that allows instantiating a store.
 */
export interface StoreDefinition<
	S extends State,
	GM extends GetterMap<Getter<S>>,
	AM extends ActionMap
> {
	(): Store<S, GM, AM>
}

export declare type _StoreWithGetters<GM> = {
	readonly [k in keyof GM]: GM[k] extends (...args: any[]) => infer R ? R : any
}

export type {
	State,
	Getter,
	GetterMap,
	Action,
	ActionMap,
	StoreOption,
	Store,
	Pool,
	StoreGeneric,
	StoreOptionGeneric
}
