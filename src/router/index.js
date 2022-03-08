import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Site from '@/components/Site'
import Design from '@/components/Design'
import Musique from '@/components/Musique'
import Contact from '@/components/Contact'
import Projets from '@/components/Projets'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',             name: 'Accueil',        component: Accueil},
    {path: '/site',         name: 'Site',           component: Site},
    {path: '/design',       name: 'Design',         component: Design},
    {path: '/musique',      name: 'Musique',        component: Musique},
    {path: '/contact',      name: 'Contact',        component: Contact},
    {path: '/projets',      name: 'Projets',        component: Projets}
  ]
})
