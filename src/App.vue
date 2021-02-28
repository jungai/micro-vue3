<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ count }}</p>
		<button @click="increseCount">inc</button>
		<hr />
		<Count msg="hello" />
		<hr />
		<Field />
	</div>
</template>

<script setup lang="ts">
import './global.css';
import Count from '@/component/Count.vue';
import Field from '@/component/Field.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const count = ref<number>(0);

const message = t('msg');

const increseCount = () => count.value++;
</script>
