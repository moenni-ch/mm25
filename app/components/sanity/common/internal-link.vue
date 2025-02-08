<script setup lang="ts">
const props = defineProps<{
  documentType: string;
  slug?: string;
}>();

const routeTo = computed(() => {
  switch (props.documentType) {
    default:
      return props.slug;
  }
});
</script>

<template>
  <NuxtLink :to="routeTo">
    <slot />
  </NuxtLink>
</template>
