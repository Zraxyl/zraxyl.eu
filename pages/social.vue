<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">Connect With Us</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            Follow Zraxyl OS on social media for the latest updates, tutorials, and community discussions
          </p>
        </div>
      </div>
    </section>

    <!-- Social Media Links -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <a href="https://discord.gg/zraxyl" target="_blank" class="btn btn-primary btn-wide">
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
              <a href="https://github.com/zraxyl/zraxyl-os" target="_blank" class="btn btn-accent btn-wide">
                View on GitHub
              </a>
            </div>
          </div>

          <!-- Reddit -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#FF4500] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">r/ZraxylOS</h3>
              <p class="text-base-content/70 mb-4">Join discussions, ask questions, and share your Zraxyl OS experience with the community.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Members</div>
                  <div class="stat-value text-error text-lg">12.5K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Posts</div>
                  <div class="stat-value text-success text-lg">2.1K</div>
                </div>
              </div>
              <a href="https://reddit.com/r/zraxyl" target="_blank" class="btn btn-error btn-wide">
                Join Subreddit
              </a>
            </div>
          </div>

          <!-- YouTube -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">YouTube Channel</h3>
              <p class="text-base-content/70 mb-4">Watch tutorials, installation guides, and feature demonstrations.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Subscribers</div>
                  <div class="stat-value text-error text-lg">45.2K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Videos</div>
                  <div class="stat-value text-warning text-lg">127</div>
                </div>
              </div>
              <a href="https://youtube.com/@zraxyl" target="_blank" class="btn btn-error btn-wide">
                Subscribe
              </a>
            </div>
          </div>

          <!-- Twitter -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-20 h-20 bg-[#1DA1F2] rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Twitter</h3>
              <p class="text-base-content/70 mb-4">Follow us for quick updates, news, and announcements about Zraxyl OS.</p>
              <div class="stats stats-vertical lg:stats-horizontal shadow mb-4">
                <div class="stat place-items-center">
                  <div class="stat-title">Followers</div>
                  <div class="stat-value text-info text-lg">28.7K</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Tweets</div>
                  <div class="stat-value text-primary text-lg">1.8K</div>
                </div>
              </div>
              <a href="https://twitter.com/zraxyl" target="_blank" class="btn btn-info btn-wide">
                Follow Us
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
          <p class="text-lg text-base-content/70 mb-8">
            Subscribe to our newsletter for monthly updates, release announcements, and exclusive content.
          </p>
          
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <form class="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  class="input input-bordered flex-1" 
                  required 
                />
                <button type="submit" class="btn btn-primary">
                  Subscribe
                </button>
              </form>
              <p class="text-sm text-base-content/60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Social Media - Connect with Zraxyl OS',
  meta: [
    { name: 'description', content: 'Follow Zraxyl OS on social media platforms. Join our Discord, GitHub, Reddit, YouTube, Twitter, and Telegram communities.' }
  ]
})
</script>