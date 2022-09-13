import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    en:false,
      loading:false,
  site:{
      posts:{
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
  }
  },
  mutations: {
      RENDER(state){
          axios.get('api-site/render').then(res=>{
              state.site.info=res.data.info[0];
              state.site.posts.posts=res.data.posts;
              state.site.sections.sections=res.data.sections;
              state.site.labs.labs=res.data.labs;
              state.site.tenders.tenders=res.data.tenders;
              state.site.gallery.gallery=res.data.gallery;
              state.site.productions.productions=res.data.productions;
          });
      }
  },
  actions: {
  },
  modules: {
  }
})
