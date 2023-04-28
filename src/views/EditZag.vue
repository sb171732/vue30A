<template>
    <div class="">
        <h1> {{ Zag[num] }}</h1>
         <br>
         <br>
         <br>
         <br>
         <el-button @click="numEdit" type="danger" class="w3-margin-right">getZag</el-button>
         <el-button @click="numEdit2" type="danger" class="w3-margin-right">Назад</el-button>
         <el-input v-model="hint" style="width: 80%;"></el-input>
         <br>
         {{ num }}
         <br>
         <el-button @click="updHint" type="success" class="w3-margin-right">Update hint</el-button>
         
    </div>
</template>
<script>
import { store } from '@/store'
    
    export default{
        data(){
            return {
               num: 0,
               hint:''
            }
        },
        computed:{
            Zag(){ return store.state.zag },
           
        }
        ,
        methods:{
           numEdit(){
                this.num = this.num +1
                this.hint = ''
           },
           numEdit2(){
                this.num = this.num -1
                this.hint = ''
           },
           updHint(){
               store.dispatch('updateZag', { id:this.Zag[this.num].id, doc:{ q: this.Zag[this.num].q, true_a: this.Zag[this.num].true_a, hint: this.hint    } })
           }


        },
        
    } 

</script>
