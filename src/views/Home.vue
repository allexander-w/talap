<template>
  <div class="home">

    

    <section class='home-slider'>
      <div class="container contain-position">
        <Carousel 
          :sliderItems = 'slider'
        />
      </div>
    </section>
    <section class="directions">
      <div class="container">
        <p class="dir-title">
          Популярные направления
        </p>
        <Directions 
          :dirArray = 'directions'
        />
      </div>
    </section>
    <section class='appeal'>
      <div class="container">
        <information-block />
      </div>
    </section>
    <section class="doctors">
      <div class="container">
        <div class="doctors-wrapper">
          <h4 class="d-title-value">Наши специалисты</h4>
          <router-link to = '/'>Все врачи</router-link>
        </div>
        <Doctors />
      </div>
    </section>
    <section class="reviews">
      <div class="container">
        <h4 class="reviews-title">
          Искренние отзывы пользователей
        </h4>
        <Review />
      </div>
    </section>

    <section class="blog">
      <div class="container">
        <h4 class="blog-title gen-title">
          Блог о вашем здоровье
        </h4>
        <Blog />
      </div>
    </section>
    <section class="map">
      <GmapMap
        :center="{lat:51.244521, lng:51.413420}"
        :zoom="18"
        map-type-id="terrain"
        style="width: 100%; height: 700px"
      >

      </GmapMap>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Directions from '@/components/Directions'
import InformationBlock from '@/components/InformationBlock'
import Doctors from '@/components/Doctors'
import Review from '@/components/Review'
import Blog from '@/components/Blog'

export default {
  name: 'Home',
  data(){
    return {
      slider: [
        {route: '/uzi', title: 'УЗИ экспертного класса', subtitle: 'Ультразвуковая диагностика во всех клиниках ТАЛАП - это доступно, быстро, информативно и с комфортом'},
        {route: '/more', title: 'Какой-то тайтл', subtitle: 'Какое-то большое описание, про то, что клиника реально крутая, и лучше ее нет на свете.'},
        {route: '/more2', title: 'Еще какой-то тайтл', subtitle: 'Описание этого мощного информативного тайтла. Куча текста чтобы было приятнее смотреть на этот сайт пользователю'}
      ],
      directions: [
        {route: '/womanandchild', title: 'Женское и детское здоровье', desc: 'Какое-то описание', img: 'img1.png'},
        {route: '/diagnostic', title: 'Диагностика', desc: 'Какое-то описание', img: 'img2.png'},
        {route: '/dentistry', title: 'Стоматология', desc: 'Какое-то описание', img: 'img3.png'},
        {route: '/ophtalmology', title: 'Офтальмология', desc: 'Какое-то описание', img: 'img4.png'},
        {route: '/policlinic', title: 'Поликлиника', desc: 'Какое-то описание', img: 'img5.png'}
      ]
    }
  },
  components: {
    Carousel,Directions,InformationBlock,Doctors,Review,Blog
  }
}
</script>

<style lang='scss'>
.blog {
  background-color: rgba(#165cc8 , .06);
  min-height: 730px;
  padding-top: 50px;
  position: relative;
}
.reviews {
  margin-bottom: 120px;
}
.reviews-title{
  font-size: 30px;
  font-weight: 400;
}
.doctors{
  margin-bottom: 70px;
}
.doctors-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;
}
.d-title-value {
  font-size: 30px;
  font-weight: 400;
  color: #363636;
}
.home-slider {
  background-image: url('../assets/img/slider-copy.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
}
.contain-position {
  position: relative;
}
.dir-title {
  font-size: 30px;
  font-weight: 400;
  padding-top: 50px;
  margin-bottom: 35px;
  color: #363636;
}

.directions {
  margin-bottom: 70px;
}
.appeal {
  min-height: 550px;
}
</style>