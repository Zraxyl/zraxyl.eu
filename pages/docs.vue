<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">Documentation</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            Everything you need to know about installing, configuring, and using Zraxyl OS
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <!-- Sidebar -->
        <div class="lg:w-1/4">
          <div class="sticky top-24">
            <div class="card bg-base-200 shadow-lg">
              <div class="card-body">
                <h3 class="card-title mb-4">Quick Navigation</h3>
                <ul class="menu menu-compact">
                  <li><a href="#getting-started" class="hover:bg-primary hover:text-primary-content">Getting Started</a></li>
                  <li><a href="#installation" class="hover:bg-primary hover:text-primary-content">Installation</a></li>
                  <li><a href="#configuration" class="hover:bg-primary hover:text-primary-content">Configuration</a></li>
                  <li><a href="#package-management" class="hover:bg-primary hover:text-primary-content">Package Management</a></li>
                  <li><a href="#desktop-environments" class="hover:bg-primary hover:text-primary-content">Desktop Environments</a></li>
                  <li><a href="#security" class="hover:bg-primary hover:text-primary-content">Security Features</a></li>
                  <li><a href="#development" class="hover:bg-primary hover:text-primary-content">Development</a></li>
                  <li><a href="#troubleshooting" class="hover:bg-primary hover:text-primary-content">Troubleshooting</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:w-3/4">
          <div class="prose prose-lg max-w-none">
            <!-- Getting Started -->
            <section id="getting-started" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Getting Started</h2>
              
              <div class="alert alert-info mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>This guide assumes you have basic knowledge of Linux systems and command-line usage.</span>
              </div>

              <p class="text-lg mb-6">
                Welcome to Zraxyl OS! This comprehensive documentation will guide you through installation, configuration, and usage of our custom Linux distribution.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div class="card bg-base-200 hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h4 class="card-title text-lg">🚀 Installation Guides</h4>
                    <p class="text-sm mb-4">Complete guides for different installation types and desktop environments.</p>
                    <ul class="text-sm space-y-1">
                      <li>• <a href="#base-installation" class="link link-primary">Base (CLI) Installation</a></li>
                      <li>• <a href="#plasma-installation" class="link link-primary">KDE Plasma Desktop</a></li>
                      <li>• <a href="#xfce-installation" class="link link-primary">XFCE4 Desktop</a></li>
                    </ul>
                  </div>
                </div>
                
                <div class="card bg-base-200 hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h4 class="card-title text-lg">📦 Metapackages</h4>
                    <p class="text-sm mb-4">Learn about our metapackage system and available desktop environments.</p>
                    <ul class="text-sm space-y-1">
                      <li>• Desktop Environments</li>
                      <li>• Fonts & Drivers</li>
                      <li>• Development Tools</li>
                    </ul>
                  </div>
                </div>
                
                <div class="card bg-base-200 hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h4 class="card-title text-lg">🗃️ Repositories</h4>
                    <p class="text-sm mb-4">Information about stable and staging repositories.</p>
                    <ul class="text-sm space-y-1">
                      <li>• Stable Repositories</li>
                      <li>• Staging Repositories</li>
                      <li>• Repository Configuration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-semibold mb-4">System Requirements</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title text-lg">Minimum Requirements</h4>
                    <ul class="list-disc list-inside space-y-1">
                      <li>2GB RAM (4GB for Desktop)</li>
                      <li>20GB disk space (40GB recommended)</li>
                      <li>x86_64 or ARM64 processor</li>
                      <li>UEFI or BIOS boot support</li>
                      <li>Network connection for installation</li>
                    </ul>
                  </div>
                </div>
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title text-lg">Recommended</h4>
                    <ul class="list-disc list-inside space-y-1">
                      <li>8GB+ RAM (16GB for development)</li>
                      <li>100GB+ SSD storage</li>
                      <li>Modern multi-core processor</li>
                      <li>UEFI with Secure Boot support</li>
                      <li>Dedicated graphics card (optional)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 class="text-2xl font-semibold mb-4">Supported Hardware</h3>
              <div class="overflow-x-auto mb-6">
                <table class="table table-zebra">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Supported</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CPU</td>
                      <td>Intel Core i3+, AMD Ryzen 3+, ARM Cortex-A72+</td>
                      <td>64-bit required</td>
                    </tr>
                    <tr>
                      <td>GPU</td>
                      <td>Intel HD, AMD Radeon, NVIDIA GeForce</td>
                      <td>Open source drivers preferred</td>
                    </tr>
                    <tr>
                      <td>Network</td>
                      <td>Ethernet, Wi-Fi 802.11n+, Bluetooth 4.0+</td>
                      <td>Most chipsets supported</td>
                    </tr>
                    <tr>
                      <td>Storage</td>
                      <td>SATA, NVMe, eMMC, USB 3.0+</td>
                      <td>RAID 0/1/5/10 supported</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Installation -->
            <section id="installation" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Installation</h2>
              
              <h3 class="text-2xl font-semibold mb-4">Step 1: Download and Create Installation Media</h3>
              
              <div class="steps steps-vertical lg:steps-horizontal mb-6">
                <div class="step step-primary">Download ISO</div>
                <div class="step step-primary">Verify Checksum</div>
                <div class="step step-primary">Create Bootable USB</div>
                <div class="step">Boot from USB</div>
              </div>

              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>curl -O https://releases.zraxyl.org/latest/zraxyl-server-x64.iso</code></pre>
                <pre data-prefix="$"><code>sha256sum zraxyl-server-x64.iso</code></pre>
                <pre data-prefix="$"><code>dd if=zraxyl-server-x64.iso of=/dev/sdX bs=4M status=progress</code></pre>
              </div>

              <div class="alert alert-warning mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span>Replace /dev/sdX with your actual USB device path. This will erase all data on the USB drive!</span>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 2: Boot and Install</h3>
              <ol class="list-decimal list-inside space-y-2 mb-6">
                <li>Boot from the USB drive</li>
                <li>Select "Install Zraxyl OS" from the boot menu</li>
                <li>Follow the graphical installer prompts</li>
                <li>Configure disk partitioning</li>
                <li>Set up user account and password</li>
                <li>Wait for installation to complete</li>
                <li>Reboot and remove installation media</li>
              </ol>
            </section>

            <!-- Configuration -->
            <section id="configuration" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Initial Configuration</h2>
              
              <h3 class="text-2xl font-semibold mb-4">First Boot Setup</h3>
              <p class="mb-4">After your first boot, run the initial configuration wizard:</p>
              
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>sudo zraxyl-setup</code></pre>
              </div>

              <p class="mb-4">This will guide you through:</p>
              <ul class="list-disc list-inside space-y-1 mb-6">
                <li>Network configuration</li>
                <li>Package manager setup</li>
                <li>Security hardening options</li>
                <li>Desktop environment selection (if applicable)</li>
              </ul>
            </section>

            <!-- Base Installation -->
            <section id="base-installation" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Base Installation (CLI)</h2>
              
              <div class="alert alert-warning mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span>This is a CLI-based installation similar to Arch Linux. LiveOS changes are only applied temporarily in RAM.</span>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Default Credentials</h3>
              <div class="mockup-code mb-6">
                <pre><code>Username: root    | Password: toor</code></pre>
                <pre><code>Username: zraxyl  | Password: zraxyl</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 1: Update System</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>bottle -Syu</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 2: Partitioning</h3>
              <p class="mb-4">We'll use parted for partitioning. Example uses /dev/sdb (adjust for your drive):</p>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>parted /dev/sdb</code></pre>
                <pre data-prefix=">"><code>print                                    # Check existing partitions</code></pre>
                <pre data-prefix=">"><code>mklabel gpt                              # Set partition table to GPT</code></pre>
                <pre data-prefix=">"><code>mkpart primary fat32 1MB 1024MB         # Create ESP partition (1GB)</code></pre>
                <pre data-prefix=">"><code>set 1 esp on                            # Enable ESP flag</code></pre>
                <pre data-prefix=">"><code>mkpart primary ext4 1024MB 100%         # Create root partition</code></pre>
                <pre data-prefix=">"><code>quit                                     # Exit parted</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 3: Formatting</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>mkfs -t vfat /dev/sdb1                   # Format ESP partition</code></pre>
                <pre data-prefix="$"><code>mkfs -t ext4 /dev/sdb2                   # Format root partition</code></pre>
                <pre data-prefix="$"><code>e2label /dev/sdb2 zraxyl                 # Label root partition</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 4: Mounting</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>mount /dev/sdb2 /mnt                     # Mount root partition</code></pre>
                <pre data-prefix="$"><code>mkdir -vp /mnt/boot                      # Create boot directory</code></pre>
                <pre data-prefix="$"><code>mount /dev/sdb1 /mnt/boot                # Mount ESP partition</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 5: Base System Installation</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>cd /</code></pre>
                <pre data-prefix="$"><code>base-strap /mnt base-system              # Install base system</code></pre>
                <pre data-prefix="$"><code>base-chroot /mnt                         # Enter chroot environment</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 6: System Configuration</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>systemctl enable dhcpcd                  # Enable network on boot</code></pre>
                <pre data-prefix="$"><code>systemctl enable getty@tty1              # Enable login TTY</code></pre>
                <pre data-prefix="$"><code>systemctl enable getty@tty2              # Enable secondary TTY</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 7: Bootloader Setup</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>dbus-uuidgen > /etc/machine-id           # Create machine ID</code></pre>
                <pre data-prefix="$"><code>bootctl install                          # Install systemd-boot</code></pre>
                <pre data-prefix="$"><code>passwd root                              # Set root password</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 8: Boot Configuration</h3>
              <p class="mb-4">Install nano first, then configure the bootloader:</p>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>bottle -Sy nano</code></pre>
                <pre data-prefix="$"><code>nano /boot/loader/loader.conf</code></pre>
              </div>
              
              <p class="mb-2">Add this content to loader.conf:</p>
              <div class="mockup-code mb-6">
                <pre><code>default  zraxyl</code></pre>
                <pre><code>timeout  4</code></pre>
                <pre><code>console-mode max</code></pre>
                <pre><code>editor   no</code></pre>
              </div>

              <p class="mb-2">Create boot entry:</p>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>nano /boot/loader/entries/zraxyl.conf</code></pre>
              </div>
              
              <p class="mb-2">Add this content (check /boot for kernel version):</p>
              <div class="mockup-code mb-6">
                <pre><code>title Zraxyl</code></pre>
                <pre><code>linux /vmlinuz-zraxyl</code></pre>
                <pre><code>initrd /initramfs-VERSION.img</code></pre>
                <pre><code>options root=LABEL=zraxyl rw audit=0</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 9: User Creation</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>bottle -Sy sudo                         # Install sudo</code></pre>
                <pre data-prefix="$"><code>mkdir /home/user                        # Create home directory</code></pre>
                <pre data-prefix="$"><code>useradd user --home /home/user/          # Add user</code></pre>
                <pre data-prefix="$"><code>passwd user                              # Set user password</code></pre>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Step 10: Final Steps</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>exit                                     # Exit chroot</code></pre>
                <pre data-prefix="$"><code>sync                                     # Sync changes to disk</code></pre>
                <pre data-prefix="$"><code>umount -l /mnt/boot                      # Unmount boot partition</code></pre>
                <pre data-prefix="$"><code>umount -l /mnt                          # Unmount root partition</code></pre>
                <pre data-prefix="$"><code>reboot                                   # Reboot to installed system</code></pre>
              </div>
            </section>

            <!-- Desktop Environment Installation -->
            <section id="desktop-environments" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Desktop Environments</h2>
              
              <p class="mb-6">Zraxyl OS supports multiple desktop environments. After completing the base installation, you can install any desktop environment using metapackages.</p>
              
              <!-- KDE Plasma Installation -->
              <div class="card bg-base-200 shadow-lg mb-8">
                <div class="card-body">
                  <h3 class="text-2xl font-semibold mb-4" id="plasma-installation">🖥️ KDE Plasma Desktop</h3>
                  <div class="badge badge-primary mb-4">Full Experience Available</div>
                  
                  <p class="mb-4">Install the complete KDE Plasma desktop environment with all features:</p>
                  
                  <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code># Full plasma desktop environment with extras</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy base-desktop-plasma</code></pre>
                    <pre><code># OR install minimal plasma variant</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy base-desktop-plasma-clean</code></pre>
                  </div>
                  
                  <h4 class="text-lg font-semibold mb-3">Post-Installation Setup:</h4>
                  <div class="mockup-code mb-4">
                    <pre data-prefix="$"><code># Install sudo for user management</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy sudo</code></pre>
                    <pre><code># Add new user with necessary groups</code></pre>
                    <pre data-prefix="$"><code>useradd zraxyl -m -G wheel,adm</code></pre>
                    <pre><code># Set password for the new user</code></pre>
                    <pre data-prefix="$"><code>passwd zraxyl</code></pre>
                  </div>
                  
                  <div class="alert alert-info mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>You need to enable sudo for the wheel group by editing <code>/etc/sudoers</code></span>
                  </div>
                  
                  <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code># Edit sudoers file</code></pre>
                    <pre data-prefix="$"><code>nano /etc/sudoers</code></pre>
                    <pre><code># Find and uncomment: %wheel ALL=(ALL) ALL</code></pre>
                    <pre><code># Use Ctrl+W to search for "User privilege specification"</code></pre>
                    <pre><code># Navigate and remove "# " from the wheel line</code></pre>
                    <pre><code># Save with Ctrl+X, then Y, then Enter</code></pre>
                    <pre data-prefix="$"><code>reboot</code></pre>
                  </div>
                </div>
              </div>
              
              <!-- XFCE4 Installation -->
              <div class="card bg-base-200 shadow-lg mb-8">
                <div class="card-body">
                  <h3 class="text-2xl font-semibold mb-4" id="xfce-installation">🪟 XFCE4 Desktop</h3>
                  <div class="badge badge-secondary mb-4">Lightweight & Fast</div>
                  
                  <p class="mb-4">Install the XFCE4 desktop environment with custom theming and optimizations:</p>
                  
                  <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code># Install XFCE4 desktop with extras</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy base-desktop-xfce4 --disable-download-timeout</code></pre>
                    <pre><code># Install display manager</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy lightdm</code></pre>
                    <pre><code># Install Xorg drivers (required for input devices)</code></pre>
                    <pre data-prefix="$"><code>bottle -Sy drivers-xorg</code></pre>
                  </div>
                  
                  <h4 class="text-lg font-semibold mb-3">Enable Services:</h4>
                  <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code># Enable LightDM display manager</code></pre>
                    <pre data-prefix="$"><code>systemctl enable lightdm</code></pre>
                    <pre><code># Reboot to start the desktop environment</code></pre>
                    <pre data-prefix="$"><code>reboot</code></pre>
                  </div>
                </div>
              </div>
              
              <!-- Metapackages Information -->
              <div class="card bg-base-200 shadow-lg mb-8">
                <div class="card-body">
                  <h3 class="text-2xl font-semibold mb-4" id="metapackages">📦 Metapackages</h3>
                  
                  <p class="mb-6">Zraxyl uses metapackages to simplify installation of complete desktop environments and system components. These packages automatically install and configure all necessary components.</p>
                  
                  <h4 class="text-lg font-semibold mb-3">Available Desktop Metapackages:</h4>
                  <div class="overflow-x-auto mb-6">
                    <table class="table table-zebra">
                      <thead>
                        <tr>
                          <th>Package</th>
                          <th>Description</th>
                          <th>Variant</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>base-desktop-plasma</code></td>
                          <td>Complete KDE Plasma environment with extra packages</td>
                          <td>Full Experience</td>
                        </tr>
                        <tr>
                          <td><code>base-desktop-plasma-clean</code></td>
                          <td>Minimal KDE Plasma with only core packages</td>
                          <td>Minimal</td>
                        </tr>
                        <tr>
                          <td><code>base-desktop-xfce4</code></td>
                          <td>XFCE4 with custom theming and user-friendly extras</td>
                          <td>Full Experience</td>
                        </tr>
                        <tr>
                          <td><code>base-desktop-xfce4-clean</code></td>
                          <td>Core XFCE4 desktop with minimal packages</td>
                          <td>Minimal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h4 class="text-lg font-semibold mb-3">System Components:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card bg-base-300">
                      <div class="card-body">
                        <h5 class="card-title text-base">Xorg Drivers</h5>
                        <p class="text-sm mb-3">Complete Xorg driver collection:</p>
                        <div class="mockup-code text-xs">
                          <pre><code>drivers-xorg</code></pre>
                        </div>
                        <details class="collapse bg-base-100 mt-2">
                          <summary class="collapse-title text-xs font-medium">Included Drivers</summary>
                          <div class="collapse-content text-xs">
                            <p><strong>Graphics:</strong> Intel, NVIDIA (Nouveau), AMD, QEMU, VirtualBox</p>
                            <p><strong>Input:</strong> libinput, evdev, synaptics, wacom</p>
                            <p><strong>Other:</strong> fbdev, vesa, vmware</p>
                          </div>
                        </details>
                      </div>
                    </div>
                    
                    <div class="card bg-base-300">
                      <div class="card-body">
                        <h5 class="card-title text-base">Base Fonts</h5>
                        <p class="text-sm mb-3">Essential font collection:</p>
                        <div class="mockup-code text-xs">
                          <pre><code>base-fonts</code></pre>
                        </div>
                        <details class="collapse bg-base-100 mt-2">
                          <summary class="collapse-title text-xs font-medium">Included Fonts</summary>
                          <div class="collapse-content text-xs">
                            <p>DejaVu, Liberation, Droid, Hack, Noto, Cantarell, Bitstream Vera</p>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Repository Information -->
              <div class="card bg-base-200 shadow-lg">
                <div class="card-body">
                  <h3 class="text-2xl font-semibold mb-4" id="repositories">🗃️ Package Repositories</h3>
                  
                  <p class="mb-6">Zraxyl OS uses multiple specialized repositories to organize packages by category and stability level.</p>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Stable Repositories -->
                    <div class="card bg-base-300">
                      <div class="card-body">
                        <h4 class="card-title text-lg mb-4">🟢 Stable Repositories</h4>
                        <div class="badge badge-success mb-4">Default for all users</div>
                        
                        <p class="text-sm mb-4">These repositories are enabled by default and contain tested, stable packages.</p>
                        
                        <div class="grid grid-cols-2 gap-2 text-xs">
                          <div class="badge badge-outline">core</div>
                          <div class="badge badge-outline">extra</div>
                          <div class="badge badge-outline">kde</div>
                          <div class="badge badge-outline">xfce</div>
                          <div class="badge badge-outline">gnome</div>
                          <div class="badge badge-outline">games</div>
                          <div class="badge badge-outline">python</div>
                          <div class="badge badge-outline">perl</div>
                          <div class="badge badge-outline">server</div>
                          <div class="badge badge-outline">pentest</div>
                          <div class="badge badge-outline">proprietary</div>
                          <div class="badge badge-outline">cross_tools</div>
                        </div>
                        
                        <details class="collapse bg-base-200 mt-4">
                          <summary class="collapse-title text-sm font-medium">Repository Configuration</summary>
                          <div class="collapse-content">
                            <div class="mockup-code text-xs">
                              <pre><code>[core]</code></pre>
                              <pre><code>Server = http://files.zraxyl.eu/repo/stable/amd64/$repo/packages/</code></pre>
                              <pre><code>SigLevel = Optional TrustAll</code></pre>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                    
                    <!-- Staging Repositories -->
                    <div class="card bg-base-300">
                      <div class="card-body">
                        <h4 class="card-title text-lg mb-4">🟡 Staging Repositories</h4>
                        <div class="badge badge-warning mb-4">For developers & testers</div>
                        
                        <p class="text-sm mb-4">These repositories contain newer, potentially unstable packages for testing purposes.</p>
                        
                        <div class="alert alert-warning text-xs mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                          <span>Not recommended for typical users - packages may be broken or unstable</span>
                        </div>
                        
                        <p class="text-xs mb-4">Same repository structure as stable, but with development versions.</p>
                        
                        <details class="collapse bg-base-200 mt-4">
                          <summary class="collapse-title text-sm font-medium">Staging Configuration</summary>
                          <div class="collapse-content">
                            <div class="mockup-code text-xs">
                              <pre><code>[core]</code></pre>
                              <pre><code>Server = http://files.zraxyl.eu/repo/staging/amd64/$repo/packages/</code></pre>
                              <pre><code>SigLevel = Optional TrustAll</code></pre>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Security Features -->
            <section id="security" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Security Features</h2>
              
              <div class="alert alert-success mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Zraxyl OS is designed with security as a top priority, featuring multiple layers of protection.</span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title">System Hardening</h4>
                    <ul class="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Kernel:</strong> Hardened kernel with KASLR, SMEP, SMAP</li>
                      <li><strong>Memory:</strong> Stack canaries, DEP/NX bit, ASLR</li>
                      <li><strong>Filesystem:</strong> Mandatory Access Control (MAC)</li>
                      <li><strong>Network:</strong> Built-in firewall with sensible defaults</li>
                    </ul>
                  </div>
                </div>
                
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title">Encryption & Authentication</h4>
                    <ul class="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Disk:</strong> Full disk encryption with LUKS2</li>
                      <li><strong>Boot:</strong> Secure Boot with custom keys</li>
                      <li><strong>Auth:</strong> PAM with 2FA support</li>
                      <li><strong>Network:</strong> WireGuard VPN integration</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 class="text-2xl font-semibold mb-4">Security Tools</h3>
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>zraxyl-security-audit              # Run security audit</code></pre>
                <pre data-prefix="$"><code>zraxyl-firewall-config             # Configure firewall</code></pre>
                <pre data-prefix="$"><code>zraxyl-encrypt-home                # Encrypt home directory</code></pre>
                <pre data-prefix="$"><code>zraxyl-vuln-scan                   # Vulnerability scanner</code></pre>
              </div>
            </section>

            <!-- Package Management -->
            <section id="package-management" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Package Management</h2>
              
              <div class="alert alert-info mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 class="font-bold">Bottle Package Manager</h3>
                  <div class="text-sm">Zraxyl OS uses <code>bottle</code> - a rebranded Pacman with custom makepkg scripts. Every package is written and compiled by the Zraxyl team.</div>
                </div>
              </div>
              
              <div class="overflow-x-auto mb-6">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>bottle -Syu</code></td>
                      <td>Update system and upgrade packages</td>
                      <td><code>bottle -Syu</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -S &lt;package&gt;</code></td>
                      <td>Install a package</td>
                      <td><code>bottle -S firefox</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -R &lt;package&gt;</code></td>
                      <td>Remove a package</td>
                      <td><code>bottle -R firefox</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -Ss &lt;term&gt;</code></td>
                      <td>Search for packages</td>
                      <td><code>bottle -Ss "text editor"</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -Sy</code></td>
                      <td>Synchronize package database</td>
                      <td><code>bottle -Sy</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -Si &lt;package&gt;</code></td>
                      <td>Show package information</td>
                      <td><code>bottle -Si firefox</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -Q</code></td>
                      <td>List installed packages</td>
                      <td><code>bottle -Q | grep dev</code></td>
                    </tr>
                    <tr>
                      <td><code>bottle -Sc</code></td>
                      <td>Clean package cache</td>
                      <td><code>bottle -Sc</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 class="text-2xl font-semibold mb-4">Custom Package Development</h3>
              <div class="card bg-base-200 shadow-lg mb-6">
                <div class="card-body">
                  <h4 class="card-title">🛠️ Built from Scratch</h4>
                  <p class="mb-4">Every package in Zraxyl OS is:</p>
                  <ul class="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Written by Zraxyl team:</strong> Custom build scripts and configurations</li>
                    <li><strong>Compiled in-house:</strong> All packages built from source with optimizations</li>
                    <li><strong>Quality assured:</strong> Tested and validated before repository inclusion</li>
                    <li><strong>Pacman-compatible:</strong> Uses familiar Pacman syntax with <code>bottle</code> command</li>
                  </ul>
                  <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Unlike other distributions that repackage existing software, Zraxyl creates each package with custom makepkg scripts tailored for optimal performance.</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Troubleshooting -->
            <section id="troubleshooting" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Troubleshooting</h2>
              
              <div class="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="faq-accordion" checked="checked" /> 
                <div class="collapse-title text-xl font-medium">
                  System won't boot after installation
                </div>
                <div class="collapse-content"> 
                  <p>Check UEFI/BIOS settings and ensure Secure Boot is properly configured. Try booting in legacy mode if UEFI fails.</p>
                </div>
              </div>

              <div class="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="faq-accordion" /> 
                <div class="collapse-title text-xl font-medium">
                  Network connectivity issues
                </div>
                <div class="collapse-content"> 
                  <p>Check network interface status with <code>ip addr</code> and configure using <code>zraxyl-network-config</code>.</p>
                </div>
              </div>

              <div class="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="faq-accordion" /> 
                <div class="collapse-title text-xl font-medium">
                  Package installation fails
                </div>
                <div class="collapse-content"> 
                  <p>Run <code>zpkg update</code> first, then try installing again. Check available disk space and network connectivity.</p>
                </div>
              </div>
            </section>

            <!-- Development -->
            <section id="development" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Development Environment</h2>
              
              <p class="mb-4">Zraxyl OS comes with a comprehensive development environment. Install additional tools as needed:</p>
              
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>zpkg install zraxyl-dev-tools      # Essential development tools</code></pre>
                <pre data-prefix="$"><code>zpkg install docker kubernetes     # Container orchestration</code></pre>
                <pre data-prefix="$"><code>zpkg install nodejs python rust   # Programming languages</code></pre>
                <pre data-prefix="$"><code>zpkg install vscode sublime-text   # Code editors</code></pre>
              </div>
              
              <h3 class="text-2xl font-semibold mb-4">Development Environment Setup</h3>
              
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code>bottle -Sy base-devel                   # Install development tools</code></pre>
                <pre data-prefix="$"><code>bottle -Sy git cmake ninja              # Version control and build tools</code></pre>
                <pre data-prefix="$"><code>bottle -Sy gcc rust python              # Compilers and interpreters</code></pre>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title text-sm">🏗️ Custom Build System</h4>
                    <ul class="text-xs list-disc list-inside space-y-1">
                      <li>Custom makepkg scripts for each package</li>
                      <li>Zraxyl-specific optimizations and patches</li>
                      <li>Integrated quality assurance testing</li>
                      <li>Automated dependency resolution</li>
                    </ul>
                  </div>
                </div>
                <div class="card bg-base-200">
                  <div class="card-body">
                    <h4 class="card-title text-sm">📦 Package Development</h4>
                    <ul class="text-xs list-disc list-inside space-y-1">
                      <li>Source-based compilation for all packages</li>
                      <li>Custom configuration for Zraxyl compatibility</li>
                      <li>Performance tuning and security hardening</li>
                      <li>Comprehensive testing before release</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-semibold mb-4">Contributing to Zraxyl</h3>
              <p class="mb-4">We welcome contributions to package development and system improvements:</p>
              
              <div class="steps steps-vertical lg:steps-horizontal mb-6">
                <div class="step step-primary">Join Community</div>
                <div class="step step-primary">Learn Build System</div>
                <div class="step step-primary">Submit Package</div>
                <div class="step step-primary">Code Review</div>
                <div class="step">Integration</div>
              </div>
              
              <div class="mockup-code mb-6">
                <pre data-prefix="$"><code># Contact the team via Telegram for contribution guidelines</code></pre>
                <pre data-prefix="$"><code># All packages must follow Zraxyl build standards</code></pre>
                <pre data-prefix="$"><code># Custom makepkg scripts ensure consistency and quality</code></pre>
              </div>
              
              <div class="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Please read our <a href="https://github.com/zraxyl/zraxyl-os/contributing" class="link">Contributing Guidelines</a> and <a href="https://github.com/zraxyl/zraxyl-os/code-of-conduct" class="link">Code of Conduct</a> before submitting contributions.</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Documentation - Zraxyl OS',
  meta: [
    { name: 'description', content: 'Complete documentation for Zraxyl OS including installation, configuration, and usage guides.' }
  ]
})
</script>