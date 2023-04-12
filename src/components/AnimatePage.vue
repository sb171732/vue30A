<template>
    <div class="">
        <div id="demo">
        <button @click="show = !show">
            Переключить отрисовку
        </button>

        <transition name="slide-fade">
            <p v-if="show">привет</p>
            <div v-if="show" class="box"></div>
        </transition>
</div>
    </div>
</template>
<script>

export default {
    data() {
        return{
            show: true
        }
    },
}
</script>
<style>
.box{
    width: 500px;
    height: 500px;
    color: red;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>