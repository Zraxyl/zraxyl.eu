# 🚀 Zraxyl OS Content Migration & Logo Integration Guide

## 📋 Overview
This guide helps you import content from your old site (docs.zraxyl.eu) and integrate your custom logo.

## 🎨 Adding Your Logo

### Step 1: Add Logo Files
1. Copy your logo files to the `public` directory:
   ```
   public/
   ├── logo.png          # Main logo (recommended: 64x64px or larger)
   ├── logo-light.png    # Light theme version (optional)
   ├── logo-dark.png     # Dark theme version (optional)
   ├── favicon.ico       # Browser favicon
   └── logo-large.png    # Large version for hero sections
   ```

### Step 2: Logo Formats & Sizes
- **Recommended formats**: PNG, SVG, WebP
- **Sizes needed**:
  - Navigation logo: 32x32px - 64x64px
  - Favicon: 16x16px, 32x32px, 48x48px
  - Hero section: 128x128px or larger
  - Social media: 1200x630px (Open Graph)

### Step 3: Update Logo Component
The logo component (`components/ZraxylLogo.vue`) automatically detects if your logo exists:
- If `public/logo.png` exists → shows your logo
- If not found → shows fallback design with "Z" icon

## 📄 Importing Content from docs.zraxyl.eu

### Method 1: Manual Copy-Paste (Recommended)
1. Visit your old site: https://docs.zraxyl.eu
2. Copy content from each page
3. Paste into the migration utility file: `utils/contentMigration.js`
4. Update the relevant Vue pages

### Method 2: Bulk Import Script
1. Save your old site content as files in the `import/` directory:
   ```
   import/
   ├── getting-started.md
   ├── installation.md
   ├── configuration.md
   └── troubleshooting.md
   ```

2. Run the import script:
   ```bash
   node scripts/importContent.js
   ```

3. This will automatically create Vue pages from your content files.

### Method 3: API/Scraping (Advanced)
If your old site has an API or is scrapable, we can create a custom scraper.

## 🗂️ Content Structure

### Current Pages to Update:
- **Homepage** (`pages/index.vue`) - Landing page content
- **Documentation** (`pages/docs.vue`) - Technical documentation
- **Download** (`pages/download.vue`) - Download links and versions
- **Community** (`pages/community.vue`) - Community information
- **Developers** (`pages/developers.vue`) - Developer information
- **Social** (`pages/social.vue`) - Social media links

### Adding New Pages:
Create new `.vue` files in the `pages/` directory. They'll automatically be added to routing.

## 🛠️ Next Steps

### 1. Logo Integration
```bash
# Copy your logo to public directory
cp /path/to/your/logo.png public/logo.png

# Optional: Copy different versions
cp /path/to/your/favicon.ico public/favicon.ico
```

### 2. Content Migration Priority
1. **Critical Pages**: Documentation, Download, Getting Started
2. **Secondary Pages**: Community, FAQ, Troubleshooting
3. **Additional Content**: Blog posts, tutorials, changelogs

### 3. SEO & Meta Data
Update meta tags in each page:
```vue
<script setup>
useHead({
  title: 'Your Page Title - Zraxyl OS',
  meta: [
    { name: 'description', content: 'Your page description' },
    { name: 'keywords', content: 'zraxyl, linux, os, keywords' },
    { property: 'og:image', content: '/logo-large.png' }
  ]
})
</script>
```

## 📞 Need Help?

**Option A**: Share your content with me
- Copy key sections from docs.zraxyl.eu
- I'll help integrate them into the new site

**Option B**: Provide site structure
- List of pages and their purposes
- I'll create the structure and you can fill in content

**Option C**: Logo assistance
- Share your logo files
- I'll help optimize them for web use

## 🎯 Example Content Format

When sharing content, use this format:

```
PAGE: Getting Started
URL: https://docs.zraxyl.eu/getting-started
CONTENT:
[Paste your content here]

PAGE: Installation
URL: https://docs.zraxyl.eu/installation  
CONTENT:
[Paste your content here]
```

Ready to start? Let me know which approach you'd prefer!