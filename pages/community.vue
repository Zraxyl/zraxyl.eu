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

    <!-- Community Section -->
    <CommunitySection />

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

    <!-- Contact -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
          <p class="text-lg text-base-content/70">Get in touch with the Zraxyl team</p>
        </div>
        
        <div class="max-w-2xl mx-auto">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <form class="space-y-4">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Your name" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Your email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Subject</span>
                  </label>
                  <select class="select select-bordered">
                    <option disabled selected>Choose a topic</option>
                    <option>General Question</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Message</span>
                  </label>
                  <textarea class="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Send Message</button>
                </div>
              </form>
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
    { name: 'description', content: 'Join the Zraxyl OS community. Connect with users, contribute to development, and get support.' }
  ]
})
</script>