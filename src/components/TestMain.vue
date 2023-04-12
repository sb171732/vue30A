<template>
    <div class="">
             <div class="w3-padding w3-border">
                    <input class="w3-margin-bottom" type="text" v-model="fio" placeholder="Введите имя"><br>
                    Выбрать курс:<select v-model="kurs" id="" >
                                  <option value="1">1</option> <option value="2">2</option>
                         <option value="3">3</option><option value="4">4</option>
                    </select><br><br>
                    <button @click="add()">Добавить</button>
             </div>
             <div class="w3-border">
                   <h3>users list:</h3>
                   <!-- Вывести пользователей     -->

             </div>
    </div>
</template>
<script>
export default {
    name:'TestMain',
    data(){
        return {
            fio:'',
            kurs:'',
            users:[]
        }
    },
    methods:{
        add(){
            // сделать проверку на ввод пустых данных i
            // if (    ){
            //      alert("Введите данные !")
            // } else {
            //     this.users.push({ fio:this.fio, kurs:this.kurs })
            // }
           
            console.log(this.users)
        }
    }

}
</script>