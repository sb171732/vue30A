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

    </div>
</template>
<script>
  
  import {store} from '../store'
export default {
    computed:{
        Menu(){ return store.state.menu},
        News(){ return store.state.news},
        Ban(){ return store.state.banners},
    }
    ,
    methods:{
        getM(route){
            return this.Menu.filter((n)=>{ return n.route.match(route) })
        }
    }
}
</script>