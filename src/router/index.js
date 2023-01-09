import { createRouter,createWebHistory } from "vue-router";

const routes = [{
    path:'/login',
    name:'Login',
    component:()  => import('../views/LoginView.vue')
    },
    {
    path:'/register',
    name:'register',
    component:()  => import('../views/RegisterView.vue')
    },
    {
    path:'/',
    name:'Home',
    component:() => import('../views/Home.vue'),
    children:[
        {
            path:'/todo',
            name:'Todo',
            component:()  => import('../views/index/Todo.vue')
        },{
            path:'/dashboard',
            name:'Dashboard',
            component:()  => import('../views/index/TodoDashboard.vue')
        },{
            path:'/setting',
            name:'Settings',
            component:()  => import('../views/index/Settings.vue')
        },{
            path:'/about',
            name:'About',
            component:()  => import('../views/index/About.vue')
        },{
            path:'/history',
            name:'History',
            component:()  => import('../views/index/History.vue')
        },{
            path:'/sendmsg',
            name:'SendMsg',
            component:()  => import('../views/index/SendMsg.vue')
        },{
            path:'/userinfo',
            name:'UserInfo',
            component:()  => import('../views/index/UserInfo.vue')
        }
    ]
},
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {

    if (to.meta.isAuth) {//判断当前路由是否需要权限控制
        if(localStorage.getItem('authName')==='admin'){//权限控制的具体规则
            next()//旅行
        }else{
            alert('暂无权限查看')
        }

    } else {
        next();
    }
})


export default router;