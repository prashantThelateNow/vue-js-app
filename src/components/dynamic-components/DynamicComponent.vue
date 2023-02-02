<template>
	<div>
		<h3>Dynamic Components</h3>
		<keep-alive>
			<component :is="component"></component>
		</keep-alive>
		<v-btn
			class="ma-2"
			small
			outlined
			color="primary"
			@click="component = 'form-one'"
		>
			Show form one
		</v-btn>
		<v-btn
			class="ma-2"
			small
			outlined
			color="primary"
			@click="component = 'form-two'"
		>
			Show form two
		</v-btn>
	</div>
</template>

<script>
import FormOne from './FormOne.vue';
import FormTwo from './FormTwo.vue';

export default {
	name: 'DynamicComponent',
	components: {
		'form-one': FormOne,
		'form-two': FormTwo,
	},
	data: () => ({
		component: 'form-one',
	}),
};
</script>

<style scoped></style>
