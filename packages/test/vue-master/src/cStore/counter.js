import { createCup } from 'cupx'
const defineMockStore = createCup({})
// import { reactive, ref } from 'vue'

export const useCountStore = defineMockStore('testStore', {
	state: () => {
		return {
			count: 1,
			obj: { count: 1 }
		}
	},

	getters: {
		doubleCount: state => {
			return state.count * 2
		}
	},

	actions: {
		setCount(count) {
			this.count = count
			// if (this.doubleCount > 5) {
			// 	this.resetCount()
			// }
		},
		resetCount() {
			this.count = 1
		}
	}
})
