<template>
  <div class="r-item">
    <div class="r-item-wrapper">
      <div class="r-reviewer-info">
        <img src="../assets/img/rectangle.png" alt="IMG" />
        <div class="r-text-info">
          <p class="r-name">{{ review.name }}</p>
          <p class="r-date">{{ review.date }}</p>
        </div>
      </div>
      <p class="r-desc-value">{{ review.review }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss">
.r-item-wrapper {
  position: relative;
}
.r-reviewer-info {
  margin-left: 60px;
}
.r-name {
  font-size: 18px;
  color: #363636;
}
.r-date {
  font-size: 14px;
  color: #afafaf;
  font-weight: 400;
}
.r-item {
  min-height: 300px;
  min-width: 100%;
  display: flex;
  align-items: center;
}
.r-reviewer-info {
  display: flex;
  align-items: center;
}
.r-text-info {
  margin-left: 30px;
}
.r-desc-value {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.35;
  color: #232323;
  margin-left: 60px;
  padding-top: 35px;
  &::before {
    content: "";
    background-image: url("../assets/img/copy-8.png");
    background-repeat: no-repeat;
    width: 24px;
    height: 17px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
}
</style>