<script setup lang="ts">
import type { VideoFragment, MediaImageFragment } from '@@/types/shopify';
import type { EmblaCarouselType } from 'embla-carousel';

import emblaCarouselVue from 'embla-carousel-vue';

import { isMediaVideo, isMediaImage } from '@/helpers/shopify';

// Props
const props = defineProps<{
  productMedia: Array<VideoFragment | MediaImageFragment>;
}>();

// Embla setup
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });

// State
const selectedIndex = ref<number>(0);
const canScrollNext = ref(false);
const canScrollPrev = ref(false);

// Next/prev actions
const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

const scrollNext = () => {
  emblaApi.value?.scrollNext();
};

// ScrollTo method
const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index);
};

// Embla event handlers
const onSelect = (api: EmblaCarouselType) => {
  canScrollNext.value = api?.canScrollNext() || false;
  canScrollPrev.value = api?.canScrollPrev() || false;
  selectedIndex.value = api?.selectedScrollSnap() || 0;
};

onMounted(() => {
  if (!emblaApi.value) {
    return;
  }

  emblaApi.value?.on('select', onSelect);
  emblaApi.value?.on('reInit', onSelect);
});
</script>

<template>
  <div ref="emblaRef" class="relative overflow-hidden lg:hidden pr-[10vw]">
    <div class="flex">
      <div
        v-for="(media, index) in props.productMedia"
        :key="media.id"
        class="flex-[0_0_90vw] mr-8"
      >
        <ShopifyVideo
          v-if="isMediaVideo(media)"
          :video="media"
        />
        <ShopifyImage
          v-else-if="isMediaImage(media)"
          :image="media.image"
          :alt="media.image?.altText || ''"
          :index="index"
        />
      </div>
    </div>

  <!-- 
  remove pagination 
-->
    <button
      class="absolute flex items-center justify-center z-10 p-8 top-0 left-0 h-full"
      @click="scrollPrev"
    >
    </button>
    <button
      class="absolute flex items-center justify-center z-10 p-8 top-0 right-0 h-full"
      @click="scrollNext"
    >
    </button>
  </div>
</template>
