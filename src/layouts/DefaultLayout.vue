<script lang="ts" setup>
import { useDarkMode } from '@/composables/useDarkMode'

const { isDarkMode, toggleDark } = useDarkMode()
</script>
<template>
  <div class="flex min-h-dvh flex-col">
    <header class="flex justify-between border-b px-8 py-4">
      <div class="size-10">
        <router-link :to="{ name: 'home' }">
          <img v-if="isDarkMode" src="@/assets/logo-dark.svg" alt="Dark Mode Logo" />
          <img v-else src="@/assets/logo.svg" alt="Light Mode Logo" />
        </router-link>
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
        <span
          class="size-8"
          :class="
            isDarkMode
              ? 'icon-[material-symbols--light-mode-rounded]'
              : 'icon-[material-symbols--dark-mode-rounded]'
          "
        ></span>
      </div>
    </header>

    <main class="flex flex-1">
      <router-view class="flex-1" />
    </main>

    <footer class="bg-layer text-ink-layer mt-12 border-t py-4 text-center">
      © 2025 DAP-HAI Research Center
    </footer>
  </div>
</template>
