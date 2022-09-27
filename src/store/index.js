import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from "@/router";
Vue.use(Vuex);
Vue.use(router);
axios.interceptors.response.use(
    function(response) {
        // Do something with response data

        return response;
    },
    function(error) {
        if(error.response.status ==401)
        {
            router.push('/dashboard/login');
            this.state.dash.login = false;


        }
        // Do something with response error

        return Promise.reject(error);
    }
);
export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
  state: {
    en:false,
      loading:false,
  site:{
      posts:{
          search_post:'',
        posts:[]
      },
      productions:{
          productions:[
              {prod_name:'اسعار اللسمنت',prod_slug:'pricing'},
              {prod_name:'شهادة فحص اللسمنت',prod_slug:'certeifcate'},
          ]
      },
      sections:{
        sections:[
            {section_slug:'first-section',section_name:'First Section'},
            {section_slug:'second-section',section_name:'Second Section'},
        ]
      },
      labs:{
        labs:[
            {lab_name:'معمل سمنت الفلوجة',lab_slug:'fluja'},
            {lab_name:'معمل سمنت الديوانية',lab_slug:'dywania'},
        ]
      },
      tenders:{
        tenders:[
            {tender_slug:'first-tender',tender_name:'الاستيرادية'},
            {tender_slug:'second-tender',tender_name:'المحلية'},
            {tender_slug:'third-tender',tender_name:'المواد الاولية'},
        ]
      },
      gallery:{
        gallery:[]
      },
      latest_news:{
        latest_news:[]
      },
      brands:{
        brands:[]
      },
      counters:{
          counters:[]
      },
      info:{
      },
      social:{
          social:[]
      }
  },
      dash:{
        drawer:true,
          login:false,
        user:{
            name:'',
            email:''
        },
          posts:{
            posts:[],
              forms:{
                add_post:false,
                  edit_post:false,
                  delete_post:false

              },
              target:[]
          },
          sections:{
            sections:[],
              target:[],
              forms:{
                add_section:false,
                  edit_section:false,
                  delete_section:false
              }
          },
          tenders:{
            tenders:[],
              target:[],
              forms:{
                add_tender:false,
                  edit_tender:false,
                  delete_tender:false
              }
          },
          prods:{
            prods:[],
              target:[],
              forms:{
                add_prod:false,
                  edit_prod:false,
                  delete_prod:false
              }
          },
          labs:{
            labs:[],
              target:[],
              forms:{
                add_lab:false,
                  edit_lab:false,
                  delete_lab:false,
              }
          },
          messages:{
            target:[],
            forms:{
                view_message:false
            }
          }

      }
  },
  mutations: {
      RENDER(state){
          axios.get('api-site/render').then(res=>{
              state.site.info=res.data.info[0];
              state.site.posts.posts=res.data.posts;
              state.site.latest_news.latest_news=res.data.posts.reverse();
              state.site.sections.sections=res.data.sections;
              state.site.labs.labs=res.data.labs;
              state.site.tenders.tenders=res.data.tenders;
              state.site.gallery.gallery=res.data.gallery;
              state.site.productions.productions=res.data.productions;
          });
      },
      DASH_GET_POSTS(state)
      {
          axios.get('api-dash/get-posts').then(res=>{
              state.dash.posts.posts  =res.data;
          }).catch(err=>{
              console.log(err)
          })
      },
      DASH_GET_SECTIONS(state)
      {

          axios.get('api-dash/get-sections').then(res=>{
              state.dash.sections.sections  =res.data;
          }).catch(err=>{
                // if(err.response.status ==401)
                // {
                //     console.log(err.response.status)
                //     state.dash.login = false;
                //     router.push('/dashboard/login');
                //
                // }
          })
      },
      DASH_GET_PRODS(state)
      {
          axios.get('api-dash/get-prods').then(res=>{
              state.dash.prods.prods  =res.data;
          }).catch(err=>{
              console.log(err)
          })
      },
      DASH_GET_TENDERS(state)
      {
          axios.get('api-dash/get-tenders').then(res=>{
              state.dash.tenders.tenders  =res.data;
          }).catch(err=>{
              console.log(err)
          })
      },
      DASH_GET_LABS(state)
      {
          axios.get('api-dash/get-labs').then(res=>{
              state.dash.labs.labs  =res.data;
          }).catch(err=>{
              console.log(err)
          })
      },


  },
  actions: {
  },
  modules: {
  },

})
