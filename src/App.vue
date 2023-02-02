<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
				<nav>
					<router-link to="/">Home</router-link> |
					<router-link to="/about">About</router-link> |
					<router-link to="/basic-learning"
						>Basic Concepts</router-link
					>
					|
					<router-link to="/component-nesting"
						>Component Nesting</router-link
					>
					|
					<router-link to="/blog">Sample Blog Post</router-link>
				</nav>
			</div>

			<v-spacer></v-spacer>

			<!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="n in 2" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		//
	}),
};
</script>

<style scoped>
nav {
	padding: 30px;
}

nav a {
	color: white;
	text-decoration: none;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
