<template>
    <div class="div">
        <div class="title">Items catalog</div>
        <div class="category">Category</div>
        <select class="custom-select"
                v-model="selectedCategory">

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
            <tr v-for="(item, index) in evenNumbers " v-on:mouseover="deleteHover = index" v-bind:key="item">
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
                <th class="th-delete">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         @click="remove(item.id)"
                         v-show="deleteHover === index"
                    >
                        <path d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4V4Z" stroke="#969899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 9L12 15" stroke="#969899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 9L18 15" stroke="#969899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </th>

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
                selectedCategory: "All",
                deleteHover: null
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
    .title{
        position: absolute;
        width: 172px;
        height: 33px;
        left: 50px;
        top: 54px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 28px;

        color: #2D2E2E;
    }
    .category{
        position: absolute;
        width: 66px;
        height: 19px;
        left: 50px;
        top: 126px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 16px;

        color: #7D7F80;
    }
    .custom-select{

        position: absolute;
        width: 212px;
        height: 49px;
        left: 140px;
        top: 111px;
        padding-left: 20px;

        background: #F4F4F4;
        /* Black 80 */
        border: 1px solid #C8CBCC;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;
    }
    .form-inline{
        position: absolute;
        width: 262px;
        height: 49px;
        left: 879px;
        top: 111px;
    }

    input.form-control{
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        padding-left: 20px;

        background: #FFFFFF;
        border: 1px solid #00ACF8;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;
    }
    table{
        position: absolute;
        width: 1091px;
        left: 50px;
        top: 184px;
        border: 1px solid #E6E6E6;
        border-radius: 8px;
    }
    table th{
        border-bottom: 1px solid #E6E6E6;
    }

    table thead th{
        padding: 10px 0 0 10px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 16px;
        text-align: left;
        color: #2D2E2E;
    }
    .th-title{

        text-align: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;

        color: #AFB1B3;
    }
    .th-title h3 {
        margin: 0;
    }

    .th-title a{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;
        text-decoration: none;

        color: #0088C4;
    }
    .th-price{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 20px;

        color: #FF7800;
    }
    .th-delete{
        width: 80px;
    }
</style>