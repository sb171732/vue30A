<template>
    <div id="example">
            <p>Изначальное сообщение: «{{ message }}»</p>
            <p>Сообщение задом наперёд: «{{ reversedMessage }}»</p>
            <p>Сообщение задом наперёд c пом метода: «{{ rMessage() }}»</p>
            <p>Дата: «{{ now }}»</p>
      </div>
</template>
<script>
    export default {
        name: 'VC',
        data() {
            return{
                message: 'Привет'
            }
        },
        computed: {
            reversedMessage: function () {
              return this.message.split('').reverse().join('')
            },
              now: function () {
                return Date.now()
            }
        },
        methods:{
            rMessage: function () {
             return this.message.split('').reverse().join('')
            }
        }
        }

</script>