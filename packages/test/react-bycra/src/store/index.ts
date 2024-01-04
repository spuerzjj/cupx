import { createCup } from 'cupx'
import {
	createLocalStoragePool,
	createCookiePool,
	createSessionStoragePool
} from 'cupx-local'

const defineMockStore = createCup({})

const defineLocalStore = createCup({
	pool: createLocalStoragePool({ useHistory: true })
})

const defineSessionStore = createCup({
	pool: createSessionStoragePool({ useHistory: true })
})

const defineCookieStore = createCup({
	pool: createCookiePool({ useHistory: true })
})

export {
	defineLocalStore,
	defineSessionStore,
	defineCookieStore,
	defineMockStore
}
