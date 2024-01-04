import { Pool, State } from 'cupx'
import { LocalOpt, Option } from '../types'
import { createPool, getKey } from '@/pool/base'
import Cookies from 'js-cookie'

export function createCookiePool(option?: Option): Pool<Option> {
	const opt: LocalOpt = {
		set(id: string, state: State) {
			Cookies.set(getKey(id), JSON.stringify(state))
		},
		get(id: string) {
			const _stateStr = Cookies.get(id)
			return _stateStr ? JSON.parse(_stateStr) : null
		}
	}

	return createPool(option ? option.useHistory : false, opt)
}
