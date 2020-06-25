<template>
    <div class="doctors-id">
        <section class="doc-info">
            <div class="container">
                <Breadcrumbs />
                
                <div class="doc-info-title">
                    <h2 class="doc-surname"> {{ doc.surname }} </h2>
                    <h2 class="doc-name">{{ doc.name }}</h2>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    computed: {
        doctorId(){
            return +this.$route.params.id
        },
        doc () {
             return this.$store.getters.GET_ID_DOCTOR(this.doctorId)
        }
    }
}
</script>

<style lang="scss">
.doc-info {
    padding-top: 88px;
    min-height: 710px;
    background-color: rgba(#165cc8, 0.06);
}

</style>