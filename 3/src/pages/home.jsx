import React, { useEffect } from 'react';
import Particles from 'react-particles-js';

const ModernWebsite = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .stat-card, .testimonial-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-[#f1f1f1] overflow-x-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        params={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#e94560" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#0f3460",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 py-6 px-10 flex justify-between items-center bg-[rgba(10,10,20,0.85)] backdrop-blur-md shadow-lg border-b border-[rgba(255,255,255,0.1)] animate-fadeInDown">
        <div className="text-2xl font-bold text-[#e94560] flex items-center gap-3">
          <i className="fas fa-cube text-white text-xl"></i>
          NEXUS
        </div>
        
        <ul className="hidden md:flex gap-8">
          <li><a href="#" className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e94560] after:transition-all after:duration-400 hover:after:w-full hover:text-[#e94560]">Home</a></li>
          <li><a href="#" className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e94560] after:transition-all after:duration-400 hover:after:w-full hover:text-[#e94560]">Services</a></li>
          <li><a href="#" className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e94560] after:transition-all after:duration-400 hover:after:w-full hover:text-[#e94560]">Solutions</a></li>
          <li><a href="#" className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e94560] after:transition-all after:duration-400 hover:after:w-full hover:text-[#e94560]">Pricing</a></li>
          <li><a href="#" className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e94560] after:transition-all after:duration-400 hover:after:w-full hover:text-[#e94560]">About</a></li>
        </ul>
        
        <button className="bg-[#e94560] text-white py-3 px-7 rounded-full font-semibold shadow-lg shadow-[rgba(233,69,96,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(233,69,96,0.4)]">
          Contact Us
        </button>
        
        <div className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center relative overflow-hidden py-20 px-8">
        <div className="max-w-2xl text-center md:text-left z-10 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e94560]">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl">
            We deliver cutting-edge solutions that drive growth, innovation, and digital transformation for forward-thinking businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-8">
            <a href="#" className="bg-[#e94560] text-white py-4 px-8 rounded-full font-semibold shadow-lg shadow-[rgba(233,69,96,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(233,69,96,0.5)] flex items-center justify-center gap-3">
              Get Started <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#" className="border-2 border-[#e94560] text-white py-4 px-8 rounded-full font-semibold transition-all duration-400 hover:bg-[rgba(233,69,96,0.1)] hover:-translate-y-1 flex items-center justify-center gap-3">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 max-w-lg mt-16 md:mt-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 opacity-70 md:opacity-100 animate-float">
          <svg viewBox="0 0 800 600" className="w-full h-auto">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e94560" />
                <stop offset="100%" stopColor="#0f3460" />
              </linearGradient>
            </defs>
            <path d="M400,100 C600,100 700,300 600,500 C500,700 300,700 200,500 C100,300 200,100 400,100 Z" fill="url(#gradient)" opacity="0.7" />
            <path d="M400,150 C550,150 650,300 550,450 C450,600 300,600 250,450 C200,300 250,150 400,150 Z" fill="url(#gradient)" opacity="0.5" />
          </svg>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e94560] inline-block">
            Our Premium Services
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital solutions designed to elevate your business to new heights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8 pb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-[rgba(26,26,46,0.8)] backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[rgba(255,255,255,0.1)] transition-all duration-400 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgba(233,69,96,0.3)] hover:border-[rgba(233,69,96,0.3)] service-card opacity-0">
              <div className="w-20 h-20 bg-[rgba(233,69,96,0.1)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`${service.icon} text-[#e94560] text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="opacity-80 mb-6 leading-relaxed">{service.description}</p>
              <a href="#" className="border-2 border-[#e94560] text-white py-3 px-6 rounded-full font-semibold transition-all duration-400 hover:bg-[rgba(233,69,96,0.1)] inline-flex items-center gap-2">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-[rgba(15,52,96,0.3)] py-20 my-20 relative overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 z-10 stat-card">
              <h3 className="text-4xl md:text-5xl text-[#e94560] font-extrabold mb-2">{stat.value}</h3>
              <p className="text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e94560] inline-block">
            Client Testimonials
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Discover what our clients have to say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[rgba(26,26,46,0.8)] backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[rgba(255,255,255,0.1)] relative testimonial-card opacity-0">
              <div className="absolute top-5 left-6 text-6xl text-[#e94560] opacity-20 font-serif">"</div>
              <p className="mb-6 leading-relaxed italic relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#e94560] rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="opacity-70">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e94560] inline-block">
            Get In Touch
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </div>
        
        <div className="bg-[rgba(26,26,46,0.8)] backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)] grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-8 lg:mx-auto">
          <div className="p-10 bg-[rgba(15,52,96,0.3)]">
            <h3 className="text-3xl font-bold mb-8 text-[#e94560]">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(233,69,96,0.1)] rounded-full flex items-center justify-center text-[#e94560] text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Our Location</h4>
                  <p className="opacity-80">123 Innovation Drive, Tech Park, San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(233,69,96,0.1)] rounded-full flex items-center justify-center text-[#e94560] text-xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone Number</h4>
                  <p className="opacity-80">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(233,69,96,0.1)] rounded-full flex items-center justify-center text-[#e94560] text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Address</h4>
                  <p className="opacity-80">info@nexusdigital.com</p>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href="#" className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-xl transition-all duration-400 hover:bg-[#e94560] hover:-translate-y-1">
                  <i className={`fab ${link}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="p-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:outline-none focus:border-[#e94560] focus:bg-[rgba(233,69,96,0.05)]" 
                  placeholder="Enter your name" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:outline-none focus:border-[#e94560] focus:bg-[rgba(233,69,96,0.05)]" 
                  placeholder="Enter your email" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:outline-none focus:border-[#e94560] focus:bg-[rgba(233,69,96,0.05)]" 
                  placeholder="Enter subject" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full p-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:outline-none focus:border-[#e94560] focus:bg-[rgba(233,69,96,0.05)]" 
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button type="submit" className="bg-[#e94560] text-white py-4 px-8 rounded-full font-semibold shadow-lg shadow-[rgba(233,69,96,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(233,69,96,0.4)] flex items-center gap-3">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[rgba(10,10,20,0.9)] pt-20 pb-10 border-t border-[rgba(255,255,255,0.1)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div>
            <div className="text-2xl font-bold text-[#e94560] flex items-center gap-3 mb-6">
              <i className="fas fa-cube text-white text-xl"></i>
              NEXUS
            </div>
            <p className="opacity-80">
              Transforming businesses through innovative digital solutions since 2010. We help companies navigate the digital landscape with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-[#e94560] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e94560]">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e94560] transition-all duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-[#e94560] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e94560]">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e94560] transition-all duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-[#e94560] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e94560]">Newsletter</h4>
            <p className="opacity-80 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full p-3 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:outline-none focus:border-[#e94560]"
              />
              <button className="bg-[#e94560] text-white w-full py-3 rounded-full font-semibold shadow-lg shadow-[rgba(233,69,96,0.3)] transition-all duration-400 hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-16 opacity-60 text-sm">
          <p>&copy; 2023 Nexus Digital Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Data arrays
const services = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    description: "Custom, responsive websites built with the latest technologies to ensure optimal performance and user experience across all devices."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description: "Native and cross-platform mobile applications that engage users and deliver exceptional performance on iOS and Android devices."
  },
  {
    icon: "fas fa-chart-line",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase brand visibility, drive traffic, and convert visitors into loyal customers."
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that optimize operations, enhance security, and reduce IT costs."
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging experiences and drive customer satisfaction."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cyber Security",
    description: "Comprehensive security solutions that protect your digital assets and ensure compliance with industry regulations."
  }
];

const stats = [
  { value: "250+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Industry Awards" }
];

const testimonials = [
  {
    content: "Working with this team transformed our online presence. Their attention to detail and innovative approach resulted in a 40% increase in customer engagement within just three months.",
    initials: "MJ",
    name: "Michael Johnson",
    position: "CEO, TechVision Inc."
  },
  {
    content: "The mobile app they developed for us exceeded all expectations. User retention has doubled, and we're seeing record conversion rates. Truly exceptional work!",
    initials: "SR",
    name: "Sarah Reynolds",
    position: "Product Director, InnovateCo"
  },
  {
    content: "Their cybersecurity team identified vulnerabilities we didn't even know existed. Now we sleep better knowing our data is protected by industry-leading security measures.",
    initials: "DP",
    name: "David Peterson",
    position: "CTO, SecureSystems Ltd."
  }
];

const socialLinks = [
  "fa-facebook-f",
  "fa-twitter",
  "fa-instagram",
  "fa-linkedin-in",
  "fa-dribbble"
];

const footerLinks = {
  quickLinks: ["Home", "About Us", "Services", "Case Studies", "Blog"],
  services: ["Web Development", "App Development", "UI/UX Design", "Digital Marketing", "Cloud Solutions"]
};

export default ModernWebsite;