import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Template from '../views/layouts/Template.vue'
import Petugas from '../views/Petugas.vue'
import Masyarakat from '../views/Masyarakat.vue'
import Kategori from '../views/Kategori.vue'
import Pengaduan from '../views/Pengaduan.vue'
import Laporan from '../views/Laporan.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        components: { default: Login },
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '',
        component: Template,
        children: [{

                title: 'Petugas',
                path: '/petugas',
                name: 'petugas',
                component: Petugas
            },
            {

                title: 'Masyarakat',
                path: '/masyarakat',
                name: 'masyarakat',
                component: Masyarakat
            },
            {
                title: 'Kategori',
                path: '/kategori',
                name: 'kategori',
                component: Kategori
            },
            {
                title: 'Pengaduan',
                path: '/pengaduan',
                name: 'pengaduan',
                component: Pengaduan
            },
            {
                title: 'Laporan',
                path: '/laporan',
                name: 'laporan',
                component: Laporan
            },
        ],
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router