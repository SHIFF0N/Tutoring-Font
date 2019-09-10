<template>
<v-img src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to top right, rgba(100,100,100,.1), rgba(50,50,50,.5)">

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

                            <!-- dialog Forget password -->
                            <v-row class="d-flex justify-center mt-6">
                                <v-dialog v-model="ForgetPassword" persistent max-width="500">
                                    <template v-slot:activator="{ on }">
                                        <v-btn class="mt-6" text small color="light-blue lighten-1" v-on="on">Forget password?</v-btn>
                                    </template>
                                    <v-card class="elevation-11">
                                        <v-container>
                                            <v-card-title class="font-weight-regular">
                                                Need a link to reset your password?
                                            </v-card-title>
                                            <v-text-field class="mt-6" placeholder="Email" outlined></v-text-field>
                                            <v-card-actions>
                                                <div class="flex-grow-1"></div>
                                                <v-btn color="light-blue lighten-1" text @click="ForgetPassword = false">Just kidding, I remembered</v-btn>
                                                <v-btn color="light-blue lighten-1" class="white--text" @click="ForgetPassword = false">Reset password</v-btn>
                                            </v-card-actions>
                                        </v-container>
                                    </v-card>
                                </v-dialog>
                            </v-row>

                            <!-- dialog Create Account -->
                            <v-row class="d-flex justify-center mt-3">
                                <v-dialog v-model="CreateAccount" persistent max-width="1500px">
                                    <template v-slot:activator="{ on }">
                                        <p>No account?<v-btn text small color="light-blue lighten-1" v-on="on">Create account</v-btn>
                                        </p>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">User Profile</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field label="Legal first name*" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field label="Email*" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple></v-autocomplete>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                            <div class="flex-grow-1"></div>
                                            <v-btn color="blue darken-1" text @click="CreateAccount = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text @click="CreateAccount = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
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
    data: () => ({
        CreateAccount: false,
        ForgetPassword: false,
    }),
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
