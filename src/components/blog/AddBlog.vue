<template>
	<div id="add-blog">
		<h3>Add a New Blog Post</h3>
		<form v-if="!submitted">
			<v-container>
				<v-row>
					<v-col cols="12" sm="6" md="6">
						<v-text-field
							label="Blog Title"
							placeholder="Blog Title"
							outlined
							dense
							v-model.lazy="blog.title"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-select
							:items="authors"
							v-model="blog.author"
							label="Author"
							dense
							outlined
						></v-select>
					</v-col>
				</v-row>
			</v-container>
			<div id="checkboxes">
				<p>Blog Categories:</p>
				<v-checkbox
					v-model="blog.categories"
					input-value="react"
					value
					:label="'React'"
				></v-checkbox>
				<v-checkbox
					v-model="blog.categories"
					input-value="angular"
					value
					:label="'Angular'"
				></v-checkbox>
				<v-checkbox
					v-model="blog.categories"
					input-value="vuejs"
					value
					:label="'VueJS'"
				></v-checkbox>
				<v-checkbox
					v-model="blog.categories"
					input-value="nodejs"
					value
					:label="'NodeJS'"
				></v-checkbox>
				<label>Ninjas</label>
				<input
					type="checkbox"
					value="ninjas"
					v-model="blog.categories"
				/>
				<label>Wizards</label>
				<input
					type="checkbox"
					value="wizards"
					v-model="blog.categories"
				/>
				<label>Mario</label>
				<input
					type="checkbox"
					value="mario"
					v-model="blog.categories"
				/>
				<label>Cheese</label>
				<input
					type="checkbox"
					value="cheese"
					v-model="blog.categories"
				/>
			</div>
			<v-textarea
				label="Blog Content"
				placeholder="Blog Content"
				auto-grow
				outlined
				rows="3"
				row-height="15"
				v-model.lazy.trim="blog.content"
			></v-textarea>

			<div class="d-flex jusify-center">
				<v-btn
					class="ma-2"
					color="primary"
					@click.prevent="submitBlogPost"
				>
					Add Blog
				</v-btn>
			</div>
		</form>
		<hr />
		<div v-if="submitted">
			<h3>Thanks for adding your post</h3>
		</div>
		<div id="preview">
			<h3>Preview blog</h3>
			<p>Blog title: {{ blog.title }}</p>
			<p>Blog content:</p>
			<p style="white-space: pre">{{ blog.content }}</p>
			<p>Blog Categories:</p>
			<ul>
				<li v-for="(category, index) in blog.categories" :key="index">
					{{ category }}
				</li>
			</ul>
			<p>Author: {{ blog.author }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AddBlog',
	data() {
		return {
			blog: {
				title: '',
				content: '',
				categories: [],
				author: '',
			},
			authors: [
				'The Pockemon',
				'The Bal Hanuman',
				'The Onion rush',
				'The Moogly',
				'The Spiderman',
			],
			submitted: false,
		};
	},
	methods: {
		submitBlogPost() {
			this.$http
				.post('http://jsonplaceholder.typicode.com/posts', {
					title: this.blog.title,
					body: this.blog.content,
					userId: 1,
				})
				.then(function (data) {
					console.log(data);
					this.submitted = true;
				});
		},
	},
};
</script>

<style>
#add-blog {
	box-sizing: border-box;
	border: 1px solid;
	padding: 10px;
}
#add-blog {
	margin: 20px auto;
	max-width: 600px;
}
/* label {
	display: block;
	margin: 20px 0 10px;
}
input[type='text'], */
/* textarea {
	display: block;
	width: 100%;
	padding: 8px;
} */
#preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3 {
	margin-top: 10px;
}
/* #checkboxes input {
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label {
	display: inline-block;
	margin-top: 0;
} */
</style>
