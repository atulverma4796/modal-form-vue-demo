// import { createApp } from 'vue'
// import App from './App.vue'
// import 'bootstrap'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faAngleDown)
// library.add(faAngleUp)


// createApp.component('font-awesome-icon', FontAwesomeIcon)


// createApp(App).mount('#app')
import {createApp} from 'vue'
import App from './App'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).mount('#app')