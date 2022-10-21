export default {
  data() {
    return {
      cityName: null
    }
  },
  methods: {
    async onSubmit() {
      const city = {
        name: this.cityName
      }

      try {
        const response = await fetch("http://localhost:3000/city", {
          method: 'post',
          headers: {
            // on spécifie qu'on envoie du JSON
            'Content-Type': 'application/json'
          },
          // on convertit l'objet JS en texte JSON
          body: JSON.stringify(city)
        })
      }
      catch(error) {
        // handle error
      }

      this.$emit("create")
    }
  },
  template: `
    <form @submit.prevent="onSubmit">
      <label for="cityName">Nom</label>
      <input v-model="cityName" type="text" id="cityName" name="cityName">
    
      <button type="submit">Ajouter</button>
    </form>
  `
}