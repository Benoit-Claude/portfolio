<template>
    <div id="app">
        <main class="siteweb">


            <section class="cardsites" v-for="projet in liste" :key="projet.id">
                <div class="cardsi front-face">
                    <img :src="projet.acf.image.url" :alt="projet.acf.nom">
                </div>

                <div class="cardsi back-face">
                    <h2>{{projet.acf.nom}}</h2>
                    <router-link :to="{name: 'Projets', params: {id:projet.id}}"><button>Découvrir</button></router-link>
                </div>
            </section>

        </main>
    </div>
</template>

<script>
import param from '@/param/param'


export default {
  name: 'Site',
 
  data(){
      return{
          liste:[],
      }
  },
  created(){
      axios.get(param.host+"projet")
      .then(response=>{
          console.log("Reponse", response);
          this.liste = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
