<template>
  <div class="home">
    <h2>Тывызыктар</h2>
               
     <el-button v-show="array.length<=6" @click="getQ">Чаа тывызык</el-button>   
     <el-button v-show="array.length>6" @click="end()" type="warning" plain>Дөгерер</el-button>   
     <h2>{{ curr_q}}</h2>
     <el-input v-model="answer" style="width: 400px;" ></el-input><br>
     <el-button @click="addW('ө')">ө</el-button>
     <el-button @click="addW('ң')">ң</el-button>
     <el-button @click="addW('ү')">ү</el-button>
     <el-button class="w3-margin-top" @click="submit()" type="warning">Харыылаар</el-button> 
     <!-- <p>{{ curr_id }}</p>  -->
     <el-divider></el-divider>
     <el-steps :active="active" finish-status="success"  style="width: 90%;" align-center="center">
        <el-step title="1-ги базым" style="text-align: center;"></el-step>
        <el-step title="2-ги базым"></el-step>
        <el-step title="3-кү базым"></el-step>
        <el-step title="4-кү базым"></el-step>
        <el-step title="5-ки базым"></el-step>
        <el-step title="6-гы базым"></el-step>
        <el-step title="7-ги базым"></el-step>
      </el-steps>
       
     <el-divider></el-divider>
     <el-button @click="table = true" type="success">Эң эки киржикчилерниң даңзызы</el-button>
    
     <el-dialog
          title=""
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <h3>Силерниң түңнелиңер : {{ col }} балл болган</h3>
          <span>Адыңар бижиңер</span>
          <span slot="footer" class="dialog-footer">
             <el-input v-model="fio" class="w3-margin-bottom" style="width: 80%; align-items: center;" placeholder="Адын бээр бижиир"></el-input>
            <br>
            <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
            <el-button @click="saveR()" type="success">Түңнелин бижитирер</el-button>
            
            
          </span>
     </el-dialog>
     <el-drawer
        title="Эң эки киржикчилерниң даңзызы"
        :visible.sync="table"
        direction="rtl"
        size="50%">
        <el-table :data="Rez" class="w3-padding">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="fio" label="Ады" width="150"></el-table-column>
          <el-table-column property="result" label="Түңү" width="200"></el-table-column>
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
          title: 'Шын',
          message: '',
          type: 'success'
        });
      } else {
        this.$notify.error({
          title: 'Меге',
          message: ''
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
        this.open()
    },
    open() {
        this.$alert( <bold>Туңнелиңер бижитинген</bold>, {
          dangerouslyUseHTMLString: true
        });
        
        setInterval(function(){ location.reload(); }, 2000);
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
<style>
/* .el-step__title.is-process{
  text-align: center;
}
.el-step__title.is-wait{
  text-align: center;
}
.el-step__title.is-success{
  text-align: center;
} */
</style>