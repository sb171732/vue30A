<template>
    <div>
         <input type="text" v-model="fio">
         
         <select v-model="kurs" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
         </select>
         
         <h2>ФИО : {{ fio }}</h2>
         <h2>Курс:  {{ kurs }}</h2>
    </div>
  </template>
  <script>
  export default {
    name: 'VModel',
    data(){
      return{
          fio:'',
          kurs:''
      }
    }
  }
  </script>
  
  <style>  
  </style>
  