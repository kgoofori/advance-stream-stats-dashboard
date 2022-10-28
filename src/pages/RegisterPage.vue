<template>
	<div class="container">
		<div class="row">
			<div class="col col-md-4"></div>
			<div class="col col-md-4" style="margin-top: 100px">
				<h1>Register</h1>
				<div class="center-form">
					<form>
            <div class="form-group">
							<label for="fname">First name</label>
							<input
								type="email"
								class="form-control"
								id="fname"
								aria-describedby="emailHelp"
								v-model="firstName"
							/>
						</div>
            <div class="form-group">
							<label for="lName">Last Name</label>
							<input
								type="email"
								class="form-control"
								id="lName"
								aria-describedby="emailHelp"
								v-model="lastName"
							/>
						</div>

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
			firstName: null,
			lastName: null,
			email: null,
			password: null,
		};
	},

	methods: {
		login() {
			this.$http
				.post("auth/register", { first_name: this.firstName, last_name: this.lastName, email: this.email, password: this.password, password_confirmation: this.password })
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