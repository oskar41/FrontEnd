export default {
  namespaced: true,
  state: {
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/,
        isValid: '',
        isCheked: false
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+@.+\..+/i,
        isValid: '',
        isCheked: false
      }
    ],
    formProcessed: false,
    formDone: false
  },
  getters: {
    info(state){
      return state.info;
    },
    formProcessed(state){
      return state.formProcessed;
    },
    formDone(state){
      return state.formDone;
    }
  },
  mutations: {
    setInfoValue(state, data){
      state.info[data.i].value = data.val;
    },
    setInfoValid(state, data){
      state.info[data.i].isValid = data.status;
      state.info[data.i].isCheked = true;
    },
    setFormProcessed(state){
      state.formProcessed = true
    },
    formDone(state){
      state.formProcessed = false;
      state.formDone = true;
    }
  },
  actions: {
      submit(store){
        store.commit('setFormProcessed');

        setTimeout(() => {
            store.commit('formDone');
          }, 1000
        );
      }
  }
}
