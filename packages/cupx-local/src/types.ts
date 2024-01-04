import { State } from 'cupx'

// cookie , localstoreage , session storage的抽象
// 上层调用者依赖抽象，不依赖具体实现
declare interface LocalOpt {
	set: (id: string, state: State) => void
	get: (id: string) => State
}

declare type Option = {
	useHistory: boolean
}

export type { LocalOpt, Option }
