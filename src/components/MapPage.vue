<template>
    <div class="">
        <ul>
            <li><a href="#" @click="goto([51.702484, 94.424201])">ТТИТ</a> </li>
            <li><a href="#" @click="goto([51.706498, 94.422274])">Автодор</a> </li>
            <li><a href="#" @click="goto([])">Сельхоз</a> </li>
        </ul>
        <yandex-map :coords="coords" :zoom="17" style="height:500px"> 
                     <ymap-marker  
                        :coords="coords" 
                        :marker-id="123" 
                      />
            </yandex-map>
    </div>
</template>
<script>
import { yandexMap } from 'vue-yandex-maps'
export default {
    components:{
        yandexMap,
        //ymapMarker
    },
    data() {
        return{
            coords: [51.719890, 94.437990]
        }
    },
    methods:{
        goto(coord){
            this.coords = coord
        }
    }
}
</script>









 <!-- <ymap-marker v-for="s of filterCoords" :key="s.id"  
                        :coords="getCoord(s.k1,s.k2)" 
                        :marker-id="s.id" 
                         @click="openinfo(s)"
                        :icon="getMarkerIcon(s.name)"
                        
                      /> -->