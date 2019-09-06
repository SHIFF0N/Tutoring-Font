import {make} from 'vuex-pathify'

const state = {
    roles: []
};

const mutations = {
    ...make.mutations(state),
};

const actions = {
    getRoles: async ({state, dispatch}) => {
        state.roles = await axios.get('/api/admin/roles')
            .then(response => {
                return response.data
            })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
