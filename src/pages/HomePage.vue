<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col">
				<h1>Home to Advance Stats</h1>
			</div>
			<div class="col-auto">
				<router-link to="/profile" class="btn btn-secondary btn-sm"
					>Profile</router-link
				>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div class="card p-3">
					<h3>Total Streams</h3>
					<p>300</p>
				</div>
			</div>
			<div class="col">
				<div class="card p-3">
					<h3>Total Videos</h3>
					<p>5</p>
				</div>
			</div>
			<div class="col">
				<div class="card p-3">
					<h3>Total Audience</h3>
					<p>50</p>
				</div>
			</div>

			<div class="col">
				<div class="card p-3">
					<h3>This Week</h3>
					<p>10</p>
				</div>
			</div>
		</div>

		<div class="ro">
			<div class="col-12">
				<div class="advance-start" v-if="showAdvance && checkedSubscription">
					<div class="table-responsive">
						<table class="table table-striped table-sm">
							<thead>
								<tr>
									<th>#</th>
									<th>Header</th>
									<th>Header</th>
									<th>Header</th>
									<th>Header</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1,001</td>
									<td>random</td>
									<td>data</td>
									<td>placeholder</td>
									<td>text</td>
								</tr>
								<tr>
									<td>1,002</td>
									<td>placeholder</td>
									<td>irrelevant</td>
									<td>visual</td>
									<td>layout</td>
								</tr>
								<tr>
									<td>1,003</td>
									<td>data</td>
									<td>rich</td>
									<td>dashboard</td>
									<td>tabular</td>
								</tr>
								<tr>
									<td>1,003</td>
									<td>information</td>
									<td>placeholder</td>
									<td>illustrative</td>
									<td>data</td>
								</tr>
								<tr>
									<td>1,004</td>
									<td>text</td>
									<td>random</td>
									<td>layout</td>
									<td>dashboard</td>
								</tr>
								<tr>
									<td>1,005</td>
									<td>dashboard</td>
									<td>irrelevant</td>
									<td>text</td>
									<td>placeholder</td>
								</tr>
								<tr>
									<td>1,006</td>
									<td>dashboard</td>
									<td>illustrative</td>
									<td>rich</td>
									<td>data</td>
								</tr>
								<tr>
									<td>1,007</td>
									<td>placeholder</td>
									<td>tabular</td>
									<td>information</td>
									<td>irrelevant</td>
								</tr>
								<tr>
									<td>1,008</td>
									<td>random</td>
									<td>data</td>
									<td>placeholder</td>
									<td>text</td>
								</tr>
								<tr>
									<td>1,009</td>
									<td>placeholder</td>
									<td>irrelevant</td>
									<td>visual</td>
									<td>layout</td>
								</tr>
								<tr>
									<td>1,010</td>
									<td>data</td>
									<td>rich</td>
									<td>dashboard</td>
									<td>tabular</td>
								</tr>
								<tr>
									<td>1,011</td>
									<td>information</td>
									<td>placeholder</td>
									<td>illustrative</td>
									<td>data</td>
								</tr>
								<tr>
									<td>1,012</td>
									<td>text</td>
									<td>placeholder</td>
									<td>layout</td>
									<td>dashboard</td>
								</tr>
								<tr>
									<td>1,013</td>
									<td>dashboard</td>
									<td>irrelevant</td>
									<td>text</td>
									<td>visual</td>
								</tr>
								<tr>
									<td>1,014</td>
									<td>dashboard</td>
									<td>illustrative</td>
									<td>rich</td>
									<td>data</td>
								</tr>
								<tr>
									<td>1,015</td>
									<td>random</td>
									<td>tabular</td>
									<td>information</td>
									<td>text</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div
					class="text-center mb-4 p-4"
					v-if="!showAdvance && checkedSubscription"
				>
					<router-link to="/subscribe" class="btn btn-primary"
						>Subscribe to View Advance Stats</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>
  
  <script>
import DashLayout from "@/components/DashLayout.vue";
export default {
	comments: {
		DashLayout,
	},

	data() {
		return {
			showAdvance: false,
			checkedSubscription: false,
		};
	},

	mounted() {
		this.checkAdvance();
	},

	methods: {
		checkAdvance() {
			this.$http
				.get("advance-stats")
				.then(() => {
					this.showAdvance = true;
				})
				.finally(() => {
					this.checkedSubscription = true;
				});
		},
	},
};
</script>
  
  <style>
</style>