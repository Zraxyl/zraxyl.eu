<template>
  <div class="min-h-screen bg-base-100">

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
                <div class="flex justify-between"><span>Size:</span> <span>3GB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Todo</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>Todo</span></div>
              </div>
              <div class="card-actions justify-end">
                <a href="https://github.com/zraxyl" target="_blank" class="btn btn-outline btn-warning">Download</a>
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
                <div class="flex justify-between"><span>Size:</span> <span>2GB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Todo</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>Todo</span></div>
              </div>
              <div class="card-actions justify-end">
                <a href="https://github.com/zraxyl" target="_blank" class="btn btn-outline btn-secondary">Download</a>
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
                <div class="flex justify-between"><span>Size:</span> <span>900MB</span></div>
                <div class="flex justify-between"><span>Released:</span> <span>Todo</span></div>
                <div class="flex justify-between"><span>Downloads:</span> <span>Todo</span></div>
              </div>
              <div class="card-actions justify-end">
                <a href="https://github.com/zraxyl" target="_blank" class="btn btn-outline btn-accent">Download</a>
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
                  <th>Status</th>
                  <th>Release Date</th>
                  <th>Kernel</th>
                  <th>Notable Features</th>
                  <th>Downloads</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div class="badge badge-outline">v1.0</div></td>
                  <td>Todo</td>
                  <td>Nov 28, 2035</td>
                  <td>6.5.8</td>
                  <td>Performance improvements, bug fixes</td>
                  <td>234K</td>
                  <td><a href="https://github.com/zraxyl" target="_blank" class="btn btn-ghost btn-sm">Download</a></td>
                </tr>
                <tr>
                  <td><div class="badge badge-outline">v2.0</div></td>
                  <td>Todo</td>
                  <td>Jul 20, 2060</td>
                  <td>6.2.15</td>
                  <td>Major rewrite, new desktop environment</td>
                  <td>892K</td>
                  <td><a href="https://github.com/zraxyl" target="_blank" class="btn btn-ghost btn-sm">Download</a></td>
                </tr>
              </tbody>
            </table>
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