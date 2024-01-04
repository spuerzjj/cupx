// import { State, Getter, Action, GetterMap, ActionMap, StoreOption } from "cupx";

// import { useState } from "react";

// function defineStore<
// 	Id extends string,
// 	S extends State,
// 	GM extends GetterMap<Getter<S>>,
// 	AM extends ActionMap,
// >(id: Id, option: StoreOption<S, GM, AM>) {
// 	const us = d(id, option);
// 	return () => {
// 		const [, setB] = useState(false);
// 		const a = us();

// 		const _action_keys = Object.keys(option.actions);

// 		return new Proxy(a, {
// 			get(target, propKey, receiver) {
// 				// action 触发setState
// 				if (_action_keys.includes(propKey as string)) {
// 					return (...args: any[]) => {
// 						setB((pre) => !pre);
// 						Reflect.get(target, propKey, receiver).apply(target, args);
// 					};
// 				}
// 				return Reflect.get(target, propKey, receiver);
// 			},
// 		});
// 	};
// }

const a = 1
export { a }
