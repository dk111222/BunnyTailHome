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

// hiboxrouter.afterEach((to,from) => {
//   window.scrollTo(0,0);
// });

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

// history模式，刷新子路由页面404问题解决办法
// 3、 （vue.js官方教程里提到的）

//  server {
//     listen    8888;#默认端口是80，如果端口没被占用可以不用修改
//     server_name localhost;
//     root    e:/vue/my_project/dist;#vue项目的打包后的dist
//     location / {
//       try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
//       index index.html index.htm;
//     }
//     #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
//     #因此需要rewrite到index.html中，然后交给路由在处理请求资源
//     location @router {
//       rewrite ^.*$ /index.html last;
//     }
//     #.......其他部分省略
//  }