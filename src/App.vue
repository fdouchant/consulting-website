<template>
  <full-page ref="fullpage" :options="options">
    <div class="section ">
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
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
        Prev
      </button>
      Section 2
    </div>
  </full-page>
  <footer class="position-absolute bottom-0 end-0">
    <div class="d-flex justify-content-end p-2">
      <button type="button" class="btn btn-primary btn-lg btn-footer-link mx-1"><i class="bi bi-linkedin"></i></button>
      <button type="button" class="btn btn-primary btn-lg btn-footer-link mx-1"><i class="bi bi-envelope-fill"></i></button>
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
          enabled: false,
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

  > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
