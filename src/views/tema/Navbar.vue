<template>
	<nav class="navbar navbar-light bg-light">
		<div class="container">
			<a class="navbar-brand" href="#"></a>
			<ul class="navbar-nav flex-row nav-menu">
				<li class="nav-item s-2">
					<a href="configuration.html" class="nav-link" aria-current="page">
						<img src="/img/icon/config.png">
						<span class="border-menu"></span>
					</a>
				</li>
				<li class="nav-item s-2">
					<a class="nav-link" aria-current="page" href="#">
						<img src="/img/icon/help.png">
						<span class="border-menu"></span>
					</a>
				</li>
				<li class="nav-item s-2">
					<a class="nav-link" href="#">
						{{ user.name.value }}
						<img src="/img/icon/user.png">
						<span class="border-menu"></span>

					</a>
				</li>
				<li class="nav-item s-2">
					<a class="nav-link" href="index.html">
						<img src="/img/icon/logout.png">
					</a>
				</li>

			</ul>

		</div>
	</nav>
</template>

<script>
	import { ref } from 'vue'

	export default {
		setup() {
			const user = {
				name: ref('asdas')
			}

			return {
				user
			}
		}
	}
</script>