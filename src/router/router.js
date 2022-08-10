import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let hiboxrouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hibox',
      component: () => import('../views/Hibox.vue')
    },
    {
      path: '/airdrop',
      name: 'AirDrip',
      component: () => import('../views/AirDrop.vue')
    },
  ]
})

hiboxrouter.afterEach((to,from) => {
  window.scrollTo(0,0);
});

// // 判断是否需要登录权限 以及是否登录
// hiboxrouter.beforeEach((to, from, next) => {
//   // 判断是否需要登录权限
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     // 判断是否登录
//     if (sessionStorage.getItem('token')) {
//       next()
//     } else {
//       // 没登录则跳转到登录界面
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

export default hiboxrouter