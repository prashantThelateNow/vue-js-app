<template>
	<div>
		<footer>
			<p>{{ footerText }} {{ title }}</p>
		</footer>
	</div>
</template>

<script>
import { EventBus } from '../../main';

export default {
	name: 'FooterComponent',
	props: {
		title: {
			type: String,
		},
	},
	data() {
		return {
			footerText: 'Copyright 2023',
		};
	},
	//Using EventBus
	created() {
		EventBus.$on('changeTitleText', (title) => {
			// eslint-disable-next-line vue/no-mutating-props
			this.title = title;
		});
	},
};
</script>

<style scoped>
footer {
	background: #222;
	padding: 6px;
	vertical-align: middle;
}

p {
	color: lightgreen;
	text-align: center;
}
</style>
