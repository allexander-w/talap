<template>
    <div class="blog-main">
        <div class="blog-wrapper">
            <BlogItem 
                v-for = '(blogItem, index) in GET_BLOG'
                :key = 'index'
                :blogItem = 'blogItem'
            />
        </div>

        <button class = 'blog-more-btn'>Показать еще</button>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
import { mapGetters } from 'vuex'

export default {
    name: 'Blog',
    components: {BlogItem},
    computed: {
        ...mapGetters(['GET_BLOG'])
    }
}
</script>

<style lang="scss">
.blog-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.blog-more-btn {
    min-width: 128px;
    height: 36px;
    border-radius: 5px;
    border: solid 1px rgba(#165cc8, 0.2);
    position: absolute;
    bottom: 50px;
    right: 50%;
    left: 50%;
    transform: translate(-50%,0);
    cursor: pointer;
    background-color: transparent;

    font-size: 16px;
    color: #015ecc;
    font-weight: 500;
    transition: .5s;

    &:hover {
        border: solid 1px rgba(#165cc8, 1);
    }
}
</style>