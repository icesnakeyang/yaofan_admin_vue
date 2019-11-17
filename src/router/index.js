import Vue from 'vue'
import Router from 'vue-router'
import baseLayout from "@/pages/layout/baseLayout";
import registerHeader from "@/pages/user/register/registerHeader";
import register from "@/pages/user/register/register";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: baseLayout,
            children: [
                {
                    path: '/register',
                    name: 'register',
                    components: {
                        header: registerHeader,
                        content: register
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