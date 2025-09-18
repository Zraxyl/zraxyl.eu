#!/usr/bin/env node

/**
 * Zraxyl OS Backup Extraction and Analysis Script
 * 
 * This script extracts and analyzes backup files from your old site
 * and helps migrate content to the new Nuxt.js structure.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMPORT_DIR = path.join(__dirname, '../import')
const EXTRACTED_DIR = path.join(IMPORT_DIR, 'extracted')

console.log('🗂️  Zraxyl OS Backup Extraction Script')
console.log('====================================')

// Function to find zip files in import directory
function findZipFiles() {
  if (!fs.existsSync(IMPORT_DIR)) {
    console.log('❌ Import directory not found:', IMPORT_DIR)
    return []
  }

  const files = fs.readdirSync(IMPORT_DIR)
  const zipFiles = files.filter(file => 
    file.toLowerCase().endsWith('.zip') || 
    file.toLowerCase().endsWith('.rar') ||
    file.toLowerCase().endsWith('.tar.gz')
  )
  
  return zipFiles.map(file => path.join(IMPORT_DIR, file))
}

// Function to extract zip file
function extractZipFile(zipPath) {
  console.log('📦 Extracting:', path.basename(zipPath))
  
  // Create extraction directory
  if (!fs.existsSync(EXTRACTED_DIR)) {
    fs.mkdirSync(EXTRACTED_DIR, { recursive: true })
  }

  try {
    // Try to extract using PowerShell (Windows)
    if (process.platform === 'win32') {
      execSync(`powershell -command "Expand-Archive -Path '${zipPath}' -DestinationPath '${EXTRACTED_DIR}' -Force"`)
    } else {
      // Linux/Mac
      execSync(`unzip -o "${zipPath}" -d "${EXTRACTED_DIR}"`)
    }
    console.log('✅ Extraction completed')
    return true
  } catch (error) {
    console.log('❌ Extraction failed:', error.message)
    console.log('💡 Please manually extract the zip file to:', EXTRACTED_DIR)
    return false
  }
}

// Function to analyze extracted content
function analyzeExtractedContent() {
  if (!fs.existsSync(EXTRACTED_DIR)) {
    console.log('❌ No extracted content found')
    return
  }

  console.log('\\n🔍 Analyzing extracted content...')
  console.log('================================')

  const analysis = {
    htmlFiles: [],
    markdownFiles: [],
    cssFiles: [],
    jsFiles: [],
    imageFiles: [],
    otherFiles: [],
    directories: []
  }

  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir)
    
    items.forEach(item => {
      const fullPath = path.join(dir, item)
      const relPath = path.join(relativePath, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        analysis.directories.push(relPath)
        scanDirectory(fullPath, relPath)
      } else {
        const ext = path.extname(item).toLowerCase()
        
        switch (ext) {
          case '.html':
          case '.htm':
            analysis.htmlFiles.push(relPath)
            break
          case '.md':
          case '.markdown':
            analysis.markdownFiles.push(relPath)
            break
          case '.css':
            analysis.cssFiles.push(relPath)
            break
          case '.js':
          case '.ts':
            analysis.jsFiles.push(relPath)
            break
          case '.png':
          case '.jpg':
          case '.jpeg':
          case '.gif':
          case '.svg':
          case '.webp':
            analysis.imageFiles.push(relPath)
            break
          default:
            analysis.otherFiles.push(relPath)
        }
      }
    })
  }

  scanDirectory(EXTRACTED_DIR)

  // Display analysis results
  console.log('📁 Directory Structure:')
  analysis.directories.forEach(dir => console.log(`   📂 ${dir}`))
  
  console.log('\\n📄 HTML Files:')
  analysis.htmlFiles.forEach(file => console.log(`   📄 ${file}`))
  
  console.log('\\n📝 Markdown Files:')
  analysis.markdownFiles.forEach(file => console.log(`   📝 ${file}`))
  
  console.log('\\n🖼️  Image Files:')
  analysis.imageFiles.forEach(file => console.log(`   🖼️  ${file}`))
  
  console.log('\\n🎨 CSS Files:')
  analysis.cssFiles.forEach(file => console.log(`   🎨 ${file}`))
  
  console.log('\\n⚡ JavaScript Files:')
  analysis.jsFiles.forEach(file => console.log(`   ⚡ ${file}`))
  
  console.log('\\n📦 Other Files:')
  analysis.otherFiles.forEach(file => console.log(`   📦 ${file}`))

  // Save analysis to JSON for later processing
  const analysisPath = path.join(IMPORT_DIR, 'content-analysis.json')
  fs.writeFileSync(analysisPath, JSON.stringify(analysis, null, 2))
  console.log('\\n💾 Analysis saved to:', analysisPath)

  return analysis
}

// Main execution
function main() {
  const zipFiles = findZipFiles()
  
  if (zipFiles.length === 0) {
    console.log('📝 No zip files found in import directory.')
    console.log('📍 Place your backup zip file here:', IMPORT_DIR)
    console.log('\\n🔄 Supported formats: .zip, .rar, .tar.gz')
    return
  }

  console.log(`📦 Found ${zipFiles.length} archive file(s):`)
  zipFiles.forEach(file => console.log(`   📦 ${path.basename(file)}`))

  // Extract the first zip file (you can modify this to handle multiple files)
  const extracted = extractZipFile(zipFiles[0])
  
  if (extracted) {
    analyzeExtractedContent()
    console.log('\\n🎉 Analysis complete!')
    console.log('💡 Check the content-analysis.json file for detailed structure')
    console.log('🚀 Ready for content migration!')
  }
}

// Run the script
try {
  main()
} catch (error) {
  console.error('❌ Script error:', error.message)
  process.exit(1)
}