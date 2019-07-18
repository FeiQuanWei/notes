import Vue from "vue";
import Vuex from "Vuex";
Vue.use(Vuex);
const state = {
    count:4
}
const mutations = {
    add(state,n){
        state.count += n;
        setTimeout(()=>{
            state.count--;
        },3000);
        console.log(1);
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count(state){
        return state.count+=100
    }
}

const actions = {
    addAction(store){
        store.commit("add",10)
        setTimeout(()=>{
            commit("reduce")
        },3000);
        console.log("我先执行了")
    },
    reduceAction({commit}){
        commit("reduce")
    }
}

export default new Vuex.Store({
    state,mutations,getters,actions
});