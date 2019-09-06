<template>
    <v-container fluid v-if="ds">
        <role-table-card/>
    </v-container>
</template>

<script>

    import {sync, dispatch, call} from 'vuex-pathify';
    import RoleTableCard from "../../../components/roles/role-table-card";

    export default {
        name: "admin-roles-index",
        components: {RoleTableCard},
        computed: {},
        methods: {},
        async created() {
        }

    }
</script>

<style scoped>

</style>
