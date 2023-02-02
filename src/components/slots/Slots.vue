<template>
	<div>
		<h3>Stots Example</h3>
		<form-helper>
			<div slot="form-header">
				<h5>Form Title</h5>
				<p>Form Informations</p>
			</div>
			<div slot="form-fields">
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								label="User name"
								placeholder="User name"
								outlined
								dense
								v-model="user.name"
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								label="Password"
								placeholder="Password"
								outlined
								dense
								v-model="user.password"
							></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</div>
			<div slot="form-controls">
				<v-btn
					class="ma-2"
					small
					outlined
					color="primary"
					@click="handleSubmit"
				>
					Submit
				</v-btn>
			</div>
		</form-helper>
	</div>
</template>

<script>
import FormHelper from './FormHelper.vue';

export default {
	name: 'StotComponent',
	components: {
		'form-helper': FormHelper,
	},
	data: () => ({
		user: {
			name: '',
			password: '',
		},
	}),
	methods: {
		handleSubmit() {},
	},
};
</script>

<style scoped></style>
