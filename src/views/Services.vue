<template>
    <div class="serv-wrapper">
    <section class="serv">
        <div class="container">
            <Breadcrumbs />

            <h2 class="serv-title">Комплексное лечение в одной медицинской сети</h2>

            <div class="serv-services">
                <div class="serv-card"
                  v-for = 'item in servDesc'
                  :key = 'item.img'
                >
                    <img class='serv-icon-img' :src="require(`../assets/img/services/${item.img}.png`)" alt="">
                    <p class='serv-desc'>{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="serv-cards">
        <div class="container">
            <p class="gen-title">
                Наши направления
            </p>
            <Directions 
                :dirArray = 'services'
            />
        </div>
    </section>
    </div>
</template>

<script>
import Directions from '@/components/Directions'
export default {
    name: 'Services',
    components:{Directions},
    data(){
        return{
            services: [
                {route: '/hinecology', title: 'Акушерство и гинекология', img: 'img1.png'},
                {route: '/pediatry', title: 'Педиатрия', img: 'img2.png'},
                {route: '/dentistry', title: 'Стоматология', img: 'img3.png'},
                {route: '/ophtalmology', title: 'Офтальмология',  img: 'img4.png'},
                {route: '/terapy', title: 'Терапия', img: 'img5.png'}
            ],
            servDesc: [
                {img: 'icon1', desc: 'Прием ведут детские и взрослые специалисты'},
                {img: 'icon2', desc: 'Все виды лабораторных исследований'},
                {img: 'icon3', desc: 'Оборудование экспертного класса'}
            ]
        }
    }
}
</script>

<style lang="scss">
.serv {
    padding-top: 88px;
    background-image: url('../assets/img/services/service.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 550px;

    &-title {
        color: #165cc8;
        font-size: 48px;
        font-weight: 400;
        margin: 80px 0;
        max-width: 720px;
    }
    &-card {
        display: flex;
        align-items: center;
    }
    &-icon-img {
        margin-right: 15px;
    }
    &-desc {
        max-width: 200px;
    }
    &-services {
        display: flex;
        width: 800px;
        justify-content: space-between;
    }
    &-cards {
        margin: 50px 0;
    }
}
</style>