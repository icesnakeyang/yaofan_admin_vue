import Vue from 'vue'
import Router from 'vue-router'
import baseLayout from "@/pages/layout/baseLayout";
import registerHeader from "@/pages/user/register/registerHeader";
import register from "@/pages/user/register/register";
import login from '../pages/user/login/login'
import guestLayout from '../pages/layout/guestLayout'
import footer from '../pages/layout/baseFooter'
import sider from '../pages/layout/baseSider'
import dashboardHeader from "@/pages/dashboard/dashboardHeader";
import dashboard from '../pages/dashboard/dashboard'

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
                },
                {
                    path: '/login',
                    name: 'login',
                    components: {
                        header: registerHeader,
                        content: login,
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
                        sider: sider,
                        header: dashboardHeader,
                        content: dashboard,
                        footer: footer
                    }
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.console.log(to)
    if (to.name === 'register') {
        next()
        return
    }
    next()
})

export default router