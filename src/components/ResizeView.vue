<template>
    <div class="">
      <h1> Текущая ширина экрана: {{ width }}</h1> 
      <h1> Тек высота:  </h1>
    
    
    </div>



</template>
<script>
export default{
  name:'ResizeView.vue',  
  data(){
    return {
      width:''  // ширина
    }
  },
  methods:{
    updateWidth() {  // метод для обновления ширины
        this.width = window.innerWidth;   // присваивание ширины
  },
  }
  ,
  created(){
    this.width = window.innerWidth
    window.addEventListener('resize', this.updateWidth);  // добавляем событие resize в приложение
  }
}




</script>