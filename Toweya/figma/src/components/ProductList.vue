<template>
    <div class="div">
        <table	class="table table-bordered">
            <thead>
            <!--<tr>-->
                <!--<th scope="col"-->
                    <!--v-for="items in header "-->
                <!--&gt;-->
                    <!--<a href="#" @click="setFilter(items)">{{items.type}}</a>-->
                <!--</th>-->
            <!--</tr>-->
            </thead>
            <tbody @click="test">
            <tr v-for="item in items ">
                <th class="th-id">{{item.category}}</th>
                <th class="th-title">{{item.description}}</th>
                <th class="th-price">{{item.id}}</th>
                <th class="th-color">{{item.price}}</th>
                <th>{{item.title}}</th>
            </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios);

    export default {
        name: "ProductList",
        data (){
            return{
                db: []
            }
        },
        methods: {
            ...mapActions([
                "add"
            ]),

            test(){
                console.log(this.items);
            }
        },
        computed: {
            ...mapGetters([
                'items'
            ]),
        },
        mounted() {
            this.add()
        }


    }
</script>

<style scoped>

</style>