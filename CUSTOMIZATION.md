# Customization Guide

This guide will help you customize the portfolio template for your own use.

## Personal Information Updates

### 1. Hero Section
**File:** `src/components/Hero.tsx`

- Update the name in the `<span className={styles.highlight}>` tag
- Change the subtitle from "Software Developer" to your title
- Modify the description paragraph
- Update the profile photo (replace the placeholder)

### 2. About Section  
**File:** `src/components/About.tsx`

- Rewrite the personal description paragraphs
- Update the three highlight boxes (Problem Solver, Team Player, Lifelong Learner)
- Add your own personality traits and strengths

### 3. Skills Section
**File:** `src/components/Skills.tsx`

Update the `skillsData` array:
- Add/remove technologies
- Adjust skill levels (1-5 scale)
- Modify categories (frontend, backend, database, tools)

### 4. Experience Section
**File:** `src/components/Experience.tsx`

Update the `experienceData` array:
- Replace with your actual work experience
- Update job titles, companies, and dates
- Modify descriptions and technologies used

### 5. Projects Section
**File:** `src/components/Projects.tsx`

Update the `projectsData` array:
- Add your real projects
- Update GitHub URLs and live demo links
- Add project screenshots (replace imageUrl placeholders)
- Write compelling project descriptions

### 6. Contact Section
**File:** `src/components/Contact.tsx`

- Update email address
- Replace LinkedIn and GitHub URLs
- Modify contact form (integrate with a backend service for functionality)

## Styling Customization

### Color Scheme
**File:** `src/index.css`

Update CSS variables:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
  --background-light: #your-background;
}
```

### Fonts
**File:** `public/index.html`

Replace the Google Fonts link with your preferred font:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `src/index.css`.

### Layout
Modify component CSS modules in `src/components/` to adjust:
- Section spacing
- Grid layouts  
- Responsive breakpoints
- Animations and transitions

## Deployment Configuration

### GitHub Repository
1. Create a new repository named `portfolio` or `your-name.github.io`
2. Update `package.json` homepage URL:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

### Custom Domain (Optional)
1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure DNS settings with your domain provider

## Content Guidelines

### Project Descriptions
- Focus on your role and contributions
- Highlight technical challenges and solutions
- Include measurable results when possible
- Use action verbs and technical terminology

### Skills Assessment
- Be honest about skill levels
- Level 5: Expert/Advanced
- Level 4: Proficient
- Level 3: Intermediate
- Level 2: Basic
- Level 1: Beginner

### Professional Tone
- Use professional language throughout
- Keep descriptions concise but informative
- Focus on achievements and impact
- Proofread for spelling and grammar

## Assets Needed

### Images
- Professional headshot (300x300px, circular crop recommended)
- Project screenshots (at least 400x300px)
- Company logos (optional)

### Links
- GitHub profile URL
- LinkedIn profile URL
- Live project demonstrations
- Resume/CV download link (optional)

## Performance Tips

- Optimize images before adding them
- Keep CSS animations smooth and purposeful
- Test on multiple devices and screen sizes
- Ensure accessibility with proper alt tags and semantic HTML
- Use lazy loading for images if adding many projects

## Testing Checklist

- [ ] All links work correctly
- [ ] Contact form submits properly (if backend integrated)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] All content is accurate and up-to-date
- [ ] Loading performance is acceptable
- [ ] Cross-browser compatibility tested
- [ ] Accessibility standards met