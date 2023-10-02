<script setup>
import { computed } from 'vue';
import { useI18n } from "vue-i18n"
import i18n from "./plugins/i18n"

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})

const changeLocale = (locale) => {
  i18n.global.locale.value = locale
}

import Service from './components/Service.vue'

const options = {
  navigation: true,
  // autoScrolling: true,
  licenseKey: 'gplv3-license',
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
        <img src="/logo.png" class="img-fluid my-2" alt="Fabrice Douchant Consulting Logo"
          style="width: 290px; max-width: 80vw;">
        <h2>{{ $t('title') }}</h2>
        <button class="btn btn-primary btn-lg my-4" @click.prevent="$refs.fullpage.api.moveTo('about')">
          {{ $t('more') }}
        </button>
        <p>{{ $i18n.locale }}</p>
      </div>
    </div>
    <div class="section section-lengthy" data-anchor="about">
      <div class="container">
        <h1 class="text-center my-5">{{ $t('about.title') }}</h1>
        <div>
          <img src="/photo.jpg" style="width: 100px;" alt="Fabrice Douchant" class="rounded-circle float-start my-2 me-2">
          <div v-html="$t('about.content')" />

          <figure class="text-center my-4">
            <blockquote class="blockquote" v-html="$t('about.quote')" />
          </figure>
        </div>
        <div class=text-center>
          <h2 class="my-5">{{ $t('services.title') }}</h2>
          <div class="my-3 d-flex flex-wrap justify-content-center align-items-center">
            <button class="btn btn-outline-primary btn-lg m-2"
              @click.prevent="$refs.fullpage.api.moveTo('business-analysis')">{{ $t('services.BA') }}</button>
            <button class="btn btn-outline-success btn-lg m-2"
              @click.prevent="$refs.fullpage.api.moveTo('project-management')">{{ $t('services.PM') }}</button>
            <button class="btn btn-outline-warning btn-lg m-2"
              @click.prevent="$refs.fullpage.api.moveTo('methodology')">{{ $t('services.PMO') }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-lengthy" data-anchor="business-analysis">
      <Service title="Business Analyse" icon="search" theme-color="primary">
        <template #question>
          <div v-html="$t('ba.question')" />
        </template>
        <template #default>
          <div v-html="$t('ba.content')" />
        </template>
      </Service>
    </div>
    <div class="section section-lengthy" data-anchor="project-management">
      <Service title="Conduite de projet" icon="rocket-takeoff" theme-color="success">
        <template #question>
          <div v-html="$t('pm.question')" />
        </template>
        <template #default>
          <div v-html="$t('pm.content')" />
        </template>
      </Service>
    </div>
    <div class="section section-lengthy" data-anchor="methodology">
      <Service title="Méthodologie (PMO)" icon="mortarboard" theme-color="warning">
        <template #question>
          <div v-html="$t('pmo.question')" />
        </template>
        <template #default>
          <div v-html="$t('pmo.content')" />
        </template>
      </Service>
    </div>
    <div class="section" data-anchor="contact">
      <div class="container text-center">
        <p class="fs-1">{{ $t('conclusion.question') }}</p>
        <p>{{ $t('conclusion.disposal')}}</p>
        <p class="container-fluid fs-5">{{ $t('conclusion.contact') }} <a
            href="mailto:fabrice@douchant.ch?subject=Premier contact" class="btn btn-outline-primary m-1"><i
              class="bi bi-envelope-at"></i><span class="d-none d-md-inline ms-2">fabrice@douchant.ch</span></a>
          <a href="tel:+41-76-569-51-58" class="btn btn-outline-success m-1"><i class="bi bi-telephone"></i><span
              class="d-none d-md-inline ms-2">+41 76 569 51 58</span></a>
        </p>
        <p><i class="bi bi-geo-alt"></i> {{ $t('conclusion.location') }}</p>

        <p class="fs-4">{{ $t('conclusion.happyToMeet') }}</p>
      </div>
    </div>
  </full-page>

  <!-- Button trigger modal -->
  <a class="text-primary position-absolute bottom-0 start-0 p-2 fs-6 fw-light" href="#" data-bs-toggle="modal"
    data-bs-target="#creditsModal">
    {{ $t('aboutWebsite.link') }}
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
          {{ $t('aboutWebsite.title') }}
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ $t('aboutWebsite.gtihub') }} <a href="https://github.com/fdouchant/consulting-website">github</a></p>
          {{ $t('aboutWebsite.technologies') }}
          <a href="https://vuejs.org" target="_blank" class="link-secondary">vue.js</a>,
          <a href="https://getbootstrap.com" target="_blank" class="link-secondary">bootstrap</a>,
          <a href="https://vitejs.dev" target="_blank" class="link-secondary">vite.js</a>,
          <a href="https://alvarotrigo.com/fullPage/" target="_blank" class="link-secondary">fullPage.js</a>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>.section-lengthy {
  padding-bottom: $icon-size + 20;
}

ul {
  margin-top: 1rem;
}</style>