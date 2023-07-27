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
  </full-page>
  <footer class="position-absolute bottom-0 end-0">
    <div class="d-flex justify-content-end p-2">
      <button type="button" class="btn btn-primary btn-lg btn-footer-link mx-1"><i class="bi bi-linkedin"></i></button>
      <button type="button" class="btn btn-primary btn-lg btn-footer-link mx-1"><i
          class="bi bi-envelope-fill"></i></button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      options: {
        navigation: true,
        credits: { // TODO add a notice about fullPage.js
          enabled: false, // not working
          label: '',
        }
      }
    }
  }
}
</script>

<style scoped>
.btn-footer-link {
  position: relative;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  >i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
