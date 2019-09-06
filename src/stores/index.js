import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import loader from './loader'

import admin from './admin'

import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [pathify.plugin], // activate plugin
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: auth,
        loader: loader,
        admin: admin,
    }
})
