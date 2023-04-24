<template>
  <div class="home">
    <h2>Home</h2>
               
     <el-button v-show="array.length<=4" @click="getQ">Следующий вопрос</el-button>   
     <el-button v-show="array.length>4" @click="getQ" disabled>Следующий вопрос</el-button>   
     <h2>{{ curr_q}}</h2>
     <el-input v-model="answer" style="width: 400px;" :placeholder="curr_a"></el-input><br>
     <el-button class="w3-margin-top" @click="submit()" type="warning">Ответить</el-button>  
     <el-divider></el-divider>
       <el-button @click="checkQ">Чек</el-button> Кол-во верных ответов: {{  col }}
     <el-divider></el-divider>
     <el-table :data="array"
                style="width: 80%">
                <el-table-column
                    prop="$index"
                    label="Номер"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="true_a"
                    label="Верный ответ"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="user_a"
                    label="Наш ответ"
                    width="80">
                </el-table-column>
     </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'

export default {
  name: 'HomeView',
  data(){
    return {
       answer:'',
       curr_q:'',
       curr_a:'',
       array:[],
       col:0
    }
  },
  computed: {
    Zag(){ return store.state.zag    },
  },
  methods:{
    checkQ(){
      this.col = 0
        for (let a of this.array){
          console.log(a.true_a + ' , '+a.user_a)
          if (a.true_a===a.user_a){ this.col++ }
        }
        
    },
    getQ(){
        if (this.array.length<=4){
          let q = this.Zag[Math.floor(Math.random()*this.Zag.length)];
        this.curr_q = q.q
        this.curr_a = q.true_a
        this.answer = ''

        this.array.push({ q:this.curr_q, true_a:this.curr_a, user_a:this.answer   })
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


    }
  }
}
</script>
