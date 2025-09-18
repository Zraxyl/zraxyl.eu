<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">Meet the Team</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            The passionate developers and contributors behind Zraxyl OS
          </p>
        </div>
      </div>
    </section>

    <!-- Core Team -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="text-lg text-base-content/70 animate-fade-in-delay">The creators, maintainers, and contributors of Zraxyl OS</p>
        </div>
        
        <div class="developers-container max-w-6xl mx-auto">
          <!-- All Team Members in One Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Martin Välba -->
            <div class="developer-card card-martin" data-tilt>
              <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl backdrop-blur-sm border border-primary/20">
                <figure class="px-8 pt-8">
                  <div class="avatar-container">
                    <div class="w-36 rounded-full ring ring-primary/50 ring-offset-base-100 ring-offset-4">
                      <img src="/images/developers/Martin.jpg" alt="Martin Välba" class="w-36 h-36 rounded-full object-cover" />
                    </div>
                  </div>
                </figure>
                <div class="card-body items-center text-center">
                  <h3 class="card-title text-2xl mb-2 text-primary">Martin Välba</h3>
                  <div class="badge badge-primary badge-md mb-4">Founders and Developers</div>
                  <p class="text-base-content/80 mb-6 leading-relaxed text-sm">
                    Mainstream developer and maintainer of Zraxyl OS.
                  </p>
                  <div class="card-actions">
                    <a href="https://t.me/Hilledkinged" target="_blank" class="btn btn-primary btn-md gap-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      @Hilledkinged
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cybersecbyte -->
            <div class="developer-card card-cybersec" data-tilt>
              <div class="card bg-gradient-to-br from-secondary/10 to-accent/10 shadow-xl backdrop-blur-sm border border-secondary/20">
                <figure class="px-8 pt-8">
                  <div class="avatar-container">
                    <div class="w-36 rounded-full ring ring-secondary/50 ring-offset-base-100 ring-offset-4">
                      <img src="/images/developers/Cybersecbyte.jpg" alt="Cybersecbyte" class="w-36 h-36 rounded-full object-cover" />
                    </div>
                  </div>
                </figure>
                <div class="card-body items-center text-center">
                  <h3 class="card-title text-2xl mb-2 text-secondary">Cybersecbyte</h3>
                  <div class="badge badge-secondary badge-md mb-4">Founders and Developers</div>
                  <p class="text-base-content/80 mb-6 leading-relaxed text-sm">
                    Mainstream developer and maintainer of Zraxyl OS.
                  </p>
                  <div class="card-actions">
                    <a href="https://t.me/Cybersecbyte" target="_blank" class="btn btn-secondary btn-md gap-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      @Cybersecbyte
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Hax -->
            <div class="developer-card card-contributor" data-tilt>
              <div class="card bg-gradient-to-br from-accent/10 to-info/10 shadow-xl backdrop-blur-sm border border-accent/20">
                <figure class="px-8 pt-8">
                  <div class="avatar-container">
                    <div class="w-36 rounded-full ring ring-accent/50 ring-offset-base-100 ring-offset-4">
                      <img src="/images/developers/Hax.jpg" alt="Hax" class="w-36 h-36 rounded-full object-cover" />
                    </div>
                  </div>
                </figure>
                <div class="card-body items-center text-center">
                  <h3 class="card-title text-2xl mb-2 text-accent">Hax</h3>
                  <div class="badge badge-accent badge-sm mb-4">Fastfetch ASCII Design</div>
                  <p class="text-base-content/80 mb-6 leading-relaxed text-sm">
                    Creative contributor specializing in fastfetch ASCII art design and visual system branding elements.
                  </p>
                  <div class="card-actions">
                    <a href="https://t.me/h_2_o0" target="_blank" class="btn btn-accent btn-md gap-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      @h_2_o0
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Joe -->
            <div class="developer-card card-contributor" data-tilt>
              <div class="card bg-gradient-to-br from-info/10 to-success/10 shadow-xl backdrop-blur-sm border border-info/20">
                <figure class="px-8 pt-8">
                  <div class="avatar-container">
                    <div class="w-36 rounded-full ring ring-info/50 ring-offset-base-100 ring-offset-4">
                      <img src="/images/developers/Joe.jpg" alt="Joe" class="w-36 h-36 rounded-full object-cover" />
                    </div>
                  </div>
                </figure>
                <div class="card-body items-center text-center">
                  <h3 class="card-title text-2xl mb-2 text-info">Joe</h3>
                  <div class="badge badge-info badge-sm mb-4">XFCE Theme Designer</div>
                  <p class="text-base-content/80 mb-6 leading-relaxed text-sm">
                    UI/UX designer responsible for the current XFCE theme implementation and desktop environment aesthetics.
                  </p>
                  <div class="card-actions">
                    <a href="https://t.me/hellojoyyyyy" target="_blank" class="btn btn-info btn-md gap-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      @hellojoyyyyy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join the Team -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Join Our Team</h2>
          <p class="text-lg text-base-content/70 mb-8">
            We're always looking for talented developers, designers, and contributors
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/community" class="btn btn-primary btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join Community
            </NuxtLink>
            <a href="https://github.com/zraxyl/zraxyl-os/blob/main/CONTRIBUTING.md" target="_blank" class="btn btn-outline btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Contribution Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Developers - Meet the Zraxyl OS Team',
  meta: [
    { name: 'description', content: 'Meet the talented team behind Zraxyl OS. Learn about our core developers, technology stack, and development statistics.' }
  ]
})
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardShuffle {
  0% {
    transform: translateY(50px) rotateY(-15deg) rotateX(5deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateY(0deg) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes borderGlow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3), 0 0 10px rgba(102, 126, 234, 0.1);
  }
  50% {
    box-shadow: 0 0 15px rgba(102, 126, 234, 0.5), 0 0 25px rgba(102, 126, 234, 0.2);
  }
}

@keyframes borderGlowSecondary {
  0%, 100% {
    box-shadow: 0 0 5px rgba(118, 75, 162, 0.3), 0 0 10px rgba(118, 75, 162, 0.1);
  }
  50% {
    box-shadow: 0 0 15px rgba(118, 75, 162, 0.5), 0 0 25px rgba(118, 75, 162, 0.2);
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

/* Developers container with card shuffle effect */
.developers-container {
  perspective: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .developers-container {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
}

.developer-card {
  position: relative;
  transition: all 0.3s ease;
  max-width: 400px;
  height: 100%;
}

.developer-card .card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.developer-card .card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-martin {
  z-index: 2;
}

.card-cybersec {
  z-index: 1;
}

.card-martin .card {
  animation: borderGlow 3s ease-in-out infinite;
}

.card-cybersec .card {
  animation: borderGlowSecondary 3s ease-in-out infinite;
}

/* Contributor card styles */
.card-contributor {
  z-index: 1;
  max-width: 350px;
}

.card-contributor .card {
  animation: borderGlow 3s ease-in-out infinite 1s;
}

.card-contributor:nth-child(even) .card {
  animation: borderGlowSecondary 3s ease-in-out infinite 1.5s;
}

/* Light hover effects */
.developer-card:hover {
  transform: translateY(-5px);
}

.developer-card:hover .card {
  animation-play-state: paused;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(102, 126, 234, 0.4);
}

.card-cybersec:hover .card {
  animation-play-state: paused;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(118, 75, 162, 0.4);
}

/* Avatar container with subtle effects */
.avatar-container {
  position: relative;
  transition: all 0.3s ease;
}

.avatar-container:hover {
  transform: scale(1.05);
}



/* Card styling with light border effects */
.developer-card .card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}



/* Enhanced avatar styling */
.developer-card img {
  transition: all 0.3s ease;
  filter: brightness(0.9) contrast(1.1);
}

.developer-card:hover img {
  filter: brightness(1.05) contrast(1.15);
}

/* Ring effects */
.developer-card .ring {
  transition: all 0.3s ease;
}

.developer-card:hover .ring {
  ring-offset-width: 6px;
  ring-opacity: 70;
}

/* Button enhancements */
.developer-card .btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.developer-card .btn:hover {
  transform: translateY(-1px);
}



/* Typography effects */
.developer-card .card-title {
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .developer-card {
    max-width: 350px;
  }
  
  .developer-card:hover {
    transform: translateY(-3px);
  }
}

/* Card content stacking */
.developer-card .card-body > * {
  position: relative;
  z-index: 2;
}


</style>