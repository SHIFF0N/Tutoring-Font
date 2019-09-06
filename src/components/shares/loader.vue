<template>
    <v-overlay :value="loader">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>

<script>

    import {sync, dispatch} from 'vuex-pathify'

    export default {
        name: "shares-loader",
        computed: {
            loader: sync('loader/loader')
        }
    }
</script>

<style scoped>

</style>
