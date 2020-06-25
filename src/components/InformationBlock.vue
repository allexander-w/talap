<template>
  <div class="information">
    <div class="info-wrapper">
      <div class="info-text">
        <h4 class="info-text-title">Все для вашего здоровья!</h4>
        <p
          class="info-text-desc"
        >За 20 лет работы мы достигли результатов, которыми гордимся. Талап сегодня - это крупнейшая сеть медицинских центров в Западном Казахстане.</p>
        <p
          class="info-text-desc"
        >Если у вас есть вопрос, жалоба или предложение, обязательно обращайтесь и мы поможем.</p>
        <p class="info-text-desc">
          Дунаева Ольга Константиновна
          <br />Президент АО Талап
        </p>
        <div class="write-appear">
          <router-link to="/">Написать обращение</router-link>
        </div>
      </div>
      <div class="info-img">
        <img src="../assets/img/bitmap.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.write-appear {
    margin: 60px 0 40px 0;
  &::before {
    content: "";
    background-image: url("../assets/img/calendar.png");
    background-repeat: no-repeat;
    width: 14px;
    height: 16px;
    margin-right: 10px;
    display: inline-block;
  }
}
.info-wrapper {
  display: flex;
  align-items: center;
}
.info-text {
  margin-right: 35px;
}
.info-text-desc {
  min-width: 650px;
  max-width: 650px;
  padding-bottom: 35px;
  font-size: 18px;
  line-height: 1.33;
  color: #363636;
  font-weight: 400;
}
.info-text-title {
  font-size: 30px;
  font-weight: 400;
  color: #363636;
  max-width: 650px;
  margin-bottom: 40px;
}
.info-img {
  transform: translate(0, 0);
}
</style>