<template>

    <div id="app">

        
            <div class="projets" v-for="projet in liste" :key="projet.id">
                <div v-if="projet.id == Projet">
                    <h2>{{projet.acf.nom}}</h2>
                    <p>{{projet.acf.description}}</p>
                    <img :src="projet.acf.image.url" :alt="projet.acf.nom">
                    <br>
                    <a v-if="projet.acf.lien != null" :href="projet.acf.lien" target="_blank"><button> Aller sur le site</button></a>
                </div>
            </div>

    </div>  
</template>

<script>

import param from '@/param/param'

export default {
    name: 'Projets',
    data (){
        return{ 
            liste: [],
        }
    },
    created(){
      this.Projet = this.$route.params.id
      axios.get(param.host+"projet")
      .then(response=>{
          console.log("Reponse", response);
          this.liste = response.data;
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


    .projets{
        margin: 15vh 0;
        text-align: center;
    }

    .projets div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }



    img {
        width: 350px;
    }

    button {
        text-align: center;
        margin: 20px 0;
        padding: 10px;
        text-decoration: none;
        color: #f2f2f2;
        background-color: #5b0606;
        width: 120px;
        border-radius: 10px; 
        cursor: pointer; 
    }

</style>