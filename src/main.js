import Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css'
import './assets/images/bg.jpeg'
import './assets/styles/testStylus.styl'
import './assets/styles/global.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
