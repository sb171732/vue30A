<template>
    <div class="">
        <h2>{{ x }}</h2>
        <h2> {{ counter }} </h2>
        <button @click="fun" >Прибавить ++</button><br><br>
        <button @click="fun2" >Отнять --</button>
    </div>
</template> 
<script>

  export default{
    name:'OnClick',
    data(){
        return {
            x:'Обработка событий',  // string
            counter:0     // int
        }
    },
    methods:{
        fun(){
            //console.log('кнопка нажата');
            //alert('кнопка нажата')
             this.counter++
        },
        fun2(){
            this.counter--
        }
    }
  }


</script>