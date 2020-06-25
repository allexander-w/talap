import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import * as VueGoogleMaps from 'vue2-google-maps'
import VueBreadcrumbs from 'vue-2-breadcrumbs'

Vue.use(VueBreadcrumbs)

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCQ2qcDTKfXiVdjzUdExHTqZQ6yID9kr1M",
  authDomain: "talap-med.firebaseapp.com",
  databaseURL: "https://talap-med.firebaseio.com",
  projectId: "talap-med",
  storageBucket: "talap-med.appspot.com",
  messagingSenderId: "237326240810",
  appId: "1:237326240810:web:27f04f8d0424b26f510753",
  measurementId: "G-8WQWYVNH1J"
});



new Vue({
      router,
      store,
      render: h => h(App) 
  }).$mount('#app')