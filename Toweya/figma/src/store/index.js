import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		items: [],
		// searchString: '',
		// selectedCategory: "All",
		// filteredItems: []
	},
	getters: {
		items(state){
			return state.items;
		},
		itemsMap(state){
			let itemsMap = {};

			for(let i = 0; i < state.items.length; i++){
				let product = state.items[i];
				itemsMap[product.id] = product;
			}
			return itemsMap;
		},
		item: (state, getters) => (id) => {
			return getters.itemsMap[id];
		}
	},
	mutations: {
		loadItems(state, data){
			state.items = data;
		},
		remove(state, key){

			state.items.splice(key, 1);

			console.log(state.items);
		},
		// changeSearchString(state, data){
		// 	state.searchString = data;
		// }
	},
	actions: {
		add(store){
			axios
				.get('/data/items.json')
				.then(response => ( store.commit('loadItems', response.data.items)))
		},
		remove(store, key){
			store.commit('remove', key);
		}
	},

});

