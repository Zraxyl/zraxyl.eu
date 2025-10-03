<template>
  <div class="min-h-screen bg-base-100">
    <!-- Navigation -->
    <nav class="navbar bg-base-200 shadow-lg sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/download">Download</NuxtLink></li>
            <li><NuxtLink to="/docs">Documentation</NuxtLink></li>
            <li><NuxtLink to="/community">Community</NuxtLink></li>
            <li><NuxtLink to="/developers">Developers</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl font-bold">
          <ZraxylLogo />
        </NuxtLink>
      </div>
      
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 space-x-2">
          <li><NuxtLink to="/" class="btn btn-ghost">Home</NuxtLink></li>
          <li><NuxtLink to="/download" class="btn btn-ghost">Download</NuxtLink></li>
          <li><NuxtLink to="/docs" class="btn btn-ghost">Documentation</NuxtLink></li>
          <li><NuxtLink to="/community" class="btn btn-ghost">Community</NuxtLink></li>
          <li><NuxtLink to="/developers" class="btn btn-ghost">Developers</NuxtLink></li>
        </ul>
      </div>
      
      <div class="navbar-end space-x-2">
        <a href="https://github.com" target="_blank" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <ThemeController />
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <nav class="grid grid-flow-col gap-4">
        <NuxtLink to="/docs" class="link link-hover">Documentation</NuxtLink>
        <NuxtLink to="/download" class="link link-hover">Download</NuxtLink>
        <NuxtLink to="/community" class="link link-hover">Community</NuxtLink>
        <NuxtLink to="/developers" class="link link-hover">Developers</NuxtLink>
        <a href="https://github.com/zraxyl" target="_blank" class="link link-hover">GitHub</a>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a href="#" class="link link-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#" class="link link-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#" class="link link-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p class="text-sm">
          © 2025 Zraxyl OS. Built from scratch with passion. 
          <br />
          Made with 💜 by the open source community.
        </p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
// Add any layout-specific logic here
</script>

<style>
.hero-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(2deg); }
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle:nth-child(1) { width: 4px; height: 4px; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { width: 6px; height: 6px; left: 20%; animation-delay: 2s; }
.particle:nth-child(3) { width: 3px; height: 3px; left: 30%; animation-delay: 4s; }
.particle:nth-child(4) { width: 5px; height: 5px; left: 40%; animation-delay: 1s; }
.particle:nth-child(5) { width: 4px; height: 4px; left: 50%; animation-delay: 3s; }
.particle:nth-child(6) { width: 7px; height: 7px; left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { width: 3px; height: 3px; left: 70%; animation-delay: 1.5s; }
.particle:nth-child(8) { width: 5px; height: 5px; left: 80%; animation-delay: 3.5s; }
.particle:nth-child(9) { width: 4px; height: 4px; left: 90%; animation-delay: 2.5s; }
.particle:nth-child(10) { width: 6px; height: 6px; left: 15%; animation-delay: 4.5s; }

@keyframes float {
  0%, 100% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  50% {
    transform: translateY(-10vh) rotate(180deg);
  }
}

.code-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
}

.code-column {
  position: absolute;
  top: -100%;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  animation: matrixRain 8s linear infinite;
}

@keyframes matrixRain {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  10%, 90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.typing-animation {
  border-right: 2px solid #00ff00;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}

.network-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.network-node {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.network-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: lineGlow 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
}

@keyframes lineGlow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.5; }
}

.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.terminal-window {
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.terminal-window::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.1), transparent);
  animation: scanline 3s ease-in-out infinite;
}

@keyframes scanline {
  0% { left: -100%; }
  100% { left: 100%; }
}

.terminal-header {
  background: #2d2d2d;
  height: 30px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  z-index: 2;
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: buttonPulse 2s ease-in-out infinite;
}

@keyframes buttonPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.terminal-button.red { background: #ff5f57; }
.terminal-button.yellow { background: #febc2e; animation-delay: 0.3s; }
.terminal-button.green { background: #28ca42; animation-delay: 0.6s; }

.fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scroll-triggered animations */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.animate-on-scroll.animate {
  opacity: 1;
}

.slide-left { animation: slideInFromLeft 0.8s ease-out forwards; }
.slide-right { animation: slideInFromRight 0.8s ease-out forwards; }
.slide-bottom { animation: slideInFromBottom 0.8s ease-out forwards; }
</style>