import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () =>
      <div>
        <p>Hello Vue 3 with tsx <span>👋</span></p>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>
  }
})
