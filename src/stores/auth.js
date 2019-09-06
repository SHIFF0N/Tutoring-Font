import {make} from 'vuex-pathify'

const state = {
    user: null,
    token: null,
    loginForm: {},
};

const mutations = make.mutations(state);


const actions = {

    getUserByToken: async ({state}, {token}) => {
        let result = await axios.get('/api/user', {
            headers: {Authorization: "Bearer " + token}
        })
            .then(response => response.data)
        return result
    },

    login: async ({state, dispatch}) => {

        let result = await axios.post('/oauth/token', {
            'grant_type': 'password',
            'client_id': process.env.VUE_APP_SERVER_CLIENT_ID,
            'client_secret': process.env.VUE_APP_SERVER_CLIENT_SECRET,
            'username': state.loginForm.email,
            'password': state.loginForm.password,
            'scope': '',
        }).then(response => response.data);

        let token = result.access_token;
        let user = await dispatch('getUserByToken', {token: result.access_token})
        if (user) {
            await dispatch('loginApplication', {
                user: user,
                token: token,

            });

        }
    },
    loginApplication: async ({state, dispatch}, {user, token}) => {
        state.user = user;
        state.toke = token;

        await dispatch('saveLocalStorage', {
            user: user,
            token: token
        });
    },
    loginWithGoogle: async ({state, dispatch}, {code}) => {
        let result = await axios.post('/api/callback', {
            code: code,
            redirect_uri: 'postmessage'
        }).then(result => {
            return result.data
        });

        await dispatch('loginApplication', {
            user: result.user,
            token: result.token,

        })


    },

    saveLocalStorage: function ({state}, {user, token}) {
        localStorage.user = JSON.stringify(user);
        localStorage.token = token;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    },
    logout: (ctx) => {
        localStorage.user = null;
        localStorage.token = null;
        state.user = null;
        state.token = null;
        axios.defaults.headers.common['Authorization'] = null;
    },

    loginFromLocalStorage: () => {
        state.user = JSON.parse(localStorage.user)
        state.token = localStorage.token;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
