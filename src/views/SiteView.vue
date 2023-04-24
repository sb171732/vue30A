<template>
    <div class="">
       <h2> {{ getM($route.params.name)[0].name }}</h2>
       <div class="" v-if="$route.params.name==='home'" >
           <el-divider></el-divider>
           
           <h3>news</h3>
           <el-row :gutter="20">
                <el-col :span="16">
                    <el-row :span="24">
                            <el-col :span="12" v-for="n in News" :key="n.id" class="w3-padding">
                                <el-card class="w3-margin" style="padding-left: 0;padding-right: 0;">
                                    <el-image
                                            style="width: 100%; height: 400px"
                                            :src="n.img"
                                            fit="cover"></el-image>   
                                    <h3><b> {{ n.title  }}</b> </h3>
                                    

                                <!-- <img width="75%" height="350px" :src="n.img" alt=""> -->
                        
                                </el-card>
                            </el-col>
                    </el-row>
                    
                </el-col>
                <el-col :span="8" class="w3-padding">
                   <a v-for="b in Ban" :key="b.id" :href="b.url" target="_blank" >
                    <el-image  style="width: 70%; height: 200px;cursor: pointer;"
                              :src="b.img" fit="contain" ></el-image>   
                   </a> 
                   
                
                </el-col>
            </el-row>
           
       </div>
         <div class="" v-if="$route.params.name==='stud'" >
             <div style="width: 400px; margin: auto;">
                <el-input v-model="fio" class="w3-margin-bottom" placeholder="ФИО"></el-input>
                <el-input v-model="grup" class="w3-margin-bottom" placeholder="Группа"></el-input>
                <el-input v-model="kurs" class="w3-margin-bottom" placeholder="Курс"></el-input>
                <el-checkbox v-model="checkR" class="w3-margin-bottom"> С района </el-checkbox>
                <br><el-button @click="addUser()">Add</el-button>  
            </div>  

         <el-divider></el-divider>
         <el-table
                class="w3-margin w3-padding" 
                :data="Users"
                style="width: 80%">
                <el-table-column
                    prop="fio"
                    label="ФИО"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="grup"
                    label="Группа"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="kurs"
                    label="Курс"
                    width="80">
                </el-table-column>
<!-- ======================================================================= -->
                            <el-table-column
                                    fixed="right"
                                    label="Operations"
                                    width="120">
                                    <template slot-scope="scope">
                                        <el-button
                                        @click.native.prevent="deleteRow(scope.$index)"
                                        type="text"
                                        size="small">
                                        Remove
                                        </el-button>
                                    </template>
                            </el-table-column>

                            
<!-- ================================================================================== -->
                </el-table>
       </div>

       <div class="" v-if="$route.params.name==='par'" >
       <div v-for="z in Zag" :key="z.id" :index="z.id">{{ z.q }}</div>
       <input  type="input" id="inpt" placeholder="Ответ" style="border-radius: 10px; border: 1px solid green;" >
       </div>
    </div>
</template>
<script>
  
  import {store} from '../store'
export default {
    data(){
        return{
            fio:'',
            grup:'',
            kurs:'',
            checkR:false

        }
    },
    computed:{
        Menu(){ return store.state.menu},
        News(){ return store.state.news},
        Ban(){ return store.state.banners},
        Users(){ return store.state.users},
        Zag(){return store.state.zagadki}
       
    }
    ,
    methods:{
        addUser(){
            store.dispatch('addUser',{ fio:this.fio, grup:this.grup, kurs:this.kurs, checkR:this.checkR  })
        },
        getM(route){
            return this.Menu.filter((n)=>{ return n.route.match(route) })
        },
        deleteRow(id){
           console.log(this.Users[id])
           let del =  this.Users[id].id
            store.dispatch('delUser', del )
           
        }

    }
}
</script>