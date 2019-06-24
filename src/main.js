// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vue-moment
import vueMoment from 'vue-moment'

// flexible
import './assets/flexible'

// common.css
import './assets/common.css'

// 开发环境配置MOCKnr
import './data/mock/index'

// 拦截路由文件
import './common/premission'

// vuex
import store from './store/index'

Vue.config.productionTip = false

// vue-moment
Vue.use(vueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
