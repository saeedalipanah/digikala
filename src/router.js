import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './Store/index.js';
import Home from './components/pages/Home/Home.vue';
import Product from './components/pages/Product.vue';
import Cart from './components/pages/Cart.vue';
import Profile from './components/pages/Profile.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Peyment from './components/pages/Peyment.vue';
Vue.use(VueRouter)
const routes = [
    {path: '/' , component: Home , name: 'Home'},
    {path: '/:id' , component: Product , name: 'Product'} ,
    {path: '/Cart' , component: Cart , name: 'Cart'} ,
    {path: '/Profile' , component: Profile , name: 'Profile'} ,
    {path: '/Register' , component: Register , name: 'Register'} ,
    {path: '/Login' , component: Login , name: 'Login' ,
      beforeEnter:function(to , from , next){
        if(store.state.token != null){
          next({name: 'Profile'})
        }
        else{
          next()
        }
      }
  } ,
  {path: '/Peyment' , component: Peyment , name: 'Peyment' , beforeEnter:function(to , from , next){
      if(store.state.token == null){
        next({name: 'Login'})
      }
      else{
        next();
      }
  }}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;