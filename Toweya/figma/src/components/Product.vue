<template>
    <div class="wrap" v-if="product">
        <router-link :to="{name: 'products'}">Back to products</router-link>
        <div  class="block-left">
            <svg width="318" height="318" viewBox="0 0 318 318" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="318" height="318" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0" transform="scale(0.00377358)"/>
                    </pattern>
                    <image id="image0" width="265" height="265" :href="product.img"/>
                </defs>
            </svg>
        </div>
        <div class="block-right">
            {{ product.title }}<br>
            {{ product.category }}<br>
            {{ product.description }}<br>
            {{ product.price }}<br>
        </div>


    </div>
</template>

<script>

    import {mapGetters} from 'vuex';


    export default {
        name: "Product",
        data(){
            return{
                imageLink: '123.png'
            }
        },
        computed: {
            ...mapGetters([
                'items',
            ]),
            id(){
                return this.$route.params.id;
            },
            product(){
                return this.$store.getters['item'](this.id);
            }
        },

    }
</script>

<style scoped>

</style>