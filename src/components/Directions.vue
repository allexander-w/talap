<template>
    <div class="directions-main">
        <directions-item 
            v-for = '(item,i) in dirArray'
            :key='i'
            :dirObject = 'item'
        />
    </div>
</template>

<script>
import DirectionsItem from '@/components/DirectionsItem'
export default {
    props: {
        dirArray: {
            type: Array,
            default: ()=>[]
        }
    },
    components: {DirectionsItem}
}
</script>

<style lang="scss">
    .directions-main {
        display: flex;
    }
</style>