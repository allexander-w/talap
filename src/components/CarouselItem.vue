<template>
  <div class="carousel-item">
    <div class="c-wrapper">
      <div class="c-item-title">{{ cObject.title }}</div>
      <div class="c-item-desc">{{ cObject.subtitle }}</div>
    </div>
    <div class="slider-btn">
        <router-link :to="cObject.route">
            <p class="more-btn">Подробнее</p>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cObject: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss">
    .slider-btn {
        margin-top: 100px;
    }
    .more-btn {
        text-align: center;
        background-color: rgba(#d61000, 0.08);
        min-width: 100px;
        max-width: 180px;
        padding: 12px 0;
        color: #165cc8;

        &::after {
            content: '';
            background-image: url(../assets/img/more_btn.png);
            background-repeat: no-repeat;
            width: 10px;
            height: 14px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 15px;
        }
    }
    .c-item-desc {
        max-width: 650px;
        line-height: 1.25;
        font-weight: 400;
    }
    .c-item-title{
        color: #165cc8;
        font-size: 48px;
        font-weight: 400;
        margin-bottom: 35px;
    }
    .carousel-item {
         min-width: 100%;
        min-height: 500px;
    }
    .c-wrapper {
        padding-top: 200px;
    }
</style>