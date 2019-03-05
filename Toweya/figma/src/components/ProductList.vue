<template>
    <div class="div">
        <select class="custom-select"
                v-model="selectedCategory">
            Category
            <option value="All" selected>All</option>
            <option value="Зимние шины">Зимние шины</option>
            <option value="Летние шины">Летние шины</option>
            <option value="Всесезонные шины">Всесезонные шины</option>
        </select>
        <form class="form-inline active-cyan-4">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"

                   v-model="searchString">
            <!--@input="test($event)"-->
            <i class="fa fa-search" aria-hidden="true"></i>
        </form>

        <table	class="table table-bordered">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item) in evenNumbers ">
                <th class="th-img">
                    <svg width="180" height="100" viewBox="0 0 318 318" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="318" height="318" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0" transform="scale(0.00377358)"/>
                        </pattern>
                        <image id="image0" width="265" height="265" :href="item.img"/>
                    </defs>
                    </svg>
                </th>

                <th class="th-title">
                    <router-link tag="h3" :to="'/products/' + item.id">
                        <a>{{item.title}}</a>
                    </router-link>
                    <br>{{item.description}}
                </th>
                <th class="th-category">{{item.category}}</th>
                <th class="th-price">{{item.price}}</th>
                <th @click="remove(item.id)">delete</th>

            </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios);

    export default {
        name: "ProductList",
        data (){
            return{
                searchString: "",
                selectedCategory: "All"
            }
        },
        methods: {
            ...mapActions([
                "add",
                "remove"
            ]),
            ...mapMutations([
                "changeSearchString"
            ])
        },
        computed: {
            ...mapGetters([
                'items',
            ]),
            filteredItems: function () {
                var articles_array = this.items,
                    searchString = this.searchString;

                if(!searchString){
                    return articles_array;
                }

                searchString = searchString.trim().toLowerCase();

                articles_array = articles_array.filter(function(item){
                    if(item.title.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                })

                return articles_array;
            },
            evenNumbers: function () {
                if(this.selectedCategory==="All"){
                    return this.filteredItems
                }else{
                    return this.filteredItems.filter(item => item.category === this.selectedCategory)
                }

            }
        },

    }
</script>

<style scoped>

</style>