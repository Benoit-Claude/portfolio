<template>

  <div id="app">
      <section class="musique">
        <div class="contain">
            <div class="cardmus" id="musiq" v-for="musique in listemusique" :key="musique.id">
                <img src="../../static/img/ciel.jpg" alt="">
                <a v-if="musique.acf.lien != null" :href="musique.acf.lien" target="_blank"><h2>{{musique.acf.nom}}</h2></a>
            </div>
        </div>
    </section>
  </div> 
</template>

<script>
import param from '@/param/param'
export default {
  name: 'Musique',
  data () {
    return {
        listemusique:[],
    }
  },
  created(){
      axios.get(param.host+"musique")
      .then(response=>{
          console.log("Reponse", response);
          this.listemusique = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>