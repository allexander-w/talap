<template>
    <div class="blog-item" :style="{backgroundImage: 'url('+require('../assets/img/blog/'+blogItem.img+'.png')+')'}">
        <div class="blog-description-panel">
            <h4 class="blog-panel-title">{{ blogItem.title }}</h4>
            <p class="blog-panel-desc">{{ blogItem.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blogItem: {
            type: Object,
            default () {return {}}
        }
    }
}
</script>

<style lang="scss">
.blog-panel-title{
    opacity: 0.7;
    font-size: 14px;
    color: #363636;
    margin-bottom: 20px;
    font-weight: 400;
}
.blog-panel-desc { 
    font-size: 20px;
    line-height: 1.3;
    color: #363636;
}
.blog-item {
    background-size: cover;
    width: 300px;
    height: 450px;
    position: relative;
    transition: all ease .5s;

    &:hover {
        width: 420px ;
    }
}
.blog-description-panel {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    min-height: 200px;
    padding: 30px;
    background-color: #fff;
}
</style>