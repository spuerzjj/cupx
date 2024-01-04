import {
	defineLocalStore,
	defineSessionStore,
	defineCookieStore
} from './index'

const useCountStoreLocal = defineLocalStore('testStore', {
	state: () => {
		return {
			count: 1,
			info: {
				num: 1
			}
		}
	},
	getters: {
		doubleCount: state => {
			return state.count * 2
		}
	},

	actions: {
		setCount(count) {
			// eslint-disable-next-line react/no-direct-mutation-state
			this.info.num = count + 1
			this.count = count
		}
	}
})

const useCountStoreSession = defineSessionStore('testStore', {
	state: () => {
		return {
			count: 1,
			info: {
				num: 1
			}
		}
	},
	getters: {
		doubleCount: state => {
			return state.count
		}
	},

	actions: {
		setCount(count) {
			// eslint-disable-next-line react/no-direct-mutation-state
			this.info.num = count + 1
			this.count = count
		}
	}
})

const useCountStoreCookie = defineCookieStore('testStore', {
	state: () => {
		return {
			count: 1,
			info: {
				num: 1
			}
		}
	},
	getters: {
		doubleCount: state => {
			return state.count * 2
		}
	},

	actions: {
		setCount(count) {
			// eslint-disable-next-line react/no-direct-mutation-state
			this.info.num = count + 1
			this.count = count
		}
	}
})

export { useCountStoreLocal, useCountStoreSession, useCountStoreCookie }
