<template>
    <div class="review-slider">
        <button class="r-next-btn r-btn" @click='rPrev'><img src="../assets/img/prev.png" alt="prev"></button>
        <div class="rev-wrapper">
            <div class="rev-field" :style ="{transform: 'translateX(-'+ (position * 100) +'%)'}">
                <ReviewItem 
                    v-for='(rev, index) in GET_REVIEWS'
                    :key='index'
                    :review = 'rev'
                />
            </div>
        </div>
        <button class="r-next-btn r-btn" @click = 'rNext'><img src="../assets/img/more_btn.png" alt="next"></button>
    </div>
</template>

<script>
import ReviewItem from '@/components/ReviewItem'
import {mapGetters} from 'vuex'
export default {
    data() {
        return{
            position: 0
        }
    },
    computed: {
        ...mapGetters (['GET_REVIEWS'])
    },
    methods: {
        rPrev () {
            if (this.position <= 0) {
                this.position = 0
            } else {this.position --}
        },
        rNext () {
            if (this.position === this.GET_REVIEWS.length-1) {
                this.position = this.GET_REVIEWS.length-1
            } else {this.position ++}
        }
    },
    components: {ReviewItem}
}
</script>

<style lang="scss">
.rev-wrapper {
    min-width: 1200px;
    max-width: 1200px;
    overflow-x: hidden;
}
.rev-field {
    display: flex;
    transition: all ease .5s;
}
.review-slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.r-btn {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: solid 1px rgba(#165cc8, 0.15);
    background-color: transparent;
    outline: none;
    transition: .5s;
    cursor:pointer;

    &:hover {
        border: solid 1px rgba(#165cc8, 0.40);
    }
}
</style>