<template>
  <div class="about">
       
       <el-row>    
             <el-col class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
       </el-row>
       <el-row>    
             <el-col :span="12" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="12" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
       </el-row>
       <el-row>    
             <el-col :span="8" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="8" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="8" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
       </el-row>
       <el-row>    
             <el-col :span="6" class="w3-padding w3-border">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="6" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="6" class="w3-padding w3-border">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="6" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
       </el-row>
       <el-row>    
             <el-col :span="4" class="w3-padding w3-border">
              <h3>Critical Analysis essay 1</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="4" class="w3-padding">
              <h3>Critical Analysis essay 2</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="4" class="w3-padding w3-border">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="4" class="w3-padding">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="4" class="w3-padding w3-border">
              <h3>Critical Analysis essay</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
             <el-col :span="4" class="w3-padding">
              <h3>Critical Analysis essay 6</h3>
              <p>Students studied The Importance of Being Earnest and wrote essays focusing on the main characters.</p>
             </el-col>
            
       </el-row>
       
     
  </div>
</template>
<script>
   export default {
    data(){
      return{
        drawer:false,
        count: 0
      }
    },
    methods:{
      
      openD(){
        this.drawer = !this.drawer
      },
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },
      w(){
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      }

    }
   }
</script>