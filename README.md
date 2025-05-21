# Frontend Assignment: Landing site Optimization

## Task

You're given a simple landing website. Written in Next.js, using TypeScript.

The website has:

- landing page
- demo page
- blog
- gallery
- pricing

Your task is to **optimize performance and fix any issues you find** while preserving the functionality. You are free to identify any bugs through out the project and apply any optimizations you see fit

---

## Submission

Please submit a GitHub repo or ZIP file with:

- Your updated working code (npm install; npm run build; npm start)
- An accompanying PDF file or readme explaining all the changes you did in Where/What/Why format

**[Bonus]** Deploy the site to a free platform (e.g., Netlify, Vercel, Render) and share the live link.

## Example of Changes Documentation

### Where/What/Why Format Example:

1. **Where**: `src/pages/blog/[slug].tsx`
2. **What**: Added dynamic imports for blog content
3. **Why**: To reduce initial bundle size and improve First Contentful Paint (FCP)
4. **Reference**: Documentation URL (optional)

---


## Changes Made

### Landing Page
- Fixed video filename in `Hero` component
- Enhanced link performance with prefetch in hero component
- Optimized image loading:
  - Replaced `<img>` with Next.js `<Image/>` component in Gallery section
  - Implemented placeholder blur for better loading experience
- Moved features data from `app/pages` directly into Features component for better organization

### Gallery Page
- Improved image optimization:
  - Replaced `<img>` with `<Image/>` component
  - Added proper alt text for accessibility
  - Set priority loading for first 6 images

### Demo Page
- Enhanced image and link performance:
  - Replaced `<img>` with `<Image/>` for generated images
  - Upgraded `<a>` tags to Next.js `<Link>` for prefetching
- Fixed layout shift by adding min-height to textarea
- Optimized PromptInput component:
  - Removed unnecessary state management (useState, useEffect, useCallback)
  - Eliminated redundant isMountedState
  - Reduced memory usage and prevented unnecessary rerenders

### Blog Page
- Improved image handling:
  - Replaced `<img>` with `<Image/>` component
  - Updated local image imports to support blur placeholder
- Implemented generateStaticParams for blog routes:
  - Enables static generation during build
  - Improves performance with pre-rendered pages
- Fixed NewsLetter component text color to black

### Pricing Page
- Fixed React key prop in mapped components
- Improved card container scrolling:
  - Changed overflow-hidden to overflow-auto
- Enhanced navigation performance:
  - Replaced anchor tags with Next.js Link components
  - Enabled prefetching
  - Prevented full page reloads
