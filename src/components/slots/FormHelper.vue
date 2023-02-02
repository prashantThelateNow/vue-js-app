<template>
	<div>
		<h4>Please fill out form below:</h4>
		<form name="example_form">
			<div class="form_header">
				<slot name="form-header"></slot>
			</div>
			<div class="form_fields">
				<slot name="form-fields"></slot>
			</div>
			<div class="form_controls">
				<slot name="form-controls"></slot>
			</div>
			<div class="useful_links">
				<ul>
					<li>
						<a href="#">Link 1</a>
					</li>
					<li>
						<a href="#">Link 2</a>
					</li>
					<li>
						<a href="#">Link 3</a>
					</li>
					<li>
						<a href="#">Link 4</a>
					</li>
				</ul>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'FormHelper',
	data: () => ({}),
};
</script>

<style scoped>
h1 {
	text-align: center;
}
form {
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
}
.useful-links ul {
	padding: 0;
}
.useful-links li {
	display: inline-block;
	margin-right: 10px;
}
form > div {
	padding: 20px;
	background: #eee;
	margin: 20px 0;
}
.form-header {
	background: #ddd;
	border: 1px solid #bbb;
}
</style>
