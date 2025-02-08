<script setup lang="ts">
import externalLink from '../common/external-link'
import internalLink from '../common/internal-link'

// Props
const props = defineProps<{
  blocks?: Array<any>
}>()

// Serializers
const serializers = {
  marks: {
    linkExternal: externalLink,
    linkInternal: internalLink
  }
}
</script>

<template>
  <div v-if="props.blocks">
    <SanityContent :blocks="props.blocks" :serializers="serializers" />
  </div>
</template>
