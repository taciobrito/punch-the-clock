<template>
	<div class="row">
		<div class="col">
			&nbsp;
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-md-4 col-12">
			<a href="#">
				<div class="btn-bfn"></div>
				<h3 class="title-btn">
					Bonificación a membros de Familias Numerosas (BFN)
				</h3>
			</a>
		</div>

		<div class="col-md-4 col-12">
			<a href="#">
				<div class="btn-osp"></div>
				<h3 class="title-btn">
					Administración de las Obligaciones de Servicio Público (OSP)
				</h3>
			</a>
		</div>
	</div>
</template>

<script>

import {ref} from 'vue';

export default {
	name: 'Home',
	components: {
	},
	setup(props) {
		console.log('veio se', props)
		let teste = ref('aaaaaa')
		let repositories = []

		teste.value = 'ttttsss'
		return {
			teste,
			repositories
		}
	}
}
</script>
