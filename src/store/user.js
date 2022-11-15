import {defineStore} from 'pinia'

 const useUserStore = defineStore("user",{
    state:() => ({
            
            isLogin:'',
            todolist:[ {
                content: '说不上恨别揪蝉，就一点喜欢',
                timestamp: '2022-10-28',
                size: 'large',
                status:'doing',
                level:'success',
                color:'#67C23A'
              },{
                content: '十四岁那年我抓住了一只蝉，便以为抓住了整个夏天，没想到蝉说：“说不上恨别揪蝉，就一点喜欢?',
                timestamp: '2018-04-12',
                size: 'large',
                status:'doing',
                level:'success',
                color:'#67C23A'
              },
              {
                content: '测试内容A，完成状态，此条不显示在待办中',
                timestamp: '2018-04-12',
                size: 'large',
                type: 'primary',
                status:'finished',
                level:'warning',
                color:'#E6A23C'
              },
              {
                content: '测试内容B，进行中状态，此条显示',
                timestamp: '2018-04-12',
                size: 'large',
                type: 'primary',
                status:'doing',
                level:'danger',
                color:'#F56C6C'
              },
              {
                content: '到底了',
                timestamp: '2018-04-03',
                type: 'primary',
                level:'info',
                status:'doing',
                color:'#409EFF'
              }],
            selectDay:'',
            today:'',   
    }),
    
    getters: {
        getLoginStatus: state => state.isLogin,
        
        getLocalLoginStatus: (state) => (state.isLogin) = localStorage.getItem('isLogin'),

        getSelectedDay : state => state.selectDay,

        getTodayTodoList: state => state.todolist.filter(function(item){
            console.log(item.timestamp)
            return item.timestamp == state.today
        }),

        getAllTodoList : state => state.todolist,

        getTodayDate :  state => state.today,

        computedStatusPercents : state =>{
          let failedEvents = 0
          let completedEvents = 0
          state.todolist.filter((item) => {
              if(item.status == 'doing') {
                  failedEvents++
              }else if (item.status == 'finished'){
                  completedEvents ++
              }else{
                console.log('Null')
              }
          })
          failedEvents = parseFloat(failedEvents)
          completedEvents = parseFloat(completedEvents)

          let total = parseFloat(state.todolist.length)

          failedEvents = parseInt((failedEvents / total ) * 100 )
          completedEvents =  parseInt((completedEvents / total ) * 100 )
          return [failedEvents,completedEvents]
        },

        getSelectedDateList : state => {
          
          let arr =  state.todolist.filter((item)=> {
                if(item.timestamp == state.selectDay)
                  {
                    return item
                  }
               
            })

            return arr
        }
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

        },
        setToday(val){
            this.today = val.date
            console.log(this.today);
        }
    },

    persist: {
        enabled: true
      }
})

export default useUserStore