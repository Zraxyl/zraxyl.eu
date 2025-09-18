<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">Download Zraxyl OS</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto mb-6">
            Get the latest stable release of Zraxyl OS for your system
          </p>
          <div class="stats stats-vertical lg:stats-horizontal shadow bg-base-100">
            <div class="stat">
              <div class="stat-title">Current Version</div>
              <div class="stat-value text-primary">v2.4.1</div>
              <div class="stat-desc">Released: Dec 15, 2024</div>
            </div>
            <div class="stat">
              <div class="stat-title">Total Downloads</div>
              <div class="stat-value text-secondary">2.8M+</div>
              <div class="stat-desc">Since launch</div>
            </div>
            <div class="stat">
              <div class="stat-title">File Size</div>
              <div class="stat-value text-accent">3.2GB</div>
              <div class="stat-desc">Desktop Edition</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <DownloadSection />

    <!-- Additional Downloads -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Additional Downloads</h2>
          <p class="text-lg text-base-content/70">Beta releases, older versions, and specialized builds</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body">
              <div class="flex items-center justify-between mb-4">
                <h3 class="card-title">Beta Releases</h3>
                <div class="badge badge-warning">v2.5.0-beta</div>
              </div>
              <p class="text-base-content/70 mb-4">Try the latest features before they're stable. Includes experimental kernel 6.7 and new desktop environment.</p>
              <div class="text-sm text-base-content/60 mb-4">
                <div class="flex justify-between"><span>Size:</span> <span>3.4GB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Jan 8, 2024</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>12.5K</span></div>
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-outline btn-warning">Download Beta</button>
              </div>
            </div>
          </div>
          
          <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body">
              <div class="flex items-center justify-between mb-4">
                <h3 class="card-title">ARM64 Build</h3>
                <div class="badge badge-secondary">v2.4.1</div>
              </div>
              <p class="text-base-content/70 mb-4">For Raspberry Pi 4/5, Apple Silicon Macs (via VM), and other ARM-based systems. Full feature parity with x64.</p>
              <div class="text-sm text-base-content/60 mb-4">
                <div class="flex justify-between"><span>Size:</span> <span>2.8GB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Dec 15, 2024</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>45.2K</span></div>
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-outline btn-secondary">Download ARM64</button>
              </div>
            </div>
          </div>
          
          <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body">
              <div class="flex items-center justify-between mb-4">
                <h3 class="card-title">Minimal ISO</h3>
                <div class="badge badge-accent">v2.4.1</div>
              </div>
              <p class="text-base-content/70 mb-4">Bare minimum installation for custom builds. No GUI, only essential packages. Perfect for servers.</p>
              <div class="text-sm text-base-content/60 mb-4">
                <div class="flex justify-between"><span>Size:</span> <span>890MB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Dec 15, 2024</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>78.9K</span></div>
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-outline btn-accent">Download Minimal</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Historical Versions -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-center mb-8">Historical Versions</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Release Date</th>
                  <th>Kernel</th>
                  <th>Notable Features</th>
                  <th>Downloads</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div class="badge badge-outline">v2.3.2</div></td>
                  <td>Nov 28, 2024</td>
                  <td>6.5.8</td>
                  <td>Performance improvements, bug fixes</td>
                  <td>234K</td>
                  <td><button class="btn btn-ghost btn-sm">Download</button></td>
                </tr>
                <tr>
                  <td><div class="badge badge-outline">v2.2.1</div></td>
                  <td>Oct 15, 2024</td>
                  <td>6.4.12</td>
                  <td>New package manager, UI updates</td>
                  <td>456K</td>
                  <td><button class="btn btn-ghost btn-sm">Download</button></td>
                </tr>
                <tr>
                  <td><div class="badge badge-outline">v2.1.0</div></td>
                  <td>Sep 2, 2024</td>
                  <td>6.3.9</td>
                  <td>Container support, security enhancements</td>
                  <td>678K</td>
                  <td><button class="btn btn-ghost btn-sm">Download</button></td>
                </tr>
                <tr>
                  <td><div class="badge badge-outline">v2.0.0</div></td>
                  <td>Jul 20, 2024</td>
                  <td>6.2.15</td>
                  <td>Major rewrite, new desktop environment</td>
                  <td>892K</td>
                  <td><button class="btn btn-ghost btn-sm">Download</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Verification -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Verify Your Download</h2>
          
          <div class="alert alert-info mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>We strongly recommend verifying the integrity and authenticity of your downloads using the checksums and GPG signatures below.</span>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="card bg-base-200 shadow-lg">
              <div class="card-body">
                <h3 class="card-title mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  SHA256 Checksums
                </h3>
                <div class="mockup-code text-xs">
                  <pre><code>zraxyl-desktop-x64-v2.4.1.iso
sha256: a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890</code></pre>
                  <pre><code>zraxyl-server-x64-v2.4.1.iso
sha256: f6e5d4c3b2a1098765432109876543210987654321098765432109876543210f</code></pre>
                  <pre><code>zraxyl-dev-x64-v2.4.1.iso
sha256: 123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01</code></pre>
                  <pre><code>zraxyl-minimal-x64-v2.4.1.iso
sha256: 987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba09</code></pre>
                </div>
              </div>
            </div>
            
            <div class="card bg-base-200 shadow-lg">
              <div class="card-body">
                <h3 class="card-title mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2a2 2 0 00-2-2M9 7a2 2 0 00-2 2m0 0a2 2 0 00-2 2m2-2a2 2 0 012 2m-2-2a2 2 0 012-2" />
                  </svg>
                  Verification Commands
                </h3>
                <div class="mockup-code text-xs">
                  <pre data-prefix="$"><code>wget https://releases.zraxyl.org/v2.4.1/SHA256SUMS</code></pre>
                  <pre data-prefix="$"><code>sha256sum -c SHA256SUMS</code></pre>
                  <pre data-prefix="$"><code>wget https://releases.zraxyl.org/v2.4.1/SHA256SUMS.sig</code></pre>
                  <pre data-prefix="$"><code>gpg --verify SHA256SUMS.sig SHA256SUMS</code></pre>
                </div>
                <div class="mt-4">
                  <p class="text-sm text-base-content/70 mb-2">GPG Key Fingerprint:</p>
                  <code class="text-xs bg-base-300 p-2 rounded block">4A2B 8C1D 9E3F 7G8H 5I6J 0K1L 2M3N 4O5P 6Q7R 8S9T</code>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Installation Guide Link -->
          <div class="text-center mt-12">
            <div class="card bg-primary text-primary-content shadow-lg">
              <div class="card-body">
                <h3 class="card-title justify-center mb-4">Need Help Installing?</h3>
                <p class="mb-4">Check out our comprehensive installation guide with step-by-step instructions, troubleshooting tips, and best practices.</p>
                <div class="card-actions justify-center">
                  <NuxtLink to="/docs#installation" class="btn btn-secondary">Installation Guide</NuxtLink>
                  <a href="https://youtube.com/zraxyl-tutorials" target="_blank" class="btn btn-outline btn-secondary">Video Tutorials</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Download - Zraxyl OS',
  meta: [
    { name: 'description', content: 'Download the latest version of Zraxyl OS. Available in Desktop, Server, and Developer editions.' }
  ]
})
</script>