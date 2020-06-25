<template>
  <div id="app">
    <component :is='layout' /> 
  </div>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import MobileLayout from '@/layouts/MobileLayout'

export default {
  components: {DefaultLayout, MobileLayout},
  computed: {
    layout(){
     return 'DefaultLayout'
    }
  }
}
</script>

<style lang="scss">
@import './assets/style';
#app {
  overflow-x: hidden;
}
.gen-title {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 35px;
  color: #363636;
}

</style>
