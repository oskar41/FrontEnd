<template>
    <div class="wrap" v-if="product">
        <div class="back"><router-link :to="{name: 'products'}">Back to products</router-link></div>
        <div class="product">
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
                <div class="p-title">
                    {{ product.title }}
                </div>
                <div class="p-category">
                    Category: {{ product.category }}
                </div>
                <div class="p-description">
                    {{ product.description }}
                </div>
                <div class="p-price">
                    {{ product.price }}
                </div>
                <button>Buy</button>

            </div>
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
    .product{
        position: absolute;
        width: 1091px;
        height: 407px;
        left: 50px;
        top: 64px;

        background: #FFFFFF;
        /* Default shadow(high) */
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
    }
    .back a{
        position: absolute;
        width: 111px;
        height: 19px;
        left: 82px;
        top: 28px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;
        text-decoration: none;
        color: #2D2E2E;
    }
    .block-left {
        position: absolute;
        width: 318px;
        height: 318px;
        left: calc(50% - 318px/2 - 362.5px);
        top: 50px;
    }

    .p-title{
        position: absolute;
        height: 33px;
        left: 424px;
        top: 100px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 28px;

        color: #2D2E2E;
    }
    .p-category{
        position: absolute;
        height: 22px;
        left: 424px;
        top: 161px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 18px;

        color: #7D7F80;
    }
    .p-description{
        position: absolute;
        width: 648px;
        height: 94px;
        left: 424px;
        top: 198px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;

        color: #646566;
    }
    .p-price{
        position: absolute;
        width: 174.46px;
        height: 53px;
        left: 424px;
        top: 308px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 44.1667px;

        color: #F2994A;

    }
    button{
        position: absolute;
        width: 204px;
        height: 54px;
        left: 868px;
        top: 307px;

        background: #32B1F8;
        border-radius: 100px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 26px;
        outline: none;

        color: #FFFFFF;
        cursor: pointer;
    }

</style>