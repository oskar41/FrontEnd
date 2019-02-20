<template>
	<div>
		<h1>{{ product.title }}</h1>
		<router-link :to="{name: 'products'}">Back to products</router-link>
		<hr>
		<div class="alert alert-success">
			{{ product.price }}
		</div>
    <button v-if="inCart.indexOf(product.id_product) === -1"
            @click="addToCart(product.id_product)"
            class="btn btn-primary"
    >
      Add to cart
    </button>
    <button v-else
            @click="removeFromCart(product.id_product)"
            class="btn btn-warning"
    >
      Remove to cart
    </button>

	</div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

	export default {
		computed: {
      ...mapGetters('cart', {
        inCart: 'products'
      }),
			id(){
				return this.$route.params.id;
			},
			product(){
				return this.$store.getters['products/item'](this.id);
			}
		},
    methods: {
      ...mapActions('cart', {
        addToCart: 'add',
        removeFromCart: 'remove'
      })
    }
	}
</script>
