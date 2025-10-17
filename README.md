# 🎨 Profile Card - HNG13 Stage 0

A testable, accessible, and responsive profile card component built with semantic HTML, CSS, and vanilla JavaScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements Met](#requirements-met)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

## 🎯 Overview

This project is part of the **HNG** program, implementing Stage 0: Building a Testable Profile Card. It demonstrates modern frontend development practices including semantic HTML, accessibility standards, responsive design, and test-ready architecture.

## ✨ Features

- ✅ **Semantic HTML5** - Proper use of `<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`
- ♿ **Fully Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 📱 **Responsive Design** - Mobile-first approach that works on all devices
- 🧪 **Test-Ready** - All elements include `data-testid` attributes for automated testing
- ⚡ **Real-time Updates** - Current time displayed in milliseconds, updates every second
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔒 **Secure Links** - Social links use `rel="noopener noreferrer"` for security

## 🎓 Requirements Met

### Core Content
- [x] Profile card root container: `data-testid="test-profile-card"`
- [x] Name (plain text): `data-testid="test-user-name"`
- [x] Short biography (paragraph): `data-testid="test-user-bio"`
- [x] Current time (milliseconds): `data-testid="test-user-time"`
- [x] Avatar image: `data-testid="test-user-avatar"`
- [x] Social links list: `data-testid="test-user-social-links"`
  - Individual links: `data-testid="test-user-social-<network>"`
- [x] Hobbies (list): `data-testid="test-user-hobbies"`
- [x] Dislikes (list): `data-testid="test-user-dislikes"`

### Technical Requirements
- [x] Semantic HTML tags used throughout
- [x] Responsive layout (mobile/tablet/desktop)
- [x] All interactive elements keyboard-focusable
- [x] Links open in new tab with security attributes
- [x] No external dependencies
- [x] Modern CSS (Flexbox layout)

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/oghenetega16/profile_card.git
   cd profile-card
   ```

2. **Open in browser**
   
   **Option A: Direct File Access**
   ```bash
   # Simply open the HTML file
   open index.html
   # Or on Windows
   start index.html
   # Or on Linux
   xdg-open index.html
   ```

   **Option B: Using Direct Link (recommended)**
  # Navigate to: (https://hng13-profilecard.netlify.app/)

## 💻 Usage

### Basic Setup

The profile card is contained in a folder with `index.html`, `styles.css`, `script.js` files and an `image` folder for simplicity. All you need to do is open the file in a browser!

### File Structure

profile-card/
│

├── image
    └── passport photo.jpg  
├── index.html          # Main HTML file
├── script.js           # Main JS file
├── styles.css          # Main CSS file

### Data-TestID Reference

| Element | data-testid | Type |
|---------|-------------|------|
| Profile Card | `test-profile-card` | Container |
| Name | `test-user-name` | Text |
| Bio | `test-user-bio` | Paragraph |
| Time | `test-user-time` | Text |
| Avatar | `test-user-avatar` | Image |
| Social Links | `test-user-social-links` | List |
| Twitter Link | `test-user-social-twitter` | Link |
| GitHub Link | `test-user-social-github` | Link |
| LinkedIn Link | `test-user-social-linkedin` | Link |
| Hobbies | `test-user-hobbies` | List |
| Dislikes | `test-user-dislikes` | List |

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 640px (stacked layout)
- Desktop: ≥ 640px (horizontal layout)

## 🔧 Technologies Used

- HTML5 - Semantic markup
- CSS3 - Flexbox, custom properties, animations
- JavaScript (ES6+) - Time updates with `Date.now()`

## 📝 Design Decisions

1. Single File Structure: All code in one file for simplicity and easy deployment
2. No Dependencies: Pure HTML/CSS/JS for maximum portability
3. Flexbox Layout: Modern, flexible layout system
4. Inline Styles for GitHub Link: Ensures the button works without modifying main CSS
5. Mobile-First: Design starts mobile and scales up

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Oghenetega Sukuru
- GitHub: [@oghenetega16](https://github.com/oghenetega16)
- Twitter: [@oghenet_e_g_a](https://x.com/oghenet_e_g_a)

## 🙏 Acknowledgments

- HNG program for the project requirements
- Fontawesome for the fonts
- The web development community for best practices

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/oghenetega16/profile_card/issues) page
2. Open a new issue with a detailed description
3. Contact me directly through GitHub

---
