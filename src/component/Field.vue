<template>
	<div class="m-8">
		-> {{ meta }}
		<input class="border-2" v-model="msisdn" type="text" />
		<span class="text-red-400">{{ msisdnError }}</span>
	</div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';

// const isValidMsidn = (value: string) =>
// 	/^66[0-9]{9}/.test(value) || value === '' ? true : 'wrong format !!';

const validateSchema = {
	msisdn(value) {
		return /^66[0-9]{9}/.test(value) || value === '' ? true : 'wrong format !!';
	},
};

const { meta } = useForm({
	validationSchema: validateSchema,
});

const { value: msisdn, errorMessage: msisdnError } = useField('msisdn');
</script>
