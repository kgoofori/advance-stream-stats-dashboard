<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col">
				<h1>Profile</h1>
			</div>
			<div class="col-auto">
				<router-link to="/" class="btn btn-secondary btn-sm">Home</router-link>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<div class="card p-3">
					<h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
					<p>{{ profile.email }}</p>
					<div v-if="profile.subscription">
						<p>
							Subscribed Till: {{ profile.subscription.paidThroughDate.date }}
						</p>
						<p>Status: {{ profile.subscription.status }}</p>
						<button
							class="btn btn-danger"
							v-if="profile.subscription.status != 'Canceled'"
                                          @click="cancelSubscription"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
  <script>
export default {
	data() {
		return {
			profile: {},
		};
	},

	mounted() {
		this.getMe();
	},

	methods: {
		getMe() {
			this.$http.get("auth/me").then(({ data }) => {
				this.profile = data.user;
			});
		},

		cancelSubscription() {
			this.$http
				.post("subscription/cancel")
				.then(({ data }) => {

                              this.getMe();
					this.$message.success({
						message: data.message,
					});
				})
				.catch(() => {
					this.$message.error({
						message: "Something went wrong, please try again",
					});
				});
		},
	},
};
</script>
  
  <style>
</style>