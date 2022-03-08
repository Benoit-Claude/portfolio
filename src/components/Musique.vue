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
  },
   mounted(){
      var previousScroll = 0,
headerOrgOffset = $('#header').offset().top;

$('#header-wrap').height($('#header').height());

$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
    if(currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header').fadeOut();
        } else {
            $('#header').fadeIn();
            $('#header').addClass('fixed');
        }
    } else {
         $('#header').removeClass('fixed');   
    }
    previousScroll = currentScroll;
});

    function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
}
toggleMenu();
  }
}
</script>

<style scoped>

</style>