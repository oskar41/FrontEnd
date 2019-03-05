<template>
    <div class="wrap">
        <div class="block-left">
            image
        </div>
        <div class="block-right">
            descr
            {{product}}
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';


    export default {
        name: "Product",

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
        // mounted() {
        //     this.add()
        // },
    }
</script>

<style scoped>

</style>