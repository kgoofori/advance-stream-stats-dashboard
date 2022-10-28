<template>
	<div class="container">
		<div class="row">
			<div class="col col-md-4"></div>
			<div class="col col-md-4" style="margin-top: 100px">
				<h1>Login</h1>
				<div class="center-form">
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								v-model="email"
							/>
							<small id="emailHelp" class="form-text text-muted"
								>We'll never share your email with anyone else.</small
							>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control"
								id="exampleInputPassword1"
								v-model="password"
							/>
						</div>
						<button
							type="submit"
							class="btn btn-primary"
							@click.prevent="login"
						>
							Submit
						</button>
						<div class="text-center p-3">
							<router-link to="/auth/register">Register</router-link>
						</div>
					</form>
				</div>
			</div>
			<div class="col col-md-4"></div>
		</div>
	</div>
</template>
  
  <script>
export default {
	data() {
		return {
			email: null,
			password: null,
		};
	},

	methods: {
		login() {
			this.$http
				.post("auth/login", { email: this.email, password: this.password })
				.then(({ data }) => {

					this.$store.commit("updateLogin", {
						...data,
						login: true,
					});

					this.$message.success({
						message: "Login successful.",
						onClose: () => {
							this.$router.push("/");
						},
					});

				})
				.catch(({ response }) => {
					console.log(response);
				});
		},
	},
};
</script>
  
  <style>
</style>