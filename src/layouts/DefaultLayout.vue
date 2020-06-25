<template>
  <div class="default">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {Header, Footer}
}
</script>

<style lang="scss">
.main-content {
  margin-bottom: 40px;
}
</style>