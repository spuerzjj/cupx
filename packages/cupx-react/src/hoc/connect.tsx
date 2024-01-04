import React, { useState, useEffect } from 'react'
import { ActionMap, Getter, GetterMap, State, Store } from 'cupx'

export const connect =
	<S extends State, GM extends GetterMap<Getter<S>>, AM extends ActionMap>(
		store: Store<S, GM, AM>
	) =>
	(Component: React.FC) => {
		return function ConnectComponent(props) {
			const [bool, setBool] = useState<boolean>(true)
			const forceUpdate = () => setBool(val => !val)

			// useEffect(() => {
			// 	forceUpdate()
			// }, [store.state])

			return <Component { ...props}  />
		}
	}
