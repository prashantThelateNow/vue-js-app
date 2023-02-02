<template>
	<div>
		<add-blog></add-blog>
	</div>
</template>

<script>
import AddBlog from '../components/blog/AddBlog.vue';

export default {
	name: 'BlogView',
	components: {
		'add-blog': AddBlog,
	},
};
</script>

<style scoped></style>
