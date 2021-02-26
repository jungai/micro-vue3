import { defineComponent } from 'vue'
import './global.css'

export default defineComponent({
  setup () {
    return () =>
      <div>
        <h1 class="text-lg underline text-red-400">Hello Vue 3 with tsx <span>👋</span></h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>
  }
})
