import { createRouter,createWebHistory } from "vue-router";

const routes = [{
    path:'/',
    name:'Login',
    component:()  => import('../views/index/Login.vue')
},{
    path:'/todo',
    name:'Todo',
    component:()  => import('../views/Todo.vue')
},{
    path:'/dashboard',
    name:'Dashboard',
    component:()  => import('../views/TodoDashboard.vue')
},{
    path:'/setting',
    name:'Settings',
    component:()  => import('../views/Settings.vue')
},{
    path:'/about',
    name:'About',
    component:()  => import('../views/About.vue')
},{
    path:'/history',
    name:'History',
    component:()  => import('../views/History.vue')
},{
    path:'/sendmsg',
    name:'SendMsg',
    component:()  => import('../views/SendMsg.vue')
},{
    path:'/userinfo',
    name:'UserInfo',
    component:()  => import('../views/UserInfo.vue')
}]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;