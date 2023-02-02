<template>
	<div>
		<header>
			<h3>{{ title }}</h3>
			<v-btn text small color="primary" @click="changeTitle">
				Click to change title
			</v-btn>
			<v-btn text small color="primary" @click="changeTitleText()">
				Click to change title using event emitter
			</v-btn>
		</header>
	</div>
</template>

<script>
import { EventBus } from '../../main';

export default {
	name: 'HeaderComponent',
	props: {
		title: {
			type: String,
		},
	},
	data: () => ({}),
	methods: {
		changeTitle() {
			// eslint-disable-next-line vue/no-mutating-props
			// this.title = 'Sample App';

			//Using Event Bus
			// eslint-disable-next-line vue/no-mutating-props
			this.title = 'Sample App';
			EventBus.$emit('changeTitleText', 'Sample App');
		},
		changeTitleText() {
			this.$emit('changeTitleText', 'Sample App'); //Using event emitter
		},
	},
	// Component lIfecycles
	// beforeCreate() {
	// 	alert('Before Component Registration');
	// },
	// created() {
	// 	alert('Component Registred');
	// },
	// beforeMount() {
	// 	alert('Before Component Mounted to DOM');
	// },
	// mounted() {
	// 	alert('Component Mounted to DOM');
	// },
	// beforeUpdate() {
	// 	alert('Before Changes occurs in Component');
	// },
	// updated() {
	// 	alert('Changes occurs & updated in Component');
	// },
	// beforeDestroy() {
	// 	alert('Before Component Leave');
	// },
	// destroyed() {
	// 	alert('Component Leave/Destroyed');
	// },
};
</script>

<style scoped>
header {
	background: lightgreen;
	padding: 10px;
}

h3 {
	color: #222;
	text-align: center;
}
</style>
