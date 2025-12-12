<script lang="ts" setup>
import { useDarkMode } from '@/composables/useDarkMode'
import { Icon } from '@iconify/vue'

const { isDarkMode, toggleDark } = useDarkMode()
</script>
<template>
  <div class="flex min-h-dvh flex-col">
    <header class="flex justify-between border-b px-8 py-4">
      <div class="size-10">
        <router-link :to="{ name: 'home' }"> <img src="@/assets/logo.svg" /></router-link>
      </div>
      <nav class="text-md text-ink-muted mx-auto my-auto flex gap-x-8">
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
        <router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link>
      </nav>
      <div
        class="flex cursor-pointer items-center justify-center select-none"
        @click="() => toggleDark()"
      >
        <Icon
          :icon="
            isDarkMode
              ? 'material-symbols:light-mode-rounded'
              : 'material-symbols:dark-mode-rounded'
          "
          class="size-8"
        />
      </div>
    </header>

    <main class="flex flex-1">
      <router-view class="flex-1" />
    </main>

    <footer class="bg-layer text-ink-layer border-t py-4 text-center">
      © 2025 DAP-HAI Research Center
    </footer>
  </div>
</template>
