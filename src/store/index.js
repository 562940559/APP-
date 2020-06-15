import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 
export default new Vuex.Store({
state:{
  token:'',
  account:'',
},
mutations:{
  set_token(state, token) {
    state.token = token
    localStorage.setItem('token',token);
  },
  del_token(state) {
    state.token = ''
    localStorage.removeItem('token')
  },
  set_account(state, account) {
    state.account = account
    localStorage.setItem('account',account);
  },
  del_account(state) {
    state.account = ''
    localStorage.removeItem('account')
  },
},
});