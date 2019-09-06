<template>
    <v-card class="mt-2" v-if="roles.length > 0">
        <v-toolbar color="secondary" dark flat>
            <v-toolbar-title>การจัดการสิทธิ์</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Display Name</th>
                    <th class="text-left">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="role in roles" :key="role.id">
                    <td>{{ role.name }}</td>
                    <td>{{ role.display_name}}</td>
                    <td>{{ role.description}}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>

    import {sync, dispatch, call} from 'vuex-pathify';

    export default {
        name: "role-table-card",
        computed: {
            roles: sync('admin/roles/roles')
        },
        methods: {
            ...call('admin/roles/*')
        },
        async created() {
            await this.getRoles({});
        }

    }
</script>

<style scoped>

</style>
