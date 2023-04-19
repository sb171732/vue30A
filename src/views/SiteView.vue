<template>
    <div class="">
       <h2> {{ getM($route.params.name)[0].name }}</h2>
       <div class="" v-if="$route.params.name==='home'" >
           <el-divider></el-divider>
           <h3>news</h3>
           <el-row>
                <el-col :span="12" v-for="n in News" :key="n.id">
                    <el-card>
                           <h3> {{ n.title  }} </h3>
                           <el-image
                                style="width: 500px; height: 400px"
                                :src="n.img"
                                fit="cover"></el-image>

                     <!-- <img width="75%" height="350px" :src="n.img" alt=""> -->
               
                    </el-card>
                </el-col>
               
               
           </el-row>
       </div>

    </div>
</template>
<script>
  
  import {store} from '../store'
export default {
    computed:{
        Menu(){ return store.state.menu},
        News(){ return store.state.news},
    }
    ,
    methods:{
        getM(route){
            return this.Menu.filter((n)=>{ return n.route.match(route) })
        }
    }
}
</script>