<template>
    <v-app>
        <router-view></router-view>
        <shares-loader/>
    </v-app>
</template>

<script>

    import {sync} from 'vuex-pathify'
    import SharesLoader from "./components/shares/loader";

    export default {
        name: 'App',
        components: {SharesLoader},
        data: () => ({
            //
        }),
        computed: {
            loader: sync('loader/loader')
        },
        methods: {
            showSpinner: function () {
                this.loader = true;
            },
            hideSpinner: function () {
                this.loader = false;
            }
        },
        created() {
            this.$on("before-request", this.showSpinner);
            this.$on("request-error", this.hideSpinner);
            this.$on("after-response", this.hideSpinner);
            this.$on("response-error", this.hideSpinner);

            axios.interceptors.request.use(
                conf => {
                    this.$emit("before-request");
                    return conf;
                },
                error => {
                    this.$emit("request-error");
                    return Promise.reject(error);
                }
            );

            axios.interceptors.response.use(
                response => {
                    this.$emit("after-response");
                    return response;
                },
                error => {
                    this.$emit("response-error");
                    return Promise.reject(error);
                }
            );
        },
        beforeDestroy() {
            this.$off("before-request", this.showSpinner);
            this.$off("request-error", this.hideSpinner);
            this.$off("after-response", this.hideSpinner);
            this.$off("response-error", this.hideSpinner);
        },
        mounted() {

        }
    };
</script>
