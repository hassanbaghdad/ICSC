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
import Posts from "@/views/Dashboard/DashboardPages/Posts";
import Sections from "@/views/Dashboard/DashboardPages/Sections";
import Sections2 from "@/components/site/Sections";
import Productions from "@/views/Dashboard/DashboardPages/Productions";
import Tenders from "@/views/Dashboard/DashboardPages/Tenders";
import Labs from "@/views/Dashboard/DashboardPages/Labs";
import ViewPlant from "@/views/Site/ClientPages/ViewPlant";
import Settings from "@/components/dash/Settings/Settings";
import Messages from "@/views/Dashboard/DashboardPages/Messages";
import ViewTender from "@/components/site/ViewTender";
import AllTenders from "@/views/Site/AllTenders";
import ContactUs from "@/views/Site/ClientPages/ContactUs";
import AllProduction from "@/views/Site/ClientPages/AllProduction";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Client,
    children:[
      {path:'/',name:'Home',component:Home},
      {path:'/news',name:'News',component:News},
      {path:'/news/*',name:'ReadPost',component:ReadPost},
      {path:'/sections/*',name:'ViewSection',component:ViewSection},
      {path:'/sections',name:'Sections',component:Sections2},
      {path:'/plants/*',name:'ViewPlant',component:ViewPlant},
      {path:'/tenders',name:'AllTenders',component:AllTenders},
      {path:'/contact-us',name:'ContactUs',component:ContactUs},
      {path:'/productions',name:'AllProduction',component:AllProduction},
      {path:'/news',name:'News',component:News},

    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {path:'login',name:'Login',component:Login},
      {path:'posts',name:'Posts',component:Posts},
      {path:'plants',name:'Labs',component:Labs},
      {path:'sections',name:'Sections',component:Sections},
      {path:'productions',name:'Productions',component:Productions},
      {path:'tenders',name:'Tenders',component:Tenders},
      {path:'messages',name:'Messages',component:Messages},
      {path:'settings',name:'Settings',component:Settings},

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

