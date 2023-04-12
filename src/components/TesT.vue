<template>
    <div class="">
              
               <tr v-for="t in arr2" :key="t.id">
                    <td class="w3-border w3-padding"><h3>userId: {{ t.id }}</h3></td>
                    <td class="w3-border w3-padding"> <h3>title: {{ t.title }}</h3></td>
                    <td class="w3-border w3-padding"><h3>completed: {{ t.completed }}</h3></td>
               </tr>
    </div>
</template>
<script>
       export default {
        name:'TesT',
        data(){
            return {
                m:'Hello world wefwef',
                arr:[]
            }
        },
        computed:{   // вычисляемые свойства
            arr2(){
                return this.arr.filter((n)=>{ return n.id<50   })  // вычисление = фильтр массива arr
            }
            ,
        },
        created(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json())
                    .then(json =>  this.arr = json)

        }
       }
</script>
<style>
           /*  css  */
</style>