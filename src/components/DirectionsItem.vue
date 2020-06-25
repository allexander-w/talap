<template>
  <div class="dir-item">
    <div class="dir-wrapper">
        <div class="show-block">
            <img :src="require('../assets/img/'+ dirObject.img)" alt />
            <div class="dir-item-title">
                <p class="dir-item-title-value">{{dirObject.title}}</p>
            </div>
        </div>
        <div class="unshow-block">
      <div class="dir-item-desc">
        <p class="dir-item-desc-value">{{dirObject.desc}}</p>
      </div>
      <div class="dir-more-btn">
        <router-link :to="dirObject.route">Подробнее +</router-link>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dirObject: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss">

.dir-item {
  width: 272px;
  min-height: 370px;
  border: 1px solid rgba(#165cc8, 0.08);
  padding: 50px;
  position: relative;
  transition: all ease .5s;

  &:hover {
    box-shadow: 0 2px 25px 0 rgba(0,0,0, 0.08);
    display: block;
    .unshow-block {
        opacity: 1;
    }
    .show-block {
        transform: translate(0, 0);
    }
  }
}
.dir-item-title {
  margin: 50px 0 20px 0;
  &-value {
      font-size: 20px;
      color: #363636;
  }
}
.dir-item-desc {
    &-value {
        font-size: 15px;
        line-height: 1.2;
        color: #232323;
        padding-bottom: 50px;
    }
}
.show-block {
    transform: translate(0, 50px);
    transition: all ease .5s;
}
.unshow-block {
    opacity: 0;
    transition: all ease .5s;
}
.dir-more-btn {
  position: absolute;
  bottom: 50px;
}
</style>