import FormCity from "./FormCity.js"

export default {
  components: {
    FormCity
  },
  data() {
    return {
      cities: null
    }
  },
  mounted() {
    this.fetchCities()
  },
  methods: {
    async fetchCities() {
      const response = await fetch("http://localhost:3000/cities")
      this.cities = await response.json()
    }
  },
  template: `
    <ul>
      <li v-for="(city, index) in cities" :key="index">{{ city.name }}</li>
    </ul>

    <button @click="fetchCities">fetchCities</button>

    <FormCity @create="fetchCities" />
  `
}