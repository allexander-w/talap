<template>
    <div class="carousel">
        <div class="carousel-wrapper" :style="{ transform: 'translateX( -'+ (100 * curSl) +'% )' }">
            <carousel-item 
                v-for = '(item, index) in sliderItems'
                :key = 'index'
                :cObject = 'item'
            />

        </div>
        <div class="buttons-slider">
            <button @click='prev' class="prev-btn"><img src="../assets/img/prev.png" alt=""></button>
            <button @click='next' class="next-btn"><img src="../assets/img/more_btn.png" alt=""></button>
        </div>
    </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem'

export default {
    data(){
        return {
         curSl: 0
        }
  },
    props: {
        sliderItems: {
            type: Array,
            default: () => []
        }
    },
    components: {
        CarouselItem
    },
    methods: {
        next(){
            if (this.curSl === this.sliderItems.length - 1 ) {
                this.curSl = 0;
            } else {this.curSl ++}
        },
        prev() {
            if(this.curSl === 0) {
                this.curSl = this.sliderItems.length - 1
            } else {this.curSl --}
        }   
    },
    mounted(){
        setInterval (()=>{
            this.next()
        }, 5000)
    }
}
</script>

<style lang="scss">
.carousel-wrapper {
    display: flex;
    transition: all ease 1s;
}
.carousel {
    overflow-x: hidden;
}
.prev-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 15px 19px 12px 18px;
    outline: none;

    &:hover {
        border: 1px solid rgba(#165cc8, 0.2);
        border-radius: 5px;
        background-color: rgba(#165cc8, 0.08);
    }
}
.next-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 15px 18px 12px 19px;
    outline: none;

    &:hover {
        border: 1px solid rgba(#165cc8, 0.2);
        border-radius: 5px;
        background-color: rgba(#165cc8, 0.08);
    }
}
.buttons-slider {
    position: absolute;
    right: 0;
}
</style>