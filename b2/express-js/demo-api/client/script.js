import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import Cities from "./components/Cities.js"

createApp({
  components: {
    Cities
  },
  template: `
    <h1>Mon app</h1>

    <Cities />
  `
}).mount("#app")