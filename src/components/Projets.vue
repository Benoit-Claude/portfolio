<template>

    <div id="app">

            <div class="retour">
                <router-link to="/site"><img src="../../static/img/retour.png" alt=""></router-link>
            </div>

           

        
            <div class="projets" v-for="projet in liste" :key="projet.id">
                <div v-if="projet.id == Projet">
                    <div class="banniere">
                        <img :src="projet.acf.image_de_couverture.url" alt="Programmation sur écran de portable">
                    </div>
                   
                    <div class="carre">
                        <div class="titrimg">
                            <h2>{{projet.acf.nom}}</h2>
                            <img :src="projet.acf.image.url" alt="" class="imgpres">
                        </div>
                        <div class="informations">
                            <p>{{projet.acf.date}}</p>
                            <p>Projet :  {{projet.acf.type}}</p>
                            <p class="description">{{projet.acf.description}}</p>
                            <p>Logiciels utilisés : {{projet.acf.logiciels}}</p>
                        </div>   
                    </div>       
                        <ul class="carrosse">
                            <h1>Visuels</h1>
                            <li>
                                <div v-if="projet.acf.visuel.length == 0" class="visuel">
                                    <div>
                                        <img :src="projet.acf.image.url" class="visuel-projet" alt="Visuel de projet">
                                    </div>
                                    </div>
                                <div v-if="projet.acf.visuel.length >= 1" class="flex">
                                    <div v-for="visuel in projet.acf.visuel" :key="visuel.id" class="flexible">
                                        <img :src="visuel.full_image_url" class="visuel-projet" alt="Visuel de projet">
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
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
            projet:{
                acf:{
                    visuel: null,
            }
            }
            
            
        }
    },
    created(){
      this.Projet = this.$route.params.id
      axios.get(param.host+"projet")
      .then(response=>{
          console.log("Reponse", response);
          this.liste = response.data;
           if(this.projet.acf.visuel == false){
                this.projet.acf.visuel = null;
            }
            console.log('projet', this.projet)
      })
      .catch(error => console.log(error))
  }
}

</script>


<style scoped>

 

    .projets{
        margin: 15vh 0;
        text-align: center;
    }

    .carre{
        background-color: black;
        color: #f2f2f2;
        width: 1000px;
        height: 400px;
        padding: 30px 0;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
    }

    .banniere{
        position: fixed;
        top: 0px;
        z-index: -1;
        opacity: 0.9;
        filter: blur(6px);
    }

    .banniere img{
        height: 100vh;
    }

    .imgpres{
        width: 350px;
    }

    .titrimg{
        width: 50%;
    }

    .informations{
        padding-top: 50px;
        width: 50%;
    }


    button {
        text-align: center;
        margin: 20px 0;
        padding: 10px;
        text-decoration: none;
        color: #f2f2f2;
        background-color: #5b0606;
        width: 200px;
        border-radius: 10px; 
        cursor: pointer; 
    }

    .retour{
        position: absolute;
        top: 100px;
        left: 20px;
    }

    .retour img{
        width: 70px;
    }

    .carrosse{
        margin-top: 50px;
        background-color: #5b0606;
        color: #f2f2f2;
        border-radius: 10px;
    }

    .flex{
        height: 100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        margin: 70px 0;
    }


    .carrosse img {
        width: 350px;
        height: 200px;
        margin-bottom: 100px;
    }

    .description{
        text-align: left;
        padding: 10px 20px;
    }

    

    @media (max-width: 1300px){
        .imgpres{
            width: 100%;
    }
    .carre{
        background-color:black;
        width: 100%;
        height: 800px;
        padding: 20px 0;
        margin: 0 auto;
        border-radius: 10px;
        display: block;
    }
    .titrimg{
        width: 100%;
    }

    .informations{
        padding-top: 50px;
        width: 100%;
    }
    .flex{
        display: block;
    }
    .carrosse{
        padding: 0;
    }
    }

  




   
 
  

   

    



    
</style>