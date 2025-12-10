<template>
  <div class="flex min-h-svh flex-col">
    <header class="border-divider flex justify-between border-b px-8 py-4">
      <div></div>
      <nav class="text-md flex gap-x-4 font-sans">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </nav>
      <div></div>
    </header>

    <main class="flex flex-1">
      <router-view class="flex-1" />
    </main>

    <footer class="bg-footer py-4 text-center text-white">© 2025 DAP-HAI Research Center</footer>
  </div>
</template>
