import {defineStore} from 'pinia'

 const useUserStore = defineStore("user",{
    state:() => ({
            
            isLogin:'',
            todolist:[ {
                content: '十四岁那年我抓住了一只蝉，便以为抓住了整个夏天，没想到蝉说：“说不上恨别揪蝉，就一点喜欢?',
                timestamp: '2018-04-12',
                size: 'large',
                type: 'primary',
                status:'doing'
              },
            
              {
                content: '到底了',
                timestamp: '2018-04-03',
                type: 'primary',
                hollow: true,
                status:'finished'
              }],
            selectDay:''   
    }),
    
    getters: {
        getLoginStatus: state => state.isLogin,
        
        getLocalLoginStatus: (state) => (state.isLogin) = localStorage.getItem('isLogin'),

        getSelectedDay : state => state.selectDay,

        getTodoList: state => state.todolist
    },
   
    actions: {
        updateTodoList(val){
            this.todolist = val;
            // 此处上传后端
        },
        setLoginSuccessStatus(){
   
            this.isLogin = true; 
        },
        
        clearStatus(){
      
            this.isLogin = false;
           
        },
        setSelectDay(val){

            this.selectDay = val 
            
        },
        addEventList(content){
           
           
            this.todolist.unshift(content)

        }
    },

    persist: {
        enabled: true
      }
})

export default useUserStore