import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="banner">
          {/* Banner content (e.g., image and slogan) */}
          <h1>Welcome to Star Bakery Analytics</h1>
          <p>Delicious treats made with love</p>
          <p>Analyze the profitability of each bakery product.</p>
          <p>
            Compare the performance of different branches or delivery zones.
          </p>
        </section>

        <section className="featured-products">
          {/* Featured products component */}
          {/* You can map through featured products and display them here */}
        </section>

        <section className="about-us">
          {/* About Us section */}
          {/* Include your bakery's story and information */}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">{/* Your bakery's logo */}</div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          {/* Social media links */}
          {/* Include icons and links to your social media profiles */}
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
