<template>
    <div id="app">
          <tr>
            <th class="w3-padding">#: </th>
            <td class="w3-padding">FIO: </td>
            <td class="w3-padding">Kurs:</td>
            <td class="w3-padding">Group</td>
            <td class="w3-padding">Ocenka:</td>
           </tr>
           <tr v-for="(u,i) in user" :key="i">
              <td class="w3-padding w3-border">{{ i }}</td>
              <td class="w3-padding w3-border">{{ u.fio }}</td>
              <td class="w3-padding w3-border">{{ u.kurs }}</td>
              <td class="w3-padding w3-border">{{ u.group }}</td>
              <td class="w3-padding w3-border">{{ u.ocenka }}</td>
           </tr>
    </div>
  </template>
  <script>
  export default {
    name: 'ForTable',
    data(){
      return{
          user:[
            {  fio:'Ай-Хулер', kurs:'3', group:'30A', ocenka:'4',   },
            {  fio:'Айыжы', kurs:'2', group:'30A', ocenka:'4',   },
            {  fio:'Екатерина', kurs:'3', group:'30A', ocenka:'5',   },
            {  fio:'Шулуу', kurs:'3', group:'30A', ocenka:'4',   },
            {  fio:'Олеся', kurs:'3', group:'30A', ocenka:'5',   },
          ]
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  
  
  </style>
  