

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
}