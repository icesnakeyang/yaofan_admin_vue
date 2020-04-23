import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import baseLayout from "@/pages/layout/baseLayout";
import registerHeader from "@/pages/user/register/registerHeader";
import register from "@/pages/user/register/register";
import login from '../pages/user/login/login'
import guestLayout from '../pages/layout/guestLayout'
import footer from '../pages/layout/baseFooter'
import sider from '../pages/layout/baseSider'
import dashboardHeader from "@/pages/dashboard/dashboardHeader";
import dashboard from '../pages/dashboard/dashboard'
import pointApprove from "../pages/point/pointApprove";
import userList from "../pages/user/userList/userList";
import userDetail from "../pages/user/userDetail/userDetail";
import userActionDashboard from "../pages/userAction/dashboard/userActionDashboard";
import userActionList from "../pages/userAction/userActionList/userActionList";

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
                },
                {
                    path: 'pointApprove',
                    name: 'pointApprove',
                    components: {
                        sider: sider,
                        header: dashboardHeader,
                        content: pointApprove,
                        footer: footer
                    }
                },
                {
                    path: 'userList',
                    name: 'userList',
                    components: {
                        sider: sider,
                        header: dashboardHeader,
                        content: userList,
                        footer: footer
                    }
                },
                {
                    path: 'userDetail',
                    name: 'userDetail',
                    components: {
                        sider: sider,
                        header: dashboardHeader,
                        content: userDetail,
                        footer: footer
                    }
                },
                {
                    path: 'userActionDashboard',
                    name: 'userActionDashboard',
                    components: {
                        sider: sider,
                        header: dashboardHeader,
                        content: userActionDashboard,
                        footer: footer
                    }
                },
                {
                    path: 'userActionList',
                    name: 'userActionList',
                    components: {
                        sider: sider,
                        header: dashboardHeader,
                        content: userActionList,
                        footer: footer
                    }
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!store.state.gogo_yaofan_token) {
        window.console.log(to)
        if (to.name === '/register') {
            next()
        } else {
            if (to.name === 'login') {
                next()
            } else {
                next({
                    name: 'login'
                })
            }
        }
    } else {
        window.console.log(to)
        if(to.path==='/'){
            next({
                name:'dashboard'
            })
        }
        next()
    }
})

export default router
