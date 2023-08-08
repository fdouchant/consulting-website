/* 
TODO :
- change colors
- change images
- add other services
- review texts
- responsive content : not nice on mobile
*/
<script setup>
import Service from './components/Service.vue'

const options = {
  navigation: true,
  credits: {
    enabled: false, // not working
    label: '',
  }
}
</script>

<template>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <div class="container text-center">
        <h1>Fabrice Douchant Consulting</h1>
        <img src="https://placehold.co/300x200" class="my-2" alt="Fabrice Douchant Consulting Logo">
        <h2>Expert en projet digital</h2>
        <button class="btn btn-primary btn-lg my-4" @click="$refs.fullpage.api.moveSectionDown()">
          En savoir plus
        </button>
      </div>
    </div>
    <div class="section section-lengthy">
      <div class="container">
        <h1 class="text-center my-5">Présentation</h1>
        <div>
          <img src="https://placehold.co/100x100" style="width: 100px;" alt="Fabrice Douchant"
            class="rounded float-start my-2 me-2">
          <p>Issu d'une formation universitaire en informatique, j'ai évolué dans plusieurs rôles techniques et de
            gestion.
            Fort de cette expérience complète et reconnue dans les technologies de l'information, je me spécialise dans
            la
            transformation digitale : la modernisation d'un système ou la dématérialisation d'un processus métier dans
            le
            cadre de projets transverses à forte valeur ajoutée.</p>
          <p>Mes domaines d'intervention sont multiples : finances et assurances, institutions publiques, communication
            et
            événementiel, sociétés de services, éditeurs de solutions.</p>

          <figure class="text-center my-4">
            <blockquote class="blockquote">
              <p>Un projet est une aventure humaine qui requière coopération, rigueur, pragmatisme et une
                bonne dose d'optimisme</p>
            </blockquote>
          </figure>
        </div>
        <div class=text-center>
          <h2 class="my-5">Mes services</h2>
          <div class="my-3 d-flex flex-wrap justify-content-center align-items-center">
            <button class="btn btn-outline-primary btn-lg m-2">Business analyse</button>
            <button class="btn btn-outline-success btn-lg m-2">Conduite de projet</button>
            <button class="btn btn-outline-warning btn-lg m-2">Méthodologie - PMO</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <Service title="Business Analyse" icon="puzzle">
        <template #question>Vous souhaitez réaliser une étude avant de démarrer un projet d'envergure ?</template>
        <template #default>
          <p>
            Grace à mon expertise en business analyse, je suis abilité à :
          <ul>
            <li>collecter et synthétiser les besoins métiers et techniques dans le but de définir le périmètre du projet
            </li>
            <li>étudier plusieurs variantes de solutions : produits du marché, développement internalisé ou externalisé
              (make or buy)</li>
            <li>rédiger un appel d'offre public</li>
          </ul>
          </p>
        </template>
      </Service>
    </div>
  </full-page>

  <!-- Button trigger modal -->
  <a class="position-absolute bottom-0 start-0 p-2 fs-6 fw-light" href="#" data-bs-toggle="modal"
    data-bs-target="#creditsModal">
    Crédits
  </a>
  <div class="position-absolute bottom-0 end-0 p-2">
    <a class=" btn btn-primary btn-icon-rounded mx-1" href="https://www.linkedin.com/in/fdouchant/" target="_blank"
      tabindex="1" role="button" aria-disabled="true"><i class="bi bi-linkedin fs-5"></i></a>
    <a class="btn btn-primary btn-icon-rounded mx-1" href="mailto:fabrice@douchant.ch" tabindex="1" role="button"
      aria-disabled="true"><i class="bi bi-envelope-fill fs-5"></i></a>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="creditsModal" tabindex="-1" aria-labelledby="creditsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          À propos de ce site
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Le code source de ce site est disponible sur <a
              href="https://github.com/fdouchant/consulting-website">github</a></p>
          Il utilise plusieurs technologies open source :
          <a href="https://vuejs.org" target="_blank" class="link-secondary">vue.js</a>,
          <a href="https://getbootstrap.com" target="_blank" class="link-secondary">bootstrap</a>,
          <a href="https://vitejs.dev" target="_blank" class="link-secondary">vite.js</a>,
          <a href="https://alvarotrigo.com/fullPage/" target="_blank" class="link-secondary">fullPage.js</a>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-lengthy {
  padding-bottom: $icon-size + 20;
}
</style>