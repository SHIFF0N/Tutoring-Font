import {make} from 'vuex-pathify'

const state = {
    loader: false
};

const mutations = make.mutations(state);


const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
