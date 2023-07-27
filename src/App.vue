<script setup>
</script>

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
      <button type="button" class="btn btn-primary btn-lg btn-rounded mx-1"><i class="bi bi-linkedin"></i></button>
      <button type="button" class="btn btn-primary btn-lg btn-rounded mx-1"><i class="bi bi-envelope-fill"></i></button>
    </div>
  </footer>
</template>

<style scoped>
</style>
