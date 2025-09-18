<template>
  <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
    <div class="card-body text-center relative overflow-hidden">
      <!-- Background gradient on hover -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br"
           :class="[`from-${color}`, `to-${color}`]"></div>
      
      <!-- Icon with animation -->
      <div class="text-6xl mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 filter group-hover:drop-shadow-lg">
        {{ icon }}
      </div>
      
      <!-- Title with color animation -->
      <h3 class="card-title justify-center text-2xl mb-3 transition-all duration-300 group-hover:scale-105" 
          :class="[`text-${color}`, 'group-hover:brightness-110']">
        {{ title }}
      </h3>
      
      <!-- Description with hover effects -->
      <p class="text-base-content/70 leading-relaxed transition-colors duration-300 group-hover:text-base-content">
        {{ description }}
      </p>
      
      <!-- Animated border effect -->
      <div class="absolute inset-0 border-2 border-transparent group-hover:border-current opacity-20 rounded-lg transition-all duration-300"
           :class="`border-${color}`"></div>
      
      <!-- Floating particles effect -->
      <div class="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
           :class="`bg-${color}`"></div>
      <div class="absolute bottom-2 left-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
           :class="`bg-${color}`" style="animation-delay: 0.2s;"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  color: String
})
</script>