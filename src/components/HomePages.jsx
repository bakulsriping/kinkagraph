import { useEffect } from 'react';
import './HomePages.css';

const HomePage = () => {
  useEffect(() => {
    document.title = "Kinka Graph - Create Stunning Presentation Graphs";
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <div className="logo-icon">KG</div>
              <div className="logo-text">Kinka Graph</div>
            </div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Templates</a>
              <a href="#">Pricing</a>
              <a href="#">Docs</a>
            </div>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Create Stunning Presentation Graphs</h1>
          <p>Kinka Graph helps you transform your data into beautiful, interactive graphs perfect for your next presentation. Built with ReactJS for seamless performance.</p>
          <button className="cta-button" style={{padding: '15px 30px', fontSize: '18px'}}>Try It Now</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Powerful Features</h2>
            <p>Everything you need to create professional graphs</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-logo">
            <div className="logo-icon">KG</div>
            <div className="logo-text">Kinka Graph</div>
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Kinka Graph. All rights reserved. Built with ReactJS and Vite.</p>
        </div>
      </footer>
    </>
  );
};

const features = [
  {
    icon: '📊',
    title: 'Multiple Graph Types',
    description: 'Choose from bar, line, pie, scatter plots and more. Customize every aspect to match your brand.'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with Vite and ReactJS for incredible performance and smooth animations.'
  },
  {
    icon: '🔄',
    title: 'Real-time Updates',
    description: 'See changes instantly as you edit. Connect to live data sources for dynamic presentations.'
  },
  {
    icon: '🎨',
    title: 'Custom Themes',
    description: 'Create and save your own color themes to maintain brand consistency across all graphs.'
  },
  {
    icon: '📤',
    title: 'Easy Export',
    description: 'Export as PNG, SVG, or PDF. Embed directly in PowerPoint or Google Slides.'
  },
  {
    icon: '👥',
    title: 'Collaboration',
    description: 'Work with your team in real-time. Share and comment on graphs seamlessly.'
  }
];

export default HomePage;