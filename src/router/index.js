import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const view = (name) => import(`@/views/${name}.vue`)


export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () => view('login')

        },
        {
            path: '/admin',
            component: () => view('admin/template'),
            children: [{
                    path: '',
                    name: 'admin-home',
                    component: () => view('admin/index')

                },
                {
                    path: 'chaow',
                    name: 'chaow',
                    component: () => view('admin/chaow')

                },
                
                {
                    path: 'roles',
                    name: 'admin-roles-home',
                    component: () => view('admin/roles/index')

                },
                {
                    path: 'users',
                    name: 'admin-users-home',
                    component: () => view('admin/users/index')

                },
                {
                    path: 'student',
                    name: 'admin-student-home',
                    component: () => view('admin/student/index')

                },
                
            ]

        },
    ]
})