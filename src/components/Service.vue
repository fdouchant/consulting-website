<script setup>
defineProps(['title', 'icon'])
</script>

<template>
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="mb-4">{{ title }}</h1>
      <div class="btn-icon-rounded bg-primary mx-auto">
        <i :class="`bi bi-${icon} fs-1 text-white`"></i>
      </div>
    </div>

    <p class="h5 mb-4">
      <slot name="question"></slot>
    </p>

    <slot></slot>
  </div>
</template>

<style scoped></style>
