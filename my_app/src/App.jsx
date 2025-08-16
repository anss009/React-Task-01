import React, { useEffect } from "react";
import FeatureCard from "./components/card/FeatureCard";
import "./App.css";
import gitLogo from "./assets/logo.png";
import iphoneImg from "./assets/iphone.png";
import checkMark from "./assets/checkmark.svg";
import tagSvg from "./assets/svgs/tag.svg"
import gearSvg from "./assets/svgs/gears.svg"
import fileSvg from "./assets/svgs/file.svg"
import brushSvg from "./assets/svgs/brush.svg"
import circleSvg from "./assets/svgs/circle.svg"
import computerSvg from "./assets/svgs/computer.svg"

function App() {
  const features = [
    { iconUrl: tagSvg, title: "Showcase Your App", description: "Showcase your app in style with this professional looking template" },
    { iconUrl: gearSvg, title: "Easy to Customize", description: "Easily  customize the text and replace the images to suit your own app" },
    { iconUrl: brushSvg, title: "Unlimited Colors", description: "Easily change the colors in CSS that can go well with your branding" },
    { iconUrl: computerSvg ,title: "Responsive, HTML5, CSS3", description: "Our template is 100% responsive and built with modern standards" },
    { iconUrl: fileSvg, title: "Easy Customization", description: "Designed to engage your users and increase your conversion" },
    { iconUrl: circleSvg, title: "With no Boundaries", description: "Use Bootstrap and PaperKit to add additional components" }
  ];

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="left">
          <div><img className="gitpic" src={gitLogo} alt="Logo" /></div>
          <div className="logo">AWESOME APP</div>
        </div>
        <nav className="right">
          <ul>
            <li className="nav-item nav-li"><a href="#home">HOME</a></li>
            <li className="nav-item nav-li"><a href="#features">FEATURES</a></li>
            <li className="nav-item nav-li"><a href="#pricing">PRICING</a></li>
            <li className=" btns nav-item btn-right"><a className="black">DOWNLOAD NOW</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero reveal">
        <div className="hero-text">
          <h1>AWESOME APP <br /> APP LANDING TEMPLATE</h1>
          <p>An Awesome landing page to showcase your app feature screenshots,
            <br /> Pricing, user testimonials, and download links
          </p>
          <ul>
            <li><img src={checkMark} alt="" />Amazing Design to Present Your App</li>
            <li><img src={checkMark} alt="" />Fully Responsive and Powered by Bootstrap & ProperKit</li>
            <li><img src={checkMark} alt="" />Very Easy to Customize and Setup</li>
          </ul>
          <button className="btns primary-btn">Start Exploring</button>
        </div>
        <div className="hero-image">
          <img src={iphoneImg} alt="iPhone 16 Pro Max" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features reveal">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
