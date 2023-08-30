<script setup>
defineProps({
  title: String,
  icon: String,
  themeColor: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <div class="container">
    <div class="text-center">
      <h1 class="mt-5 mb-3">{{ title }}</h1>
      <div :class="`btn-icon-rounded-xl bg-${themeColor} mx-auto mb-3`">
        <i :class="`bi bi-${icon} fs-1 text-white`"></i>
      </div>
    </div>

    <p class="text-center h5 mb-5">
      <slot name="question"></slot>
    </p>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style.scss';
@import '@/variables.scss';

.btn-icon-rounded-xl {
  @extend .btn-icon-rounded !optional;
  height: $icon-size * 1.5;
  width: $icon-size * 1.5;
}
</style>