<template>
  <div class="main-header">
    <section class="preheader">
      <div class="container preheader-wrapper">
        <div class="preheader-contacts">
          <p class="pheader-contact-number">8 (7112) 247 300</p>
          <p class="pheader-wa-number">8 (7112) 247 300</p>
        </div>
        <div class="pheader-navigation">
          <ul class="pheader-nav">
            <li class="pheader-nav-item"
                v-for='(fnavItem, ind) in firstNav'
                :key='ind'
            >
              <router-link :to='fnavItem.route' class="pheader-nav-link">{{ fnavItem.title }}</router-link>
            </li>
          </ul>
        </div>

        <div class="pheader-languages">
          <p>
            Язык сайта:
            <a href="#">Рус</a> /
            <a href="#">Каз</a> /
            <a href="#">Анг</a>
          </p>
        </div>
      </div>
    </section>
    <header class="header">
      <div class="container header-wrapper">
        <div class="header-logo">
          <div class="header-bitmap-logo">
           <router-link to='/'> <img src="@/assets/img/svg/logo.svg" alt="bmlogo" /></router-link>
          </div>
          <div class="header-text-logo">
            <img src="#" alt="ТАЛАП" />
            <p class="header-logo-losung">Сеть медицинских центров</p>
          </div>
        </div>
        <nav class="header-nav">
          <ul class="header-navigation">
            <li class="header-menu-item"
                v-for='(menuItem, i) in secondNav'
                :key='i'
            >
              <router-link :to='menuItem.route' class="header-menu-link">{{ menuItem.title }}</router-link>
            </li>
            
          </ul>
        </nav>
        <div class="header-contacts">
          <div class="header-number">
            <p class="header-contact-number">+7 (7112) 247 300</p>
          </div>
          <div class="header-btn">
            <div class="btn-wrapper">
              <div class="header-appointment-icon">
                <img src="@/assets/img/calendar_3.png" alt="calendar" />
              </div>
              <div class="header-appointment-text">
                <p class="header-text">Записаться на прием</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
    data () {
        return { 
            secondNav: [
                {title: 'Направления', route: '/services'},
                {title: 'Врачи', route: '/doctors'},
                {title: 'Цены', route: '/price'},
                {title: 'Центры', route: '/centers'},
                {title: 'О нас', route: '/about'}
            ],
            firstNav: [
                {title: 'Интернет аптека', route: '/e-pharmacy'},
                {title: 'Написать обращение', route: '/write-appeal'},
                {title: 'Корпоративным клиентам', route: '/corporate-clients'},
            ]
        }
    },
    mounted(){
      window.addEventListener ('scroll', ()=> {
      const header = document.querySelector('.header-wrapper')

      if (window.pageYOffset >= 85) {
        header.classList.add('active-header')
      }else {
        header.classList.remove('active-header')
      }
      })
    }
}
</script>

<style lang="scss">
  .active-header {
    z-index: 99;
    min-width: 100%;
  }
</style>