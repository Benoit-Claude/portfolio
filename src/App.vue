<template>
  <div id="app">
    <header id="header-wrap">
          <div id="header" class="clear">
              <nav class="navbar dark-mode" role="navigation">
                  <div class="navbar__titre"><h1>Benoit Claude <span>Portfolio</span></h1></div>
                  <ul class="navbar__links">
                      <li class="navbar__link first"><router-link to="/">Accueil</router-link></li>
                      <li class="navbar__link second"><router-link to="/site">Sites Web</router-link></li>
                      <li class="navbar__link third"><router-link to="/design">Design</router-link></li>
                      <li class="navbar__link four"><router-link to="/musique">Musique</router-link></li>
                      <li class="navbar__link fifth"><router-link to="/contact">Contact</router-link></li>
                  </ul>
                  <button class="burger">
                      <span class="bar"></span>
                  </button>
              </nav>
          </div>    
    </header>

    <router-view/>

    <footer>
      <div class="menufooter">
          <router-link to="/">Accueil</router-link>
          <router-link to="/site">Sites Web</router-link>
          <router-link to="/design">Design</router-link>
          <router-link to="/musique">Musique</router-link>
          <router-link to="/contact">Contact</router-link>
      </div>
      <div class="reseaux">
          <a href="https://www.instagram.com/benclaude_92/"><img src="../static/img/is.png" id="is" alt=""></a>
          <a href="https://www.facebook.com/benoit.claude.370/"><img src="../static/img/fb.png" id="fb" alt=""></a>
          <a href="https://www.linkedin.com/in/benoit-claude-4660b417a/"><img src="../static/img/lk.png" id="lk" alt=""></a>
          <a href="https://www.youtube.com/channel/UCwayMTj8rfFBxYjKPURY7oQ"><img src="../static/img/yt.png" id="yt" alt=""></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
