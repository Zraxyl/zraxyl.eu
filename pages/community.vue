<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">Community</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            Join thousands of users and contributors in the Zraxyl OS community
          </p>
        </div>
      </div>
    </section>

    <!-- Community Guidelines -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Community Guidelines</h2>
          
          <div class="prose prose-lg max-w-none">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card bg-base-200 shadow-lg">
                <div class="card-body">
                  <h3 class="card-title text-success">✓ Do</h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li>Be respectful and inclusive</li>
                    <li>Help newcomers learn</li>
                    <li>Share knowledge freely</li>
                    <li>Follow project conventions</li>
                    <li>Test before submitting</li>
                  </ul>
                </div>
              </div>
              
              <div class="card bg-base-200 shadow-lg">
                <div class="card-body">
                  <h3 class="card-title text-error">✗ Don't</h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li>Engage in harassment</li>
                    <li>Post spam or off-topic content</li>
                    <li>Share proprietary code</li>
                    <li>Ignore security guidelines</li>
                    <li>Discriminate against others</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Section -->
    <CommunitySection />

    <!-- Connect With Us -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Connect With Us</h2>
          <p class="text-lg text-base-content/70">Follow Zraxyl OS on social media for the latest updates, tutorials, and community discussions</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Telegram -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#0088cc] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Telegram</h3>
              <p class="text-base-content/70 mb-4">Get instant notifications and join our fast-paced community discussions.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Members</div>
                  <div class="stat-value text-info text-lg">15.3K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Messages</div>
                  <div class="stat-value text-accent text-lg">47K</div>
                </div>
              </div>
              <a href="https://t.me/zraxyl" target="_blank" class="btn btn-info btn-wide">
                Join Channel
              </a>
            </div>
          </div>

          <!-- Discord -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Discord Server</h3>
              <p class="text-base-content/70 mb-4">Join our active Discord community for real-time support, discussions, and updates.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Members</div>
                  <div class="stat-value text-primary text-lg">8.2K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Online</div>
                  <div class="stat-value text-secondary text-lg">1.3K</div>
                </div>
              </div>
              <a href="https://discord.gg/nnjnZEeCJM" target="_blank" class="btn btn-primary btn-wide">
                Join Discord
              </a>
            </div>
          </div>

          <!-- GitHub -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#24292e] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">GitHub Repository</h3>
              <p class="text-base-content/70 mb-4">Browse source code, report issues, and contribute to Zraxyl OS development.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Stars</div>
                  <div class="stat-value text-warning text-lg">3.8K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Forks</div>
                  <div class="stat-value text-info text-lg">642</div>
                </div>
              </div>
              <a href="https://github.com/zraxyl" target="_blank" class="btn btn-accent btn-wide">
                View on GitHub
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>

    <!-- Get Involved -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Get Involved</h2>
          <p class="text-lg text-base-content/70">There are many ways to contribute to Zraxyl OS</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Code Contributions</h3>
              <p class="text-base-content/70 mb-4">Help improve the kernel, system tools, and applications</p>
              <a href="#" class="btn btn-outline btn-primary">Start Contributing</a>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Documentation</h3>
              <p class="text-base-content/70 mb-4">Write guides, tutorials, and improve existing docs</p>
              <a href="#" class="btn btn-outline btn-secondary">Help with Docs</a>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Community Support</h3>
              <p class="text-base-content/70 mb-4">Help other users in forums and chat channels</p>
              <a href="#" class="btn btn-outline btn-accent">Join Support Team</a>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-info rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-info-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Bug Reporting</h3>
              <p class="text-base-content/70 mb-4">Report issues and help test new features</p>
              <a href="#" class="btn btn-outline btn-info">Report Bugs</a>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Spread the Word</h3>
              <p class="text-base-content/70 mb-4">Share Zraxyl OS with friends and colleagues</p>
              <a href="#" class="btn btn-outline btn-success">Share Zraxyl</a>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-warning-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 class="card-title mb-2">Donate</h3>
              <p class="text-base-content/70 mb-4">Support development with financial contributions</p>
              <a href="#" class="btn btn-outline btn-warning">Donate Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Community - Zraxyl OS',
  meta: [
    { name: 'description', content: 'Join the Zraxyl OS community. Connect with users, contribute to development, get support, and follow us on social media.' }
  ]
})
</script>