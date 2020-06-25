<template>
    <div class="doctor-item">
        <div class="doctor-show-part">
        <div class="doctor-img">
        </div>
            <div class="d-text-wrapper">
            <p class="doctor-surname">{{doctorItem.surname}}</p>
            <p class="doctor-name">{{ doctorItem.name }}</p>
            <p class="doctor-desc">{{ doctorItem.specialize }}</p>
            </div>
        </div>
        <div class="doctor-appointment">
           <router-link :to="`/doctors/${doctorItem.id}`"><button class="appointment-btn"><p class="d-btn-value">Записаться на прием</p></button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        doctorItem: {
            type: Object,
            default () {return {}}
        }
    }
}
</script>
<style lang="scss">
.d-text-wrapper {
    width: 200px;
    margin: 50px auto 0;
}
.doctor {
    &-surname {
        font-size: 18px;
        color: #363636;
    }
    &-name{
        font-size: 18px;
        color: #363636;
        margin-bottom: 10px;
    }
    &-desc {
        font-size: 14px;
        line-height: 1.14;
        color: #363636;
        font-weight: 400;
    }
     
}
.doctor-show-part {
    transition: all ease .5s;
}
.d-btn-value {
    &::before {
        content: '';
        background-image: url('../assets/img/calendar.png');
        background-repeat: no-repeat;
        display: inline-block;
        width: 14px;
        height: 16px;
        margin-right: 10px;
    }
}
.doctor-appointment {
    position: absolute;
    bottom: 0;
}
.appointment-btn {
    height: 60px;
    width: 252px;
    background-color: #fff5f6;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all ease .5s;
    transform: translate(0, 60px);
}
.doctor-img {
    width: 252px;
    height: 252px;
    background-color: blue;
}
.doctor-item {
    width: 252px;
    min-height: 450px;
    overflow: hidden;
    position: relative;
    transition: all ease .5s;

    &:hover {
        box-shadow: 0 0 30px 0 rgba(1, 94, 204, 0.08);
        .doctor-show-part {
            transform: translate(0, -60px);
        }
        .appointment-btn {
            transform: translate(0, 0);
        }
    }
}
</style>