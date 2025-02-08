<script setup lang="ts">
import { HOME } from '@/groq/queries/home'

// Fetch content
const { data, error } = await useSanityQuery<any>(HOME)

// Handle error response
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<template>
  <div v-if="data" class="p-6">
    <PortableText :blocks="data.description" />
  </div>
</template>
