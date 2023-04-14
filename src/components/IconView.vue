<template>
    <div class="">
        <i class="el-icon-star-off w3-text-yellow s1" style="font-size: xxx-large;"></i>
        <i class="el-icon-star-off w3-text-yellow" style="font-size: xxx-large;"></i>
        <i class="el-icon-star-off w3-text-yellow" style="font-size: xxx-large;"></i>
        <i class="el-icon-star-off w3-text-yellow" style="font-size: xxx-large;"></i>
        <i class="el-icon-star-off w3-text-yellow" style="font-size: xxx-large;"></i>
        <el-divider></el-divider>
        <el-rate v-model="value1" @change="v"></el-rate>
        <el-input v-model="value2"  @input="v2"></el-input>
</div>
</template>
<script>

export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    },
    methods:{
        v(){
            console.log(this.value1)
        },
        v2(){
            console.log(this.value2)
        }
    }

  }</script>
<style>
   .s1{
    background-color: yellow;
   }

</style>