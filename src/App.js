import React from "react";

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>Company Profile</h1>
      </header>

      {/* Navigation */}
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* About Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>We provide top-quality business solutions to help you grow.</p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Marketing Solutions</li>
          <li>Business Consultation</li>
        </ul>
      </section>

      {/* Booking Section */}
      <section id="booking">
        <h2>Book a Consultation</h2>
        <button>Book Now</button>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@ourcompany.com</p>
        <p>Phone: +123 456 7890</p>

        {/* WhatsApp Chat Button */}
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
