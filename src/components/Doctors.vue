<template>
    <div class="doctor-cards">
        <DoctorItem 
            v-for = '(doctor, index) in GET_DOCTORS'
            :key='index'
            :doctorItem = 'doctor'
        />
    </div>
</template>

<script>
import DoctorItem from '@/components/DoctorItem'
import { mapGetters } from 'vuex'
export default {
    components: {DoctorItem},
    computed: {
        ...mapGetters (['GET_DOCTORS'])
    }
}
</script>

<style lang="scss">
.doctor-cards {
    display: flex;
    justify-content: space-between;
}
</style>