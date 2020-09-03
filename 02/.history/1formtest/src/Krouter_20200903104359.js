let Vue;

class VueRouter {
    constructor(options) {
        this.$options = options;

        //创建一个路由path和route映射
        this.routeMap = {}

        //将来当前路径current需要响应式
        //利用vue响应式来实现
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init() {
        //绑定浏览器事件
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('hashchange')
    }
}

// 把VueRouter变为插件 使用install方法 变为插件
VueRouter.install = function(_Vue) {
    Vue = _Vue; //这里保存上面使用

    //混入任务
    Vue.mixin({ //混入就是扩展vue
        beforeCreate() {
            //这里代码 会在外面初始化时 会调用
            //这样就实现了Vue扩展
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        },
    })
}