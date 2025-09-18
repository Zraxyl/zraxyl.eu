#!/usr/bin/env node

/**
 * Zraxyl OS Content Import Script
 * 
 * This script helps you import content from your old site.
 * 
 * Usage:
 * 1. Place your content files in the 'import' directory
 * 2. Run: node scripts/importContent.js
 * 3. Content will be processed and integrated into your new site
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMPORT_DIR = path.join(__dirname, '../import')
const PAGES_DIR = path.join(__dirname, '../pages')

console.log('🚀 Zraxyl OS Content Import Script')
console.log('===================================')

// Create import directory if it doesn't exist
if (!fs.existsSync(IMPORT_DIR)) {
  fs.mkdirSync(IMPORT_DIR, { recursive: true })
  console.log('📁 Created import directory:', IMPORT_DIR)
  console.log('📝 Place your content files here and run the script again.')
  process.exit(0)
}

// Function to process markdown or text files
function processContentFile(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const baseName = path.basename(fileName, path.extname(fileName))
  
  // Generate Vue page template
  const vueTemplate = `<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">${baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            Imported from docs.zraxyl.eu
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          ${content.replace(/\n/g, '\\n').replace(/"/g, '\\"')}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '${baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zraxyl OS',
  meta: [
    { name: 'description', content: 'Imported content from docs.zraxyl.eu' }
  ]
})
</script>`

  const outputPath = path.join(PAGES_DIR, `${baseName}.vue`)
  fs.writeFileSync(outputPath, vueTemplate)
  console.log('✅ Created page:', outputPath)
}

// Process all files in import directory
function processImportDirectory() {
  const files = fs.readdirSync(IMPORT_DIR)
  
  if (files.length === 0) {
    console.log('📝 No files found in import directory.')
    console.log('   Place your content files (.md, .txt, .html) in:', IMPORT_DIR)
    return
  }

  console.log(`📄 Found ${files.length} files to process...`)
  
  files.forEach(file => {
    const filePath = path.join(IMPORT_DIR, file)
    const ext = path.extname(file).toLowerCase()
    
    if (['.md', '.txt', '.html'].includes(ext)) {
      processContentFile(filePath, file)
    } else {
      console.log('⏭️  Skipped:', file, '(unsupported format)')
    }
  })
}

// Main execution
try {
  processImportDirectory()
  console.log('\\n🎉 Content import completed!')
  console.log('💡 Remember to update navigation links in layouts/default.vue')
} catch (error) {
  console.error('❌ Error during import:', error.message)
  process.exit(1)
}