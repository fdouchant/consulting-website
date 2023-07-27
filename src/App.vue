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
  credits: { // TODO add a notice about fullPage.js
    enabled: false, // not working
    label: '',
  }
}
</script>

<template>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <div class="text-center">
        <h1>Fabrice Douchant Consulting</h1>
        <img src="https://placehold.co/300x200" class="my-3" alt="Fabrice Douchant Consulting Logo">
        <h2>Expert en projet digital</h2>
        <button class="btn btn-primary my-4" @click="$refs.fullpage.api.moveSectionDown()">
          En savoir plus
        </button>
      </div>
    </div>
    <div class="section">
      <div class="px-5">
        <h1 class="text-center mb-5">Présentation</h1>
        <div class="card flex-row border-0">
          <img src="https://placehold.co/100x100" alt="Fabrice Douchant" class="card-img-left align-self-start rounded">
          <div class="card-body py-0">
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

            <figure class="text-center">
              <blockquote class="blockquote">
                <p>Un projet est une aventure humaine qui requière coopération, rigueur, pragmatisme et une
                  bonne dose d'optimisme</p>
              </blockquote>
              <figcaption class="blockquote-footer">Ma devise</figcaption>
            </figure>
          </div>
        </div>
        <div class=text-center>
          <h2 class="my-5">Mes services</h2>
          <button class="btn btn-outline-primary btn-lg mx-3">Business analyse</button>
          <button class="btn btn-outline-success btn-lg mx-3">Conduite de projet</button>
          <button class="btn btn-outline-warning btn-lg mx-3">Méthodologie - PMO</button>
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
  <footer class="position-absolute bottom-0 end-0">
    <div class="d-flex justify-content-end p-2">
      <a href="https://www.linkedin.com/in/fdouchant/" target="_blank" class="btn btn-primary btn-lg btn-icon-rounded mx-1"
        tabindex="1" role="button" aria-disabled="true"><i class="bi bi-linkedin fs-4"></i></a>
      <a href="mailto:fabrice@douchant.ch" class="btn btn-primary btn-lg btn-icon-rounded mx-1" tabindex="1" role="button"
        aria-disabled="true"><i class="bi bi-envelope-fill fs-3"></i></a>
    </div>
  </footer>
</template>

<style scoped>
</style>