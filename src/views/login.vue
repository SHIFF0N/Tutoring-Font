<template>
<v-img src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
gradient="to top right, rgba(100,100,100,.1), rgba(50,50,50,.5)">

<v-container class="fill-height" fluid>
    
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="3">
            <v-card class="elevation-12">
                <v-row class="d-flex justify-center mt-6">
                </v-row>
                <v-row class="d-flex justify-center mt-6">
                </v-row>

                <v-card-text>
                    <v-col>

                        <v-btn tile block outlined height="70px" color="red" @click="loginWithGoogle">
                            <v-icon class="mr-4" color="red">fab fa-google</v-icon>
                            Log in with Google
                        </v-btn>

                        <v-row class="d-flex justify-center mt-6">
                            <p>or</p>
                        </v-row>
                        <v-row class="d-flex justify-center mt-3">
                        </v-row>

                        <v-text-field outlined solo color="light-blue lighten-1" v-model="form.email" label="Email" name="Email" type="text"></v-text-field>

                        <v-text-field outlined solo color="light-blue lighten-1" v-model="form.password" id="password" label="Password" name="password" type="password"></v-text-field>

                        <v-btn class="white--text mt-3" tile height="65px" Depressed block color="light-blue lighten-1" @click="login">Log in</v-btn>

                        <v-row class="d-flex justify-center mt-6">
                            <v-btn class="mt-6" text small  color="primary">Forget password?</v-btn>
                        </v-row>
                        <v-row class="d-flex justify-center mt-3">
                            <p>No account?<v-btn text small color="primary">Create account</v-btn></p>
                        </v-row>
                    </v-col>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
   
</v-container>
</v-img>
</template>

<script>
import {
    sync,
    dispatch
} from 'vuex-pathify'

export default {
    components: {},
    computed: {
        form: sync('auth/loginForm'),
        user: sync('auth/user'),
        token: sync('auth/token'),
    },
    created() {
        this.loadLocalStorage();
        if (this.user && this.token) {

        }
    },
    methods: {

        loadLocalStorage: function () {

        },
        login: async function () {
            await dispatch('auth/login')
            if (this.user) {
                this.$router.push({
                    name: 'admin-home'
                })
            }
        },
        loginWithGoogle: async function () {
            let authCode = await this.$gAuth.getAuthCode();
            await dispatch('auth/loginWithGoogle', {
                code: authCode
            });
            if (this.user) {
                //TODO : check roles before push new router

                this.$router.push({
                    name: 'admin-home'
                })
            }

        },
    }

};
</script>

<style>
.login-form-title-1 {
    color: #fff;
}
</style>
