import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		items: []
	},
	getters: {
		items(state){
			return state.items;
		},
	},
	mutations: {
		loadItems(state, data){
			state.items = data;
		}
	},
	actions: {
		add(store){
			axios
				.get('/items.json')
				.then(response => ( store.commit('loadItems', response.data.items)))
		}
	},

});

