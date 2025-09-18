// Zraxyl OS Content Migration Utility
// Use this file to organize and structure content from your old site

export const oldSiteContent = {
  // Main navigation structure from docs.zraxyl.eu
  navigation: [
    // Add your navigation items here
    // Example:
    // { title: 'Getting Started', slug: 'getting-started', order: 1 },
    // { title: 'Installation', slug: 'installation', order: 2 },
  ],

  // Page content from your old site
  pages: {
    // Add your pages here following this structure:
    // 'page-slug': {
    //   title: 'Page Title',
    //   content: 'Your page content here...',
    //   meta: {
    //     description: 'Page description for SEO',
    //     keywords: 'relevant, keywords'
    //   }
    // }
  },

  // Documentation sections
  docs: {
    // Add your documentation structure here
    // 'section-name': [
    //   {
    //     title: 'Article Title',
    //     content: 'Article content...',
    //     subsections: []
    //   }
    // ]
  },

  // Assets and resources
  assets: {
    // List your images, downloads, etc.
    // images: [],
    // downloads: [],
    // videos: []
  }
}

// Helper function to convert old content to new format
export function migrateContent(oldContent) {
  // Add transformation logic here
  return {
    title: oldContent.title,
    content: oldContent.content,
    // Add other transformations
  }
}

export default oldSiteContent