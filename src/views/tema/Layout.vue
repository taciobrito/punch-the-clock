<template>
	<Header />
	<Navbar />

	<div class="container">
		<router-view/>
	</div>

	<Footer />
</template>

<script>
	import Header from './Header'
	import Navbar from './Navbar'
	import Footer from './Footer'

	export default {
		components: {
			Header, Navbar, Footer
		}
	}
</script>