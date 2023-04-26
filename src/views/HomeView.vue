<template>
  <div class="home">
    <h2>Тывызыктар</h2>
               
     <el-button v-show="array.length<=6" @click="getQ">Следующий вопрос</el-button>   
     <el-button v-show="array.length>6" @click="end()" type="warning" plain>Завершить</el-button>   
     <h2>{{ curr_q}}</h2>
     <el-input v-model="answer" style="width: 400px;" ></el-input><br>
     <el-button @click="addW('ө')">ө</el-button>
     <el-button @click="addW('ң')">ң</el-button>
     <el-button @click="addW('ү')">ү</el-button>
     <el-button class="w3-margin-top" @click="submit()" type="warning">Ответить</el-button> 
     <!-- <p>{{ curr_id }}</p>  -->
     <el-divider></el-divider>
     <el-steps :active="active" finish-status="success"  style="width: 90%; align-items: center;">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
        <el-step title="Step 4"></el-step>
        <el-step title="Step 5"></el-step>
        <el-step title="Step 6"></el-step>
        <el-step title="Step 7"></el-step>
      </el-steps>
       
     <el-divider></el-divider>
     <el-button @click="table = true" type="success">Список лучших участников</el-button>
    
     <el-dialog
          title="Сохранение результата"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <h3>Ваш результат : {{ col }} баллов</h3>
          <span>Введите свое имя</span>
          <span slot="footer" class="dialog-footer">
             <el-input v-model="fio" class="w3-margin-bottom" style="width: 80%; align-items: center;"></el-input>
            <br>
            <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
            <el-button @click="saveR()" type="success">Сохранить результат</el-button>
            
          </span>
     </el-dialog>
     <el-drawer
        title="Список лучших результатов"
        :visible.sync="table"
        direction="rtl"
        size="50%">
        <el-table :data="Rez">
          <el-table-column property="fio" label="Имя" width="150"></el-table-column>
          <el-table-column property="result" label="Баллы" width="200"></el-table-column>
        </el-table>
      </el-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'

export default {
  name: 'HomeView',
  data(){
    return {
       fio:'',
       answer:'',
       curr_q:'',
       curr_id:'',
       curr_a:'',
       array:[],
       table:false,
       dialogVisible: false,
       active:0,
       col:0
    }
  },
  computed: {
    Zag(){ return store.state.zag    },
    Rez(){ return store.state.rez.sort(function(a, b) { return b.result - a.result; });    },
  },
  methods:{
    addW(w){
      // console.log(w)
        this.answer = this.answer + w
    },
    checkQ(){
      this.col = 0
        for (let a of this.array){
          console.log(a.true_a + ' , '+a.user_a)
          if (a.true_a.toLowerCase()===a.user_a.toLowerCase()){ this.col++ }
        }
        
    },
    getQ(){
        if (this.array.length<=6){
          let q = this.Zag[Math.floor(Math.random()*this.Zag.length)];
        // this.curr_id = q.id
        this.curr_q = q.q
        this.curr_a = q.true_a
        this.answer = ''

        this.array.push({ q:this.curr_q, true_a:this.curr_a, user_a:this.answer   })
        this.active = this.array.length
        } 
    },
    submit(){
      if (this.answer.toLowerCase()===this.curr_a.toLowerCase()){
        this.$notify({
          title: 'Верно',
          message: 'This is a success message',
          type: 'success'
        });
      } else {
        this.$notify.error({
          title: 'Неверно',
          message: 'This is an error message'
        });
      }
      this.array[this.array.length-1].user_a = this.answer


    },
    handleClose(){
      document.location.reload()
    },
    end(){
      this.dialogVisible = true
      this.checkQ()
    },
    saveR(){
        store.dispatch('saveR', { fio:this.fio, result: this.col  })
        // setTimeout(document.location.reload(), 4000);
        // timeout reload
    }

  },
  // watch:{
  //   active(to){
  //     // console.log(to)
  //     // if (to===7){
  //     //   this.dialogVisible = true
  //     // }
  //   }
  // }
}
</script>
