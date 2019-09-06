<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{user ? user.name : 'Firstname Lastname'}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        ผู้ดูแลระบบ
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item :to="{name:'admin-home'}" exact>
                    <v-list-item-icon>
                        <v-icon>fas fa-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>หน้าหลัก</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name:'admin-users-home'}" exact>
                    <v-list-item-icon>
                        <v-icon>fas fa-user</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>การจัดการผู้ใช้</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name:'admin-roles-home'}" exact>
                    <v-list-item-icon>
                        <v-icon>fas fa-user-tag</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>การจัดการสิทธิ์</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name:'admin-student-home'}" exact>
                    <v-list-item-icon>
                        <v-icon>fas fa-user</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>การจัดการนิสิต</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>


        </v-navigation-drawer>

        <v-app-bar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                app
                color="blue darken-3"
                dark>
            <v-toolbar-title
                    style="width: 300px"
                    class="ml-0 pl-3">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <span class="hidden-sm-and-down">SE ERP</span>
            </v-toolbar-title>
            <!--<v-text-field-->
                    <!--flat-->
                    <!--solo-inverted-->
                    <!--hide-details-->
                    <!--prepend-inner-icon="fas fa-search"-->
                    <!--label="Search"-->
                    <!--class="hidden-sm-and-down"-->
            <!--&gt;</v-text-field>-->
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>fas fa-th</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fas fa-bell</v-icon>
            </v-btn>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon large v-on="on">
                        <v-avatar size="32px" item>
                            <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>ออกจากระบบ</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>


        </v-app-bar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import {dispatch, sync} from 'vuex-pathify';

    export default {
        name: "home-template",
        data: () => ({
            drawer: false,
        }),
        computed: {
            user: sync('auth/user')
        },
        created() {
            this.loginFromLocalStorage()
        },
        methods: {
            loginFromLocalStorage: function () {
                dispatch('auth/loginFromLocalStorage')
            },
            logout: function () {
                dispatch('auth/logout')
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

<style scoped>

</style>
