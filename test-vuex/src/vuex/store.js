import Vue from "vue";
import Vuex from "Vuex";
Vue.use(Vuex);
const state = {
    count:4
}
const mutations = {
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
export default new Vuex.Store({
    state,mutations
});