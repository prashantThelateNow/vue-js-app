import Vue from 'vue';
import VueRouter from 'vue-router';
import BasicConceptView from '../views/BasicConceptView.vue';
import BlogView from '../views/BlogView';
import ComponentNestingView from '../views/ComponentNestingView.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/basic-learning',
		name: 'basic learnings',
		component: BasicConceptView,
	},
	{
		path: '/component-nesting',
		name: 'component nesting',
		component: ComponentNestingView,
	},
	{
		path: '/blog',
		name: 'blog',
		component: BlogView,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
