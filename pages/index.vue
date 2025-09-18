<template>
  <div>
    <!-- Hero Section -->
    <section class="hero min-h-screen hero-gradient relative overflow-hidden" id="hero-section">
      <!-- Animated Background Elements -->
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      
      <!-- Interactive Mouse Follower -->
      <div class="mouse-follower" id="mouse-follower"></div>
      <div class="mouse-trail" id="mouse-trail"></div>
      
      <!-- Floating Geometric Shapes -->
      <div class="floating-shapes">
        <div class="shape shape-1" data-speed="0.5"></div>
        <div class="shape shape-2" data-speed="0.3"></div>
        <div class="shape shape-3" data-speed="0.7"></div>
        <div class="shape shape-4" data-speed="0.4"></div>
        <div class="shape shape-5" data-speed="0.6"></div>
      </div>
      
      <!-- Network Background -->
      <div class="network-bg" id="network-bg">
        <div class="network-node" style="top: 20%; left: 15%;" data-parallax="0.3"></div>
        <div class="network-node" style="top: 40%; left: 25%;" data-parallax="0.5"></div>
        <div class="network-node" style="top: 60%; left: 75%;" data-parallax="0.2"></div>
        <div class="network-node" style="top: 30%; left: 85%;" data-parallax="0.4"></div>
        <div class="network-node" style="top: 70%; left: 45%;" data-parallax="0.6"></div>
        <div class="network-line" style="top: 20%; left: 15%; width: 200px; transform: rotate(45deg);" data-parallax="0.3"></div>
        <div class="network-line" style="top: 40%; left: 25%; width: 300px; transform: rotate(-30deg);" data-parallax="0.5"></div>
        <div class="network-line" style="top: 60%; left: 45%; width: 250px; transform: rotate(60deg);" data-parallax="0.4"></div>
      </div>
      
      <!-- Code Rain Effect -->
      <div class="code-rain">
        <div class="code-column" style="left: 5%; animation-delay: 0s;">01101001<br>11000101<br>10110010<br>01010111</div>
        <div class="code-column" style="left: 15%; animation-delay: 2s;">def main():<br>&nbsp;&nbsp;return 0<br>kernel.c<br>#include</div>
        <div class="code-column" style="left: 25%; animation-delay: 4s;">zraxyl-os<br>localhost<br>sudo su<br>./compile</div>
        <div class="code-column" style="left: 35%; animation-delay: 1s;">#!/bin/bash<br>echo "Hello"<br>make install<br>systemctl</div>
        <div class="code-column" style="left: 45%; animation-delay: 3s;">git commit<br>docker run<br>nginx -t<br>chmod +x</div>
        <div class="code-column" style="left: 55%; animation-delay: 5s;">10001101<br>01110010<br>11010011<br>00101110</div>
        <div class="code-column" style="left: 65%; animation-delay: 1.5s;">vim ~/.bashrc<br>export PATH<br>source env<br>python3 -m</div>
        <div class="code-column" style="left: 75%; animation-delay: 3.5s;">kernel: 6.5<br>arch: x64<br>mem: 16GB<br>cpu: 8core</div>
        <div class="code-column" style="left: 85%; animation-delay: 2.5s;">ls -la<br>cd /home<br>mkdir src<br>git clone</div>
        <div class="code-column" style="left: 95%; animation-delay: 4.5s;">11100001<br>00111010<br>10101101<br>01000110</div>
      </div>
      
      <div class="hero-overlay bg-opacity-20"></div>
      <div class="hero-content text-center text-white z-10 parallax-content" data-parallax="0.1">
        <div class="max-w-md lg:max-w-4xl">
          <h1 class="mb-5 text-5xl lg:text-7xl font-bold fade-in hover-tilt" data-tilt-max="5">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 glow-text">
              Zraxyl OS
            </span>
          </h1>
          <p class="mb-5 text-xl lg:text-2xl opacity-90 fade-in hover-float">
            A powerful Linux distribution built from scratch for developers, enthusiasts, and power users
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <NuxtLink to="/download" class="btn btn-primary btn-lg glass-effect hover:scale-105 transform transition-all hover-glow magnetic-btn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Now
            </NuxtLink>
            <NuxtLink to="/docs" class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-gray-800 transform hover:scale-105 transition-all magnetic-btn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Documentation
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Terminal Demo -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 hover-float-slow">
        <div class="terminal-window fade-in hover-glow-terminal">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <div class="terminal-button red hover-pulse"></div>
              <div class="terminal-button yellow hover-pulse"></div>
              <div class="terminal-button green hover-pulse"></div>
            </div>
            <span class="ml-4 text-gray-400 text-sm">zraxyl@localhost:~</span>
          </div>
          <div class="p-4 text-green-400 font-mono text-sm relative z-10">
            <div class="mb-2 typing-animation cursor-blink">$ neofetch</div>
            <div class="mb-1 text-blue-400 terminal-line">       ███████ Zraxyl OS</div>
            <div class="mb-1 text-blue-400 terminal-line">      ███   ███ ----------</div>
            <div class="mb-1 text-blue-400 terminal-line">     ███     ███ OS: Zraxyl Linux x86_64</div>
            <div class="mb-1 text-blue-400 terminal-line">    ███   ███     Host: Custom Build</div>
            <div class="mb-1 text-blue-400 terminal-line">   ███████       Kernel: 6.5.0-zraxyl</div>
            <div class="text-gray-400 terminal-line">Shell: zsh 5.9</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-base-100 relative overflow-hidden">
      <!-- Background Gradient Orbs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="gradient-orb gradient-orb-1" data-speed="0.2"></div>
        <div class="gradient-orb gradient-orb-2" data-speed="0.3"></div>
        <div class="gradient-orb gradient-orb-3" data-speed="0.1"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 animate-on-scroll" data-animation="slide-bottom">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 hover-tilt" data-tilt-max="3">Why Choose Zraxyl?</h2>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto hover-float">
            Built from the ground up with modern development practices and user experience in mind
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.1s;">
            <FeatureCard 
              icon="⚡" 
              title="Lightning Fast" 
              description="Optimized kernel and minimal bloat ensure maximum performance for your hardware"
              color="primary"
            />
          </div>
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.2s;">
            <FeatureCard 
              icon="🔒" 
              title="Secure by Design" 
              description="Built-in security features and hardened configurations protect your system from threats"
              color="secondary"
            />
          </div>
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.3s;">
            <FeatureCard 
              icon="⚙️" 
              title="Highly Customizable" 
              description="From kernel modules to desktop environments, everything can be tailored to your needs"
              color="accent"
            />
          </div>
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.4s;">
            <FeatureCard 
              icon="👨‍💻" 
              title="Developer Focused" 
              description="Pre-installed development tools and optimized workflow for programmers and sysadmins"
              color="info"
            />
          </div>
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.5s;">
            <FeatureCard 
              icon="👥" 
              title="Community Driven" 
              description="Open source development with active community support and contributions"
              color="success"
            />
          </div>
          <div class="animate-on-scroll magnetic-card" data-animation="slide-bottom" style="animation-delay: 0.6s;">
            <FeatureCard 
              icon="🚀" 
              title="Innovative" 
              description="Cutting-edge features and modern Linux technologies integrated seamlessly"
              color="warning"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Download CTA Section -->
    <section class="py-20 bg-primary text-primary-content relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="circuit-pattern"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 hover-tilt" data-tilt-max="2">Ready to Experience Zraxyl?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto hover-float">
          Join thousands of users who have already made the switch to a more powerful, secure, and customizable Linux experience
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/download" class="btn btn-secondary btn-lg magnetic-btn hover-glow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Zraxyl OS
          </NuxtLink>
          <NuxtLink to="/community" class="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary magnetic-btn">
            Join Community
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO and meta tags
useHead({
  title: 'Zraxyl OS - Linux Distribution Built From Scratch',
  meta: [
    { name: 'description', content: 'A powerful Linux distribution built from scratch for developers, enthusiasts, and power users. Fast, secure, and highly customizable.' },
    { name: 'keywords', content: 'Zraxyl, Linux, distribution, operating system, open source, custom Linux' }
  ]
})

import { onMounted } from 'vue'

onMounted(() => {
  // Mouse tracking variables
  let mouseX = 0
  let mouseY = 0
  let mouseTrail = []
  const maxTrailLength = 20

  // Mouse movement tracking
  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Update mouse follower
    const follower = document.getElementById('mouse-follower')
    if (follower) {
      follower.style.left = mouseX + 'px'
      follower.style.top = mouseY + 'px'
    }

    // Update mouse trail
    mouseTrail.push({ x: mouseX, y: mouseY, opacity: 1 })
    if (mouseTrail.length > maxTrailLength) {
      mouseTrail.shift()
    }

    // Update trail elements
    const trail = document.getElementById('mouse-trail')
    if (trail) {
      let trailHTML = ''
      mouseTrail.forEach((point, index) => {
        const opacity = (index / maxTrailLength) * 0.5
        const size = (index / maxTrailLength) * 10 + 2
        trailHTML += `<div class="trail-point" style="left: ${point.x}px; top: ${point.y}px; opacity: ${opacity}; width: ${size}px; height: ${size}px;"></div>`
      })
      trail.innerHTML = trailHTML
    }

    // Parallax effect for elements
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax)
      const x = (mouseX - window.innerWidth / 2) * speed
      const y = (mouseY - window.innerHeight / 2) * speed
      el.style.transform = `translate(${x}px, ${y}px)`
    })

    // Magnetic effect for buttons
    document.querySelectorAll('.magnetic-btn, .magnetic-card').forEach(el => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = mouseX - centerX
      const deltaY = mouseY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      if (distance < 100) {
        const strength = Math.max(0, (100 - distance) / 100)
        const moveX = deltaX * strength * 0.3
        const moveY = deltaY * strength * 0.3
        el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`
      } else {
        el.style.transform = 'translate(0px, 0px) scale(1)'
      }
    })

    // Tilt effect for elements
    document.querySelectorAll('.hover-tilt').forEach(el => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (mouseX - centerX) / rect.width
      const deltaY = (mouseY - centerY) / rect.height
      const maxTilt = parseFloat(el.dataset.tiltMax) || 10
      
      if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
        const tiltX = deltaY * maxTilt
        const tiltY = -deltaX * maxTilt
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      } else {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }
    })
  }

  // Scroll-based parallax for floating shapes
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    
    document.querySelectorAll('.shape').forEach(shape => {
      const speed = parseFloat(shape.dataset.speed) || 0.5
      const yPos = -(scrolled * speed)
      shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`
    })

    // Gradient orbs movement
    document.querySelectorAll('.gradient-orb').forEach(orb => {
      const speed = parseFloat(orb.dataset.speed) || 0.1
      const yPos = scrolled * speed
      orb.style.transform = `translateY(${yPos}px)`
    })
  }

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)

  // Cleanup on unmount
  const cleanup = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
  }

  // Floating animation for elements
  document.querySelectorAll('.hover-float').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`
  })

  // Scroll animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target
        const animation = element.dataset.animation
        element.classList.add('animate', animation)
        
        // Trigger counter animation for stats
        if (element.querySelector('.counter')) {
          animateCounter(element.querySelector('.counter'))
        }
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })

  // Counter animation function
  function animateCounter(element) {
    const target = parseInt(element.dataset.target)
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        element.textContent = formatNumber(Math.floor(current))
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = formatNumber(target)
      }
    }
    
    updateCounter()
  }

  // Format numbers with K, M suffixes
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  // Typing animation for terminal
  setTimeout(() => {
    const typingElement = document.querySelector('.typing-animation')
    if (typingElement) {
      let text = '$ neofetch'
      typingElement.textContent = ''
      let i = 0
      
      const typeWriter = () => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        } else {
          // Add blinking cursor
          typingElement.classList.add('cursor-blink')
          // Animate terminal lines
          setTimeout(() => {
            document.querySelectorAll('.terminal-line').forEach((line, index) => {
              setTimeout(() => {
                line.style.opacity = '1'
                line.style.transform = 'translateX(0)'
              }, index * 200)
            })
          }, 500)
        }
      }
      
      typeWriter()
    }
  }, 2000)

  // Return cleanup function
  return cleanup
})
</script>

<style scoped>
/* Interactive Mouse Effects */
.mouse-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.8) 0%, rgba(102, 126, 234, 0.2) 50%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  mix-blend-mode: screen;
}

.mouse-trail {
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  top: 0;
  left: 0;
}

.trail-point {
  position: absolute;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}

/* Floating Geometric Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(255, 255, 255, 0.1));
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, rgba(118, 75, 162, 0.1), rgba(255, 255, 255, 0.1));
  top: 60%;
  left: 80%;
  animation-delay: 2s;
  border-radius: 0;
  transform: rotate(45deg);
}

.shape-3 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(255, 255, 255, 0.05));
  top: 40%;
  left: 70%;
  animation-delay: 4s;
}

.shape-4 {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, rgba(118, 75, 162, 0.08), rgba(255, 255, 255, 0.08));
  top: 80%;
  left: 20%;
  animation-delay: 1s;
  border-radius: 10px;
}

.shape-5 {
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.12), rgba(255, 255, 255, 0.12));
  top: 10%;
  left: 60%;
  animation-delay: 3s;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

/* Gradient Orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  animation: orb-float 15s ease-in-out infinite;
}

.gradient-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.gradient-orb-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.08) 0%, transparent 70%);
  top: 60%;
  right: -5%;
  animation-delay: 5s;
}

.gradient-orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.06) 0%, transparent 70%);
  bottom: 10%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes orb-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Circuit Pattern */
.circuit-pattern {
  background-image: 
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
  animation: circuit-move 20s linear infinite;
}

@keyframes circuit-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}

/* Interactive Animations */
.hover-tilt {
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
}

.hover-float {
  animation: gentle-float 6s ease-in-out infinite;
}

.hover-float-slow {
  animation: gentle-float 8s ease-in-out infinite;
}

@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 
    0 0 20px rgba(102, 126, 234, 0.5),
    0 0 40px rgba(102, 126, 234, 0.3),
    0 0 60px rgba(102, 126, 234, 0.1);
}

.hover-glow-terminal {
  transition: all 0.3s ease;
}

.hover-glow-terminal:hover {
  box-shadow: 
    0 0 30px rgba(34, 197, 94, 0.3),
    0 0 60px rgba(34, 197, 94, 0.1);
}

.glow-text {
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(102, 126, 234, 0.6),
    0 0 30px rgba(102, 126, 234, 0.4);
}

/* Magnetic Effects */
.magnetic-btn, .magnetic-card {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}

/* Terminal Enhancements */
.cursor-blink::after {
  content: '_';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.terminal-line {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
}

.terminal-button {
  transition: all 0.2s ease;
}

.hover-pulse:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Parallax Content */
.parallax-content {
  transform-style: preserve-3d;
}

/* Hero Section Styles */
.hero-gradient {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%);
  position: relative;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particle-float 15s linear infinite;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 2s; }
.particle:nth-child(3) { left: 30%; animation-delay: 4s; }
.particle:nth-child(4) { left: 40%; animation-delay: 1s; }
.particle:nth-child(5) { left: 50%; animation-delay: 3s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 2.5s; }
.particle:nth-child(8) { left: 80%; animation-delay: 4.5s; }
.particle:nth-child(9) { left: 90%; animation-delay: 1.5s; }
.particle:nth-child(10) { left: 95%; animation-delay: 3.5s; }

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.network-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.network-node {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.8);
  animation: pulse-node 3s ease-in-out infinite;
}

.network-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.4), transparent);
  animation: pulse-line 4s ease-in-out infinite;
}

@keyframes pulse-node {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

@keyframes pulse-line {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
}

.code-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  color: rgba(34, 197, 94, 0.3);
  overflow: hidden;
}

.code-column {
  position: absolute;
  top: 0;
  white-space: pre;
  animation: code-fall 10s linear infinite;
  line-height: 1.2;
}

@keyframes code-fall {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.terminal-window {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.terminal-header {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  display: flex;
  align-items: center;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-button.red {
  background: #ff5f56;
}

.terminal-button.yellow {
  background: #ffbd2e;
}

.terminal-button.green {
  background: #27ca3f;
}

.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;
}

.fade-in:nth-child(1) { animation-delay: 0.2s; }
.fade-in:nth-child(2) { animation-delay: 0.4s; }
.fade-in:nth-child(3) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll Animations */
.animate {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.slide-bottom {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.slide-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease;
}

.slide-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease;
}
</style>