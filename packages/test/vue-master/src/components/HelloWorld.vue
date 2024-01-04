<template>
	<div class="hello">
		{{ countStore.count }}
		{{ countStore.doubleCount }}
		{{ countStore.obj.count }}
		<button @click="add">count ++</button>
		<div style="margin-top: 50px"></div>
		pinia: {{ ps.count }}
		<button @click="addP">count ++</button>
	</div>
</template>

<script setup>
// import { reactive } from 'vue'

import { useStore } from '@/pStore/counter'
const ps = useStore()

import { useCountStore } from '@/cStore/counter'

const countStore = useCountStore()

console.log(countStore)

const add = () => {
	// countStore.count++
	countStore.count++
	// countStore.setCount(countStore.count + 1)
}

const addP = () => {
	ps.count++
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
