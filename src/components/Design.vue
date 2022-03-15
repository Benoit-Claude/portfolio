<template>
    <div id="app">
        
    <section class="menudesign" id="menu">
        <div class="infographie" onclick="afficher() "><h1>Infographie</h1></div>
        <div class="motion" onclick="afficher2()" ><h1>Motion Design</h1></div>
    </section>


    <div id="texte">
        <p>Cliquez sur une spécialité pour voir les oeuvres</p>
    </div>



    <div class="menuinfo" id="divinfo" >
        
        <section class="infograf" v-for="design in listedesign" :key="design.id">
            <div class="cardsi front-face">
                <img :src="design.acf.image.url" :alt="design.acf.nom">
            </div>

            <div class="cardsi back-face">
                <h2>{{design.acf.nom}}</h2>
                <p>{{design.acf.description}}</p>
            </div>
        </section>
        <section class="infograf">
            <div class="cardsi front-face">
                <img src="../../static/img/Flyer.png" alt="flip card">
            </div>

            <div class="cardsi back-face">
                <h2>Flyer Start-up</h2>
                <p>Flyer réalisé pour le compte d'une start-up</p>
            </div>
        </section>
        <section class="infograf">
            <div class="cardsi front-face">
                <img src="../../static/img/Affichenuitbad2.png" alt="flip card">
            </div>

            <div class="cardsi back-face">
                <h2>Affiche Nuit du Badminton</h2>
                <p>Affiche Nuit du Badminton MéMO</p>
            </div>
        </section>
    </div>




    <section class="motiondes" id="divmotion">
        <div id="carrousel">
            <div id="container">
                <div class="photo">
                    <video controls src="../../static/img/BenoitCLAUDE_GENERIQUEDEBUT.mp4"></video>
                    <video controls src="../../static/img/CLAUDE_BENOIT___DEFI2.mp4"></video>
                    <video controls src="../../static/img/CLAUDE_BENOIT___DEFI3.mp4"></video>
                    <video controls src="../../static/img/Logo.mp4"></video>
                </div>
            </div>
            <img src="../../static/img/bouton.png" class="bouton" id="d" />
            <img src="../../static/img/bouton.png" class="bouton" id="g" />
        </div>
    </section>

    </div>
</template>

<script>

import param from '@/param/param'

export default {
  name: 'Design',
  data () {
    return {
        listedesign: [],
    }
  },
  created(){
      axios.get(param.host+"design")
      .then(response=>{
          console.log("Reponse", response);
          this.listedesign = response.data;
      })
      .catch(error => console.log(error))
  },
   mounted(){



function afficher() {
    var div = document.getElementById("divinfo");
    var div2 = document.getElementById("divmotion");
    var texte = document.getElementById("texte");

    if (div.style.display === "none") {
        div.style.display = "grid";
        div2.style.display="none";
        texte.style.display="none"
    } else {
        div.style.display = "none";
        texte.style.display="block"
      }
}
    

function afficher2() {
    var div = document.getElementById("divinfo");
    var div2 = document.getElementById("divmotion");
    var texte = document.getElementById("texte");

    if (div2.style.display === "none") {
        div2.style.display = "block";
        div.style.display="none";
        texte.style.display="none"
    } else {
        div2.style.display = "none";
        texte.style.display="block"
    }
}

g=document.getElementById("g");
d=document.getElementById("d");
container=document.getElementById("container");
p=0;
nbr=4;

d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}

g.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}
  }
}
</script>

<style scoped>

</style>