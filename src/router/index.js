import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Site/ClientPages/Home";
import Client from "@/views/Site/Client";
import News from "@/views/Site/ClientPages/News";
import Dashboard from "@/views/Dashboard/Dashboard";
import Login from "@/views/Dashboard/DashboardPages/Login";
import Add from "@/views/Dashboard/DashboardPages/Add";
import ReadPost from "@/views/Site/ClientPages/ReadPost";
import ViewSection from "@/views/Site/ClientPages/ViewSection";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Client',
    component: Client,
    children:[
      {path:'/',name:'Home',component:Home},
      {path:'/news',name:'News',component:News},
      {path:'/news/*',name:'ReadPost',component:ReadPost},
      {path:'/sections/*',name:'ViewSection',component:ViewSection},

    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {path:'login',name:'Login',component:Login},
      {path:'add',name:'Add',component:Add},

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default 
  router

