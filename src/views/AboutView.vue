<template>
  <div class="about">
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" @click="openD">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="w3-margin-top">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain @click="open1">Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain @click="w">Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>
     <el-row class="w3-margin-top">
      <el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
     </el-row>

      <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      size="50%"
      :with-header="false">
      <span>Hi there!</span>
      <el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
</el-drawer>

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