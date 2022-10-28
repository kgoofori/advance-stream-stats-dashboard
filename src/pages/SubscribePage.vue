<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col">
				<h1>Subscribe</h1>
			</div>
			<div class="col-auto">
				<router-link to="/" class="btn btn-secondary btn-sm">Home</router-link>
			</div>
		</div>

		<div class="row">
			<div class="col-md-3" v-for="(plan, index) in plans" :key="index">
				<div class="card">
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							:id="`defaultCheck1-${index}`"
							:value="plan.id"
							v-model="planId"
							:checked="index == 0"
						/>
						<label class="form-check-label" :for="`defaultCheck1-${index}`">
							<h3>{{ plan.name }}</h3>
							<p>{{ plan.description }}</p>
							<p>{{ plan.currencyIsoCode }} {{ plan.price }}</p>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card mt-4 p-4">
					<div id="braintree-card" class="mb-3"></div>

					<button class="btn btn-success" @click="payNow">Pay Now</button>
				</div>
			</div>
		</div>
	</div>
</template>

  <script>
export default {
	data() {
		return {
			plans: [],
			nonce: null,
			planId: null,
			braintreeInstance: null,
		};
	},

	mounted() {
		this.getPlans();

		window.braintree.dropin.create(
			{
				authorization: "sandbox_zjd8w28s_62jmdxr6hhfwqzyq",
				selector: "#braintree-card",
				paypal: {
					flow: "vault",
				},
			},
			(createErr, instance) => {
				if (createErr) {
					this.$message.error({
						message: "Something went wrong, please try again",
					});
					console.log(createErr);
					return;
				}

				this.braintreeInstance = instance;
			}
		);
	},

	methods: {
		getPlans() {
			this.$http
				.get("subscription/plans")
				.then(({ data }) => {
					this.plans = data.plans;

					this.planId = data.plans[0]?.id;
				})
				.finally(() => {
					this.checkedSubscription = true;
				});
		},

		payNow() {
			this.braintreeInstance.requestPaymentMethod((err, payload) => {
				if (err) {
					this.$message.error({
						message: "Something went wrong, please try again",
					});
					console.log(err);
					return;
				}

				this.nonce = payload.nonce;

				this.$http
					.post("subscription/subscribe", {
						planId: this.planId,
						nonceFromTheClient: this.nonce,
					})
					.then(({ data }) => {
						this.$message.success({
							message: data.message,
							onClose: () => {
								this.$router.push("/");
							},
						});
					})
					.catch(() => {
						this.$message.error({
							message: "Something went wrong, please try again",
						});
					});
			});
		},
	},
};
</script>
  
  <style>
</style>