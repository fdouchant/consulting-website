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
  // autoScrolling: true,
  credits: {
    enabled: false, // not working
    label: '',
  }
}
</script>

<template>
  <full-page ref="fullpage" :options="options">
    <div class="section" data-anchor="home">
      <div class="container text-center">
        <h1>Fabrice Douchant Consulting</h1>
        <img src="/logo.png" class="my-2" alt="Fabrice Douchant Consulting Logo">
        <h2>Expert en projet digital</h2>
        <button class="btn btn-primary btn-lg my-4" @click.prevent="$refs.fullpage.api.moveTo('about')">
          En savoir plus
        </button>
      </div>
    </div>
    <div class="section section-lengthy" data-anchor="about">
      <div class="container">
        <h1 class="text-center my-5">Présentation</h1>
        <div>
          <img src="https://placehold.co/100x100" style="width: 100px;" alt="Fabrice Douchant"
            class="rounded float-start my-2 me-2">
          <p>Issu d'une formation universitaire en informatique, j'ai évolué dans plusieurs rôles techniques et de gestion
            dans le domaine de l'IT.
            Fort de cette expérience complète et reconnue, je me spécialise dans l'évolution et la modernisation des
            systèmes d'informations.</p>
          <p>Que ce soit dans le cadre de projets de dématérialisation, techniques ou transverses , je mets à
            profit mes connaissances, expériences et leadership afin d'atteindre les objectifs de mes clients.
            Axé solutions et résultats, j'ai le souci d'apporter une valeur ajoutée continue et mesurable à l'ensemble de
            mes activités.</p>
          <p>Mes domaines d'intervention sont multiples : finances et assurances, institutions publiques, communication
            et
            événementiel, sociétés de services, éditeurs de solutions, ...</p>

          <figure class="text-center my-4">
            <blockquote class="blockquote">
              <p>Un projet est une aventure humaine qui requiert coopération, rigueur, pragmatisme et une
                bonne dose d'optimisme</p>
            </blockquote>
          </figure>
        </div>
        <div class=text-center>
          <h2 class="my-5">Mes services</h2>
          <div class="my-3 d-flex flex-wrap justify-content-center align-items-center">
            <button class="btn btn-outline-primary btn-lg m-2"
              @click.prevent="$refs.fullpage.api.moveTo('business-analysis')">Business analyse</button>
            <button class="btn btn-outline-success btn-lg m-2" @click.prevent="$refs.fullpage.api.moveTo('project-management')">Conduite de projet</button>
            <button class="btn btn-outline-warning btn-lg m-2" @click.prevent="$refs.fullpage.api.moveTo('methodology')">Méthodologie - PMO</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-lengthy" data-anchor="business-analysis">
      <Service title="Business Analyse" icon="search" theme-color="primary">
        <template #question>Vous souhaitez réaliser une étude dans le cadre d'un projet d'envergure ?</template>
        <template #default>
          <p>
            De par mon expérience en business analyse, je suis abilité à :
          <ul>
            <li>identifier, collecter et synthétiser les besoins métiers et techniques afin de définir le périmètre du
              projet. Je procède ainsi à une analyse systèmique du domaine</li>
            <li>cartographier les processus métiers et permettre ainsi d'auditer, d'automatiser ou d'optimiser ces
              processus</li>
            <li>étudier les variantes de solutions du projet : sélection de produits du marché, développement
              interne/externe (make or buy)</li>
            <li>procéder à un appel d'offre public</li>
            <li>rédiger un cahier des charges incluant les grandes étapes du projet, un calendrier et un plan de
              financement</li>
          </ul>
          </p>
          <p>Certifications dans le domaine : Scrum Product Owner, CCBA</p>
        </template>
      </Service>
    </div>
    <div class="section section-lengthy" data-anchor="project-management">
      <Service title="Conduite de projet" icon="rocket-takeoff" theme-color="success">
        <template #question>Vous souhaitez démarrer ou relancer un projet transverse et / ou complexe ?</template>
        <template #default>
          <p>
            Je dispose de l'expérience, des compétences techniques et relationnelles me permettant de :
          <ul>
            <li>leader une équipe projet de diverse envergure et composée de profils multiples : domaine, culture, expérience, ... tout en veillant à une utilisation efficiente des ressources</li>
            <li>conduire un projet selon les prescriptions de l'orgnisation et proposer des approches innovantes et efficaces dans le but d'atteindre les objectifs définis</li>
            <li>accompagner le changement auprès des utilisateurs et des équipes techniques afin d'assurer un succès durable de la solution issue du projet</li>
          </ul>
          </p>
          <p>Certifications dans le domaine : Scrum Master, Hermes Advanced, CCMP, PMI CAPM</p>
        </template>
      </Service>
    </div>
    <div class="section section-lengthy" data-anchor="methodology">
      <Service title="Méthodologie (PMO)" icon="mortarboard" theme-color="warning">
        <template #question>Vous souhaitez améliorer vos pratiques en gestion de projet ?</template>
        <template #default>
          <p>
            Avec plus de 10 ans d'expérience en agilité, en méthodes traditionnelles puis en gestion combinée dite "hybride", je suis qualifié pour :
          <ul>
            <li>auditer votre méthodologie, proposer des axes d'amélioration et définir une roadmap de transition. Puis accompagner le changement afin d'augmenter signficativement et durablement la culture projet de votre organisation</li>
            <li>coacher les chefs de projet et responsables d'équipe à de nouvelles méthodes et outils afin d'améliorer l'efficience et l'efficacité des projets. En utilisant des KPIs permettant de mesurer les gains obtenus</li>
          </ul>
          </p>
          <p>Certifications dans le domaine : Lean Six Sigma, Safe, ITIL</p>
        </template>
      </Service>
    </div>
    <div class="section" data-anchor="contact">
      <div class="container text-center">
        <p class="fs-1">Une question ?</p>
        <p class="fs-5">Je me tiens volontiers à votre disposition afin d'échanger sur vos besoins. Ce sera alors l'occasion de partager mes expériences et présenter davantage les services que je propose.</p>
        <p class="d-flex flex-wrap justify-content-center align-items-center fs-4">Me contacter : <a href="mailto:fabrice@douchant.ch?subject=Premier contact" class="btn btn-outline-primary m-1"><i class="bi bi-envelope-at me-2"></i>fabrice@douchant.ch</a>
        <a href="tel:+41-76-569-51-58" class="btn btn-outline-success m-1"><i class="bi bi-telephone me-2"></i>+41 76 569 51 58</a></p>
        
        <p class="fs-3">Je me réjouis d'ores et déjà de vous rencontrer.</p>
      </div>
    </div>
  </full-page>

  <!-- Button trigger modal -->
  <a class="text-primary position-absolute bottom-0 start-0 p-2 fs-6 fw-light" href="#" data-bs-toggle="modal"
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

ul {
  margin-top: 1rem;
}
</style>