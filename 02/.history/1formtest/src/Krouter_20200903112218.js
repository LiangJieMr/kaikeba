import Home from './view/home.vue'
import About from './view/about.vue'

//插件注册
Vue.use(VueRouter);

//创建vuerouter实例
export default new VueRouter({
    routes: [
        {path:'/', component:Home},
        {path:'/about', component: About}
    ]
})