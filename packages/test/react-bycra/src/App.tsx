import React, { useEffect, useRef, useState } from 'react'
import './App.css'

import {
	useCountStoreLocal,
	useCountStoreSession,
	useCountStoreCookie
} from './store/countStore'
import { connect } from 'cupx-react'

function App() {
	const [, setBool] = useState(false)
	const testStore1 = useRef(useCountStoreLocal())
	const testStore2 = useRef(useCountStoreSession())
	const testStore3 = useRef(useCountStoreCookie())

	const change1 = (num: number) => () => {
		testStore1.current.setCount(testStore1.current.count + num)
		setBool(pre => !pre)
	}

    const change2 = (num: number) => () => {
		testStore2.current.setCount(testStore2.current.count + num)
		setBool(pre => !pre)
	}

    const change3 = (num: number) => () => {
		testStore3.current.setCount(testStore3.current.count + num)
		setBool(pre => !pre)
	}

	return (
		<div className="App">
			<div>local</div>
			<div>{testStore1.current.count} </div>
			<div>{testStore1.current.doubleCount} </div>
			<button onClick={change1(1)}>add</button>
			<button onClick={change1(-1)}>minus</button>
            <div>session</div>
			<div>{testStore2.current.count} </div>
			<div>{testStore2.current.doubleCount} </div>
			<button onClick={change2(1)}>add</button>
			<button onClick={change2(-1)}>minus</button>
            <div>local</div>
			<div>{testStore3.current.count} </div>
			<div>{testStore3.current.doubleCount} </div>
			<button onClick={change3(1)}>add</button>
			<button onClick={change3(-1)}>minus</button>
		</div>
	)
}

// const countStore = U()

// function App(props: any) {
// 	const [, setBool] = useState(false)

// 	const add = () => {
// 		props.store.setCount(props.store.state.count + 1)
// 		setBool(pre => !pre)
// 	}

// 	return (
// 		<div className="App">
// 			<div>{props.store.state.count}</div>
// 			<div>{props.store.doubleCount}</div>
// 			<button onClick={add}>count +</button>
// 		</div>
// 	)
// }

// export default connect(countStore)(App)

export default App
