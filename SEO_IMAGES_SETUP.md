# Favicon and Image Assets Setup

## Required Images for SEO

To complete the SEO setup, you need to create and add the following image files to your `/public` directory:

### Favicon Files
- `/public/favicon.ico` (32x32, ICO format)
- `/public/favicon-16x16.png` (16x16 PNG)
- `/public/favicon-32x32.png` (32x32 PNG)
- `/public/apple-touch-icon.png` (180x180 PNG)
- `/public/android-chrome-192x192.png` (192x192 PNG)
- `/public/android-chrome-512x512.png` (512x512 PNG)

### Open Graph Images
- `/public/og-image.jpg` (1200x630 JPG) - Main site image
- `/public/og-home.jpg` (1200x630 JPG) - Homepage specific
- `/public/og-projects.jpg` (1200x630 JPG) - Projects page specific

### Profile Image
- `/public/profile-image.jpg` (Professional headshot)

## How to Generate Favicons

1. **Using Online Tools:**
   - Visit https://realfavicongenerator.net/
   - Upload a high-quality square image (512x512 or larger)
   - Download the generated package
   - Extract files to your `/public` directory

2. **Manual Creation:**
   - Create a 512x512 square logo/image
   - Use image editing software to resize to required dimensions
   - Save as PNG (for transparency) or JPG

## Open Graph Image Guidelines

- **Size:** 1200x630 pixels (Facebook recommended)
- **Format:** JPG or PNG
- **File size:** Under 300KB for fast loading
- **Content:** Include your name, title, and key visual elements
- **Text:** Keep text large and readable (minimum 20px)
- **Safe area:** Keep important content within 1080x566 center area

## Profile Image Guidelines

- **Professional headshot:** Clear, well-lit photo
- **Size:** 400x400 pixels minimum
- **Format:** JPG or PNG
- **Background:** Clean, professional background

## Tools for Image Creation

1. **Canva:** Pre-made templates for social media images
2. **Figma:** Professional design tool with templates
3. **GIMP:** Free alternative to Photoshop
4. **Photoshop:** Professional image editing
5. **Online generators:** Various free favicon generators

## SEO Image Optimization

- Compress images using tools like TinyPNG
- Use WebP format when possible for better performance
- Add descriptive alt text to all images
- Use descriptive filenames (not just "image1.jpg")

## Verification Steps

After adding images, verify:
1. All favicon files load correctly
2. Open Graph images display properly when sharing links
3. Social media cards show correctly
4. Images are optimized for fast loading

## Update Required

Don't forget to update these values in the code:
- Google verification code in layout.tsx
- Social media URLs in structured-data.tsx
- Actual email address and contact information
- University/education information
- Location information
