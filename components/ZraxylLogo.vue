<template>
  <div class="flex items-center gap-2">
    <!-- Logo Image Only -->
    <img 
      :src="logoSrc" 
      :alt="altText" 
      class="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
    />
    
    <!-- Text Logo -->
    <div v-if="showText" class="flex flex-col leading-none">
      <span class="text-primary font-bold">{{ primaryText }}</span>
      <span class="text-secondary text-xs">{{ secondaryText }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logoSrc: {
    type: String,
    default: '/zraxyl.png'
  },
  altText: {
    type: String,
    default: 'Zraxyl OS Logo'
  },
  primaryText: {
    type: String,
    default: 'Zraxyl'
  },
  secondaryText: {
    type: String,
    default: 'OS'
  },
  showText: {
    type: Boolean,
    default: true
  }
})
</script>