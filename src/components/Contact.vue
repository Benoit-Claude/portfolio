<template>
    <div class="app">

       <form @submit.prevent="creer">
      
        <h3>CONTACTEZ MOI !</h3>
        
            <div class="champ">
                  <input type="text" id="nom" v-model="contact.acf.name" placeholder="Qui êtes-vous ?"/>
                  <label for="nom">Nom</label>
            </div>
  
            <div class="champ">
                  <input type="text" id="prenom" v-model="contact.acf.lastname" placeholder="Qui êtes-vous ?"/>
                  <label for="prenom">Prénom</label>
            </div>
        
            <div class="champ">
                  <input type="text" id="mail" v-model="contact.acf.email" placeholder="Quelle est votre adresse Mail ?"/>
                  <label for="mail">Mail</label>
            </div>
        
  
            <div class="champ">
                  <textarea id="msg" v-model="contact.acf.message" placeholder="Tapez ici votre message"/>
                  <label for="msg">Message</label>
            </div>
    
    
            <input class="button" type="submit" value="Envoyer" />
        
    </form>


        <div class="reseauxsociaux">
            <h2>Réseaux Sociaux</h2>
            <a href="https://www.facebook.com/benoit.claude.370/"><img src="../../static/img/facebook (1).png" alt=""></a>
            <a href="https://www.instagram.com/benclaude_92/"><img src="../../static/img/instagram (1).png" alt=""></a>
            <a href="https://www.youtube.com/channel/UCwayMTj8rfFBxYjKPURY7oQ"><img src="../../static/img/youtube.png" alt=""></a>
            <a href="https://www.linkedin.com/in/benoit-claude-4660b417a/"><img src="../../static/img/linkedin.png" alt=""></a>
        </div>

    
    </div>

</template>

<script>
import param from '@/param/param'

export default {
  name: 'Contact',
  data () {
    return {
          contact: {
                acf: {
                  name: null,
                  lastname: null,
                  email: null,
                  message: null,
                }
          }
      }
  },

  methods : {
        creer: function (){
              axios({
                method: 'post',
                url: param.auth,
                data : {
                    'username' : param.user,
                    'password' : param.psw
                }
            }).then(function (response) {
                console.log("Reponse token", response);   
                let token = response.data.token;
                console.log("Token", token);   

              axios({
                    method: 'post',
                    data : {
                          title : this.contact.acf.name,
                          status : "publish",
                          fields : {
                              name : this.contact.acf.name,
                              lastname : this.contact.acf.lastname,
                              email : this.contact.acf.email,
                              message : this.contact.acf.message,
                          }
                    },
                    url: param.host+'contact',
                    headers: { 'Authorization' : 'Bearer '+ token }
              }).then(function (response) {
                    console.log("retour création contact", response);
                    this.$router.push('/');  
              }.bind(this))
              .catch(error => console.log(error))


            }.bind(this))
            .catch(error => console.log(error))
           }
        },
  


               
  mounted(){
        $("input,textarea").blur(function () {
    // En sortant d'un champ du Form (désélection)
  
    if ($(this).siblings("label").attr("for") == "msg") {
      // Si c'est le textarea Message
      $(this).parent().css("margin-bottom", "0"); // On retire la marge (qui baisse le bouton submit)
    }
  
    if ($(this).val() != "") {
      // Si le champs est rempli
      $(this).siblings("label").addClass("labelOuvert"); // On laisse le label en petit
      if ($(this).siblings("label").attr("for") == "msg") {
        // Si c'est le champ message
        $(this).parent().addClass("messOuvert"); // Ajout de la classe pour agrandir le champ
        $(this).parent().css("margin-bottom", "100px"); // On baisse le bouton
      }
    } else {
      $(this).siblings("label").removeClass("labelOuvert");
      if ($(this).siblings("label").attr("for") == "msg") {
        // Si c'est le textarea Message
        $(this).parent().removeClass("messOuvert"); // Retrait de la classe pour reduire le champ
      }
    }
  });
  
  $("textarea").focus(function () {
    // Au clic sur le textarea Message
    if ($(this).val() == "") {
      // Si le champ est vide
      $(this).parent().css("margin-bottom", "100px"); // Rajout de la marge pour baisser le bouton submit
    }
  });
  }
}
</script>

<style scoped>

</style>