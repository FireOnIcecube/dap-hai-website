<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDarkMode } = useDarkMode()
</script>

<template>
  <div class="bg-base container mx-auto flex flex-col justify-center">
    <div class="my-12">
      <img
        v-if="isDarkMode"
        src="@/assets/logo-dark.svg"
        alt="Dark Mode Logo"
        class="mx-auto h-auto w-full max-w-64 md:max-w-80 lg:max-w-96"
      />
      <img
        v-else
        src="@/assets/logo.svg"
        alt="Light Mode Logo"
        class="mx-auto h-auto w-full max-w-64 md:max-w-80 lg:max-w-96"
      />
    </div>

    <div class="flex items-center">
      <div class="grow border-t border-gray-400"></div>

      <span class="mx-1">·</span>

      <div class="grow border-t border-gray-400"></div>
    </div>

    <section class="mt-6 text-center">
      <h1>DAP-HAI Research Center</h1>
      <h2>Distributed Adaptive Paradigms for Advanced Human–AI Interaction</h2>
      <p class="text-ink-muted mt-2">
        DAP-HAI aims to contribute to the development of new paradigms in Human–AI systems by
        re-examining cognition and interaction at a foundational level
      </p>
    </section>

    <hr class="border-line mt-12 border-t" />

    <section class="mt-6 space-y-4 text-lg">
      <div>
        <h4>🧭 Research Structure</h4>
        <p class="text-ink-muted">
          Research at DAP-HAI is organized through layered conceptual and structural frameworks
          addressing Human–AI interaction, cognition, and adaptive systems. The center approaches
          these problems through theoretical analysis and methodological development rather than
          product-oriented design.
        </p>
      </div>

      <div>
        <h4>🕒 Status & Continuity</h4>
        <p class="text-ink-muted">
          Active research initiative established in 2025, currently focused on early-stage
          consolidation of theoretical and methodological frameworks.
        </p>
      </div>
      <div>
        <h4>🎯 Intended Audience</h4>
        <p class="text-ink-muted">
          This site is intended for researchers and practitioners working on Human–AI interaction,
          cognitive systems, and related theoretical or methodological problems.
        </p>
      </div>
      <div>
        <h4>🧪 Scope Clarification</h4>
        <p class="text-ink-muted">
          DAP-HAI focuses on theory- and method-driven research and does not operate as a product
          lab or application-oriented development group.
        </p>
      </div>
    </section>
    <hr class="border-line my-6 border-t" />

    <p class="text-center">Adaptive Interaction · Co-evolution · Distributed Human–AI Systems</p>
  </div>
</template>
