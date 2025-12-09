<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<template>
  <div class="bg-surface">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style scoped></style>
