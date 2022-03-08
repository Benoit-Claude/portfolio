<template>
  <div class="app">

      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>
      <main>
          

        <section class="intro">
            <div class="bonjour">
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Vous trouverez ici l'intégralité de mes travaux, projets et créations personnels et scolaires</p>
            </div>
            <div class="container">
                <div class="carousel">
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                  <div class="carousel__face"><span></span></div>
                </div>
              </div>
        </section> 

        

        <section class="pages">
            <div class="cards">
                <div class="card card-1">
                    <div class="imgcard"><h2>Sites Web</h2><img src="../../static/img/mmi.jpg" alt=""></div>
                    <router-link to="/site" href="site.html" class="button">Découvrir</router-link>
                </div>
                <div class="card card-2">
                    <div class="imgcard"><h2>Design</h2><img src="../../static/img/logoaz.jpg" alt=""></div>                  
                    <router-link to="/design" href="design.html" class="button">Découvrir</router-link>
                </div>
                <div class="card card-3">
                    <div class="imgcard"><h2>Musique</h2><img src="../../static/img/musiq.jpg" alt=""></div>
                    <router-link to="/musique" href="musique.html" class="button">Découvrir</router-link>
                </div>
            </div>
        </section>

        <section class="presentation">
            <h1>Qui suis-je ?</h1>
            <div class="apropos">
                <div class="imgmoi">
                    <img src="../../static/img/IMG_3300.png" alt="">
                </div>
                <div class="textepres">
                    <p>Étudiant en 2e année de DUT Métiers du Multimédia et de l'internet</p>
                    <p>Passionné par l'art, la musique et l'informatique</p>
                    <p>Je passe la plupart de mon temps sur des logiciels de création ou à écouter de la musique</p>
                    <p>J'aime le travail de groupe et la confrontation d'idée, c'est de là que vient le génie</p>
                </div>
            </div>
            <div class="competences">
                <div class="logiciels" >
                    <h2 onclick="montre();">Logiciels</h2>
                    <div id="log">
                        <p>Illustrator</p>
                        <div class="jauge" ></div><div class="barre barre1"></div>
                        <p>Photoshop</p>
                        <div class="jauge" ></div><div class="barre barre2"></div>
                        <p>InDesign</p>
                        <div class="jauge" ></div><div class="barre barre3"></div>
                        <p>Fl Studio</p>
                        <div class="jauge" ></div><div class="barre barre4"></div>
                    </div>
                </div>
                <div class="languages">
                    <h2 onclick="montre2();">Languages</h2>
                    <div id="lang">
                        <p>HTML</p>
                        <div class="jauge" ></div><div class="barre barre5"></div>
                        <p>CSS</p>
                        <div class="jauge" ></div><div class="barre barre6"></div>
                        <p>JavaScript</p>
                        <div class="jauge" ></div><div class="barre barre7"></div>
                        <p>PHP</p>
                        <div class="jauge" ></div><div class="barre barre8"></div>
                    </div>
                </div>
                <div class="compet"> 
                    <h2 onclick="montre3();">Compétences</h2>
                    <div id="compt">
                        <p>Design</p>
                        <div class="jauge"></div><div class="barre barre9"></div>
                        <p>Communication</p>
                        <div class="jauge"></div><div class="barre barrea"></div>
                        <p>Réseaux Sociaux</p>
                        <div class="jauge"></div><div class="barre barreb"></div>
                        <p>Audiovisuel</p>
                        <div class="jauge"></div><div class="barre barrec"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="parcours">
            <h1>Mon parcours</h1>
            <div class="parcs">
                <div class="parc parc-1">
                    <div class="imgparc"><img src="../../static/img/sm.png" alt=""><h2>Le lycée</h2><p>J'ai passé mes années de lycée dans un pensionnat en Bretagne. 
                        Ces années m'ont permis de me développer dans différents domaines. Ils m'ont aussi...</p></div>
                    <a class="button2" v-on:click="toggleModale">Lire la suite</a>
                </div>
                <div class="parc parc-2">
                    <div class="imgparc"><img src="../../static/img/ENC.png" alt=""><h2>Début des études</h2><p>Après le baccalauréat, j'ai eu envie de découvrir le monde de la finance et de la comptabilité, car cela m'intéressait et j'en entendait beaucoup parler...</p></div>                  
                    <a class="button2" v-on:click="toggleModale1">Lire la suite</a>
                </div>
                <div class="parc parc-3">
                    <div class="imgparc"><img src="../../static/img/deptmmi.png" alt=""><h2>DUT MMI</h2><p>Finalement j'ai trouvé la formation qui me convient. Le DUT MMI m'a offert une formation complète dans les domaines qui me passionnent vraiment...</p></div>
                    <a class="button2" v-on:click="toggleModale2">Lire la suite</a>
                </div>
            </div>
            <modale v-bind:revele="revele" :toggleModale="toggleModale"></modale>    
            <modale1 v-bind:revele1="revele1" :toggleModale1="toggleModale1"></modale1>   
            <modale2 v-bind:revele2="revele2" :toggleModale2="toggleModale2"></modale2>    
        </section>




        <section class="cv">
            <h1>Télécharger mon CV</h1>
                <a href="../../static/img/CV STAGE BENOIT CLAUDE.pdf" download="CV STAGE BENOIT CLAUDE.pdf" class="buttoncv">Télécharger</a>
        </section>

      </main>
    </div>
</template>

<script>
import param from '@/param/param'
import Modale from './Modale.vue'
import Modale1 from './Modale1.vue'
import Modale2 from './Modale2.vue'
export default {
  name: 'Accueil',
  components:{
      'modale' : Modale,
      'modale1' : Modale1,
      'modale2' : Modale2   
  },
  data () {
    return {
        revele: false,
        revele1: false,
        revele2: false
    }
  },
  methods: {
      toggleModale: function(){
          this.revele = !this.revele
      },
      toggleModale1: function(){
          this.revele1 = !this.revele1
      },
      toggleModale2: function(){
          this.revele2 = !this.revele2
      }
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


function montre () {
    var log = document.getElementById("log");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}

function montre2 () {
    var log = document.getElementById("lang");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}

function montre3 () {
    var log = document.getElementById("compt");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
