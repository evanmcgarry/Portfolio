# Evan McGarry - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing my skills and experience as a software developer.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **TypeScript**: Fully typed for better development experience
- **Modular CSS**: Component-based styling with CSS modules
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Interactive Components**: Dynamic navigation, skill bars, and contact form
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3, CSS Modules
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evanmcgarry/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment
- Push to the `main` branch triggers automatic deployment
- GitHub Actions builds and deploys the site
- Live site available at: `https://evanmcgarry.github.io/portfolio`

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Replace profile photo placeholder

2. **About Section** (`src/components/About.tsx`):
   - Modify personal description
   - Update highlight points

3. **Skills** (`src/components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels (1-5 scale)

4. **Experience** (`src/components/Experience.tsx`):
   - Update job history
   - Modify dates, companies, and descriptions

5. **Projects** (`src/components/Projects.tsx`):
   - Add your projects
   - Update GitHub and live demo URLs
   - Add project images

6. **Contact** (`src/components/Contact.tsx`):
   - Update email and social links
   - Modify contact form (integrate with backend if needed)

### Styling

- Global styles: `src/index.css` and `src/App.css`
- Component styles: `src/components/[ComponentName].module.css`
- CSS variables: Defined in `src/index.css` for easy theming

### Colors & Theme

Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  /* ... other variables */
}
```

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx/module.css
│   │   ├── Hero.tsx/module.css
│   │   ├── About.tsx/module.css
│   │   ├── Skills.tsx/module.css
│   │   ├── Experience.tsx/module.css
│   │   ├── Projects.tsx/module.css
│   │   └── Contact.tsx/module.css
│   ├── App.tsx/css
│   ├── index.tsx/css
│   └── types.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Evan McGarry**
- Email: evan.mcgarry@email.com
- LinkedIn: [linkedin.com/in/evanmcgarry](https://linkedin.com/in/evanmcgarry)
- GitHub: [github.com/evanmcgarry](https://github.com/evanmcgarry)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons and fonts from Google Fonts
- React and TypeScript communities for excellent documentation

---

⭐ Star this repo if you found it helpful!