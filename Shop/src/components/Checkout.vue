<template>
	<div>
    <div class="overlay" v-show="formProcessed"><img src="../../images/spinner.gif" alt=""></div>
    <div v-show="!formProcessed && !formDone">
      <h1>Order now</h1>
      <hr>
      <form>
        <app-input v-for="(items, index) in info"
                   :key="index"
                   :items="items"
                   @changevalid="onChangeValid($event, index)"
                   @changedata="oninputValue($event, index)"
        >
        </app-input>
      </form>
      <button class="btn btn-primary"
              @click="submit"
      >
        Send Data
      </button>
    </div>
    <div v-show="formDone"><h1>Thanks, {{info[0].value}}, we will call you back!</h1><br>
      <h2><b>Your order: </b><br>
        <tr v-for="product in products">
        <td>{{ product.title }}</td>
      </tr></h2>
    </div>
	</div>
</template>

<script>
  import AppInput from './Input';

  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';
  import {mapActions} from 'vuex';

	export default {
    computed: {
      ...mapGetters('form', {
        info: 'info',
        formProcessed: 'formProcessed',
        formDone: 'formDone'
      }),
      ...mapGetters('products', {
        productsAll: 'items'
      }),
      ...mapGetters('cart', {
        productsInCart: 'products',
      }),
      products(){
        return this.productsAll.filter((elem) => {
          return this.productsInCart.indexOf(elem.id_product) !== -1;
        });
      },
    },
    methods:{
      ...mapMutations('form', {
        setInfoValue: 'setInfoValue',
        setInfoValid: 'setInfoValid',
      }),
      ...mapActions('form', {
        submit: 'submit',
      }),
      oninputValue(data, index){
        this.setInfoValue({
          i: index,
          val: data
        })
      },
      onChangeValid(data, index){
        this.setInfoValid({
          i: index,
          status: data
        })
      }
    },
    components: {
      AppInput
    }
	}
</script>

<style scoped>
.overlay{
  position: absolute;
  left: 35%;
}
</style>
