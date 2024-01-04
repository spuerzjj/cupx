import { Pool, State } from 'cupx'
import { LocalOpt, Option } from '../types'
import { createPool, getKey } from '@/pool/base'

export function createSessionStoragePool(option: Option): Pool<Option> {
	const opt: LocalOpt = {
		set(id: string, state: State) {
			sessionStorage.setItem(getKey(id), JSON.stringify(state))
		},
		get(id: string) {
			const _stateStr = sessionStorage.getItem(getKey(id))
			return _stateStr ? JSON.parse(_stateStr) : null
		}
	}

	return createPool(option ? option.useHistory : false, opt)
}
