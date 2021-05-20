import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

//import font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//global base-components
import BaseButton from './components/ui/BaseButton.vue'
import BaseBadge from './components/ui/BaseBadge.vue'

//global styles
import './assets/main.css'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)

//font-awesome
library.add(faUserCircle)
library.add(faComments)
library.add(faTimesCircle)
library.add(faUserEdit)
app.component('font-awesome-icon', FontAwesomeIcon)

let mounted

projectAuth.onAuthStateChanged(() => {
  if (!mounted) {
    mounted = app.use(router).mount('#app')
  }
})
