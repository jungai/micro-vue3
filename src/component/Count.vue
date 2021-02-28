<template>
	<div>
		<p>Count Component</p>
		<p @click="$emit('click')">this is props -> {{ msg }}</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue';

interface Props {
	msg?: string;
}

const props = defineProps({
	msg: {
		type: String,
		default: 'IU ❤️',
	},
});

// decare for validator
// refs https://v3.vuejs.org/guide/migration/emits-option.html#migration-strategy
const emitClick = defineEmit(['click']);
</script>
