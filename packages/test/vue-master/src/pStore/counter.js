import { defineStore } from 'pinia'

const useStore = defineStore('counterStore', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => {
		return {
			// 所有这些属性都将自动推断其类型
			count: 0,
			obj: {
				count: 0
			},
			isAdmin: true
		}
	}
})

export { useStore }
