import { defineStore } from 'pinia'

export const useTabStore = defineStore('tab', {
  state:() => ({
    counter: 0,
    indexData:[
      {
        path:'/index',
        meta:{
          icon:'HomeOutlined',
          title:'首页',
        }
      }
    ],
    tabLists:[
      {
        path:'/index',
        meta:{
          icon:'HomeOutlined',
          title:'首页',
        }
      },
    ],
  }),
  persist: true,
  getters:{

  },
  actions:{
    add_tab(data){
      this.tabLists.push(data)
    },
    del_tab(i){
      this.tabLists.splice(i,1)
    },
    del_tab_left(i){
      this.tabLists.splice(1,i-1)
    },
    del_tab_right(i){
      this.tabLists.splice(i+1)
    },
    del_tab_order(i){
      const index = i
      this.tabLists.splice(1,i-1)
      this.tabLists.splice(i+1)
    },
    del_tab_all(){
      this.tabLists.splice(0,this.tabLists.length)
      this.tabLists.push({
        path:'/index',
        meta:{
          icon:'HomeOutlined',
          title:'首页',
        }
      })
    }
  }
})