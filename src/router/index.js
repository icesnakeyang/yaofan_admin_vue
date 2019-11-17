import Vue from 'vue'
import Router from 'vue-router'
import baseLayout from "@/pages/layout/baseLayout";
import registerHeader from "@/pages/user/register/registerHeader";
import register from "@/pages/user/register/register";
import baseSider from "../pages/layout/baseSider";
import guestLayout from '../pages/layout/guestLayout'
import footer from '../pages/layout/baseFooter'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/guest',
            component: guestLayout,
            children: [
                {
                    path: '/register',
                    name: 'register',
                    components: {
                        header: registerHeader,
                        content: register,
                        footer: footer
                    }
                }
            ]
        },
        {
            path: '/',
            component: baseLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    components: {
                        sider: baseSider
                    }
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.console.log(to)
    if (to.name === 'register') {
        window.console.log(2)
        next()
        return
    }
    next()
})

export default router