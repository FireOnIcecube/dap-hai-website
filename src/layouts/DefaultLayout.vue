<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-divider flex justify-between border-b px-8 py-4">
      <div></div>
      <nav class="text-md flex gap-x-4 font-semibold">
        <div>Home</div>
        <div>About</div>
      </nav>
    </header>

    <main class="flex flex-1">
      <router-view class="flex-1" />
    </main>

    <footer class="bg-footer">Footer</footer>
  </div>
</template>
