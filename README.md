# Smitha Reddy - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features
- 5 Beautiful color themes
- Smooth scrolling navigation
- Interactive spotlight effect
- Fully responsive design
- Optimized for performance

## Local Development

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start development server:
   \`\`\`bash
   npm start
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates an optimized production build in the `build/` folder.

## Deployment

### Netlify (Easiest)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy! (Automatic)

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   \`\`\`json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   \`\`\`
3. Run: `npm run deploy`

## Customization

### Update Personal Information
Edit the content in `src/App.jsx`:
- Experience data
- Projects
- Publications
- Social links
- About section text

### Add Your Resume
Place your `resume.pdf` in the `public/` folder

### Change Default Theme
In `src/App.jsx`, change the initial state:
\`\`\`javascript
const [theme, setTheme] = useState('emerald'); // or 'rose', 'violet', 'amber'
\`\`\`

## Contact
- Email: smithasreddy13@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---
Built with ❤️ using React & Tailwind CSS