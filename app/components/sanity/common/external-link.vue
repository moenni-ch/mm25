<script setup lang="ts">
const props = defineProps<{
  title?: string
  url: string
  newTab?: boolean
}>();
</script>

<template>
  <NuxtLink
    :to="props.url"
    :target="props.newTab ? '_blank' : ''"
    :rel="props.newTab ? 'noopener' : ''"
  >
    <slot />
  </NuxtLink>
</template>
