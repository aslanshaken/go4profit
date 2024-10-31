import React, { useEffect } from 'react';
import './Home.css';
import logo from '../../assets/logo.svg';
import whiteLogo from '../../assets/white-logo.svg'
import heroImage from '../../assets/hero-section/hero-section.svg';
import aboutImage from '../../assets/about/about-section.svg';
import howtoImage from '../../assets/howto/howto-section.svg';

// Trust logos
import billLogo from '../../assets/logos/bill.png';
import shopifyLogo from '../../assets/logos/shopify.png';
import gustoLogo from '../../assets/logos/gusto.png';
import plaidLogo from '../../assets/logos/plaid.png';
import squareLogo from '../../assets/logos/square.png';
import stripeLogo from '../../assets/logos/stripe.png';
import quickbooksLogo from '../../assets/logos/quickbooks.png';
// import spotifyLogo from '../../assets/logos/spotify.png';
// import family from '../../assets/about/family.jpg'

// Service icons
import serviceAnalysis from '../../assets/services/service-analysis.svg';
import serviceBook from '../../assets/services/service-book.svg';
import serviceCfo from '../../assets/services/service-cfo.svg';
import serviceAdvice from '../../assets/services/service-advice.svg';
import serviceTaxes from '../../assets/services/service-taxes.svg';
import serviceAssist from '../../assets/services/service-assist.svg';

// Testimonials
import Seka from '../../assets/logos/feedback-seka.png';
import Ferla from '../../assets/logos/feedback-ferla.png';
import Whizz from '../../assets/logos/feedback-whizz.png';

function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToPreCall = () => {
    const element = document.getElementById('pre-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // const scrollToPricing = () => {
  //   const element = document.getElementById('pricing');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  const testimonials = [
    {
      id: 1,
      imageUrl: Seka,
      name: 'Serik Baimoldayev',
      role: 'CEO, Example Co.',
      text: 'Working with Go4Profit for the last 3 years has been a game-changer. They helped us automate our finances and totally rethink how we manage them. Now we know exactly where to focus to keep growing the business.',
    },
    {
      id: 2,
      imageUrl: Whizz,
      name: 'Alex Mironov',
      role: 'Marketing Director, Sample Inc.',
      text: 'Their monthly financial reviews helped us spot areas where we were losing money. Thanks to their clear explanations, we’ve optimized our expenses and improved our bottom line. Highly recommended!',
    },
    {
      id: 3,
      imageUrl: Ferla,
      name: 'Feras Bashnak',
      role: 'Developer, Tech Solutions',
      text: 'I was really impressed with how easy they made bookkeeping for us. Their team was always there to help with everything—from sorting daily payments to getting ready for tax season. They’re truly care about helping us succeed.',
    },
  ];



  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul>
          <li>
            <div className="button">
              <a href="#pre-call" onClick={scrollToPreCall}>Free Consultation</a>
            </div>
          </li>
        </ul>
      </nav>

      <main>

        {/* Headline */}
        <section id="hero" className="flex_center">
          <header>
            <div className="text">
              <h3>Bookkeeping for Small & Medium Businesses</h3>
              <h1>
                <span>Grow Your Business -</span>
                <br />
                We’ll Handle the Bookkeeping
              </h1>
              <p>As a family-owned business, we offer a <span>personalized approach</span>,
                providing you with a dedicated bookkeeper expert who focuses solely
                on your company.
                <br />
                <br />
                When you work with us, you'll not only receive accurate financial
                reports but also <span>clear explanations</span> and <span>analysis</span> of these metrics
                on a monthly basis. This way, you'll understand where you're
                losing money and what to focus on.</p>
            </div>
            <div className="button">
              <a href="#pre-call" onClick={scrollToPreCall}>Schedule My Free Consultation</a>
            </div>
          </header>
          <div className="image">
            <div className="image-container">
              <img src={heroImage} alt="Hero" />
            </div>
          </div>
        </section>

        {/* Trust  */}
        <section id="trust">
          <h2 style={{ marginBottom: '1.5rem', fontWeight: 'bolder' }}>We work with the top software solutions in the industry</h2>
          <div className="carousel-container">
            <div className="carousel">
              {[billLogo, shopifyLogo, gustoLogo, plaidLogo, squareLogo, stripeLogo, quickbooksLogo].map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <div className="text">
            <h3>Services</h3>
            <h1>We provide a full cycle of bookkeeping services</h1>
          </div>
          <div className="grid-layout">
            {[
              { src: serviceAnalysis, title: 'We record and categorize daily payments and expenses' },
              { src: serviceTaxes, title: 'We send customer invoices and record payments received' },
              { src: serviceBook, title: 'We conduct bank reconciliations every month' },
              { src: serviceCfo, title: 'Each month, we review your financials with you, explaining everything in simple words' },
              { src: serviceAdvice, title: 'We provide year-end reports to get you ready for tax season' },
              { src: serviceAssist, title: 'Didn’t do your books before? No problem — we’ll help you get up to date with catch-up' },
            ].map((service, index) => (
              <div key={index} className="service">
                <img src={service.src} alt={service.title} />
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <div className="text">
            <h3>Testimonials</h3>
            <h1>See what our clients have to say</h1>
          </div>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                  <div className="testimonial-info">
                    <img src={testimonial.imageUrl} alt={testimonial.name} />
                    <span className="name">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="text">
            <h3>What You Can Expect</h3>
            <h1>Personal Support. Experts. Always Available. </h1>
          </div>

          <div id="about" className="flex_center">
            <div className='expect-container'>
              <ul>
                <li>
                  <strong>Full Cycle of Bookkeeping:</strong> We manage daily payments, categorize expenses, send invoices, track payments, and perform monthly bank reconciliations for accuracy.
                </li>
                <br />
                <li>
                  <strong>One-on-One Support:</strong> You'll have a dedicated bookkeeper who knows your business and is always ready to help.
                </li>
                <br />
                <li>
                  <strong>Easy-to-Read Financial Reports:</strong> Get clear financial reports that help you understand your current business situation and make smart decisions.
                </li>
                <br />
                <li>
                  <strong>We Grow Together:</strong> When your business grows, we grow with you.
                </li>
                <br />
                <li>
                  <strong>AI Tools:</strong> Use the latest technology to make your work easier, and your data is always safe with us.
                </li>
                <br />
                <li>
                  <strong>Client Portal:</strong> You'll have access to a client portal where you can view and download reports, ask questions, respond to ours, track progress, and more—all in one spot.
                </li>
                <br />
                <li>
                  <strong>Full Automation:</strong> We improve and automate your financial system, so you don’t have to worry about it.
                </li>
              </ul>
            </div>
            <div className="expect-image">
              <img src={aboutImage} alt="About Us" />
            </div>
          </div>

        </section>


        {/* How We Work Section */}
        <section id="howto" className="flex_center">
          <header>
            <div className="text">
              <h3>Workflow</h3>
              <h1>How does it work?</h1>
              <ul>
                <li>1. Free Consultation call</li>
                <li>2. Free Bookkeeping Analysis</li>
                <li>3. Plan of Action</li>
                <li>4. Make it Official</li>
                <li>5. Launch!</li>
              </ul>
            </div>
            <div className="button">
              <a href="#pre-call" onClick={scrollToPreCall}>Start Now</a>
            </div>
          </header>
          <div className="image">
            <div className="image-container">
              <img src={howtoImage} alt="How We Work" />
            </div>
          </div>
        </section>

        {/* Pricing */}
        {/* <section id="pricing">
          <div className="text">
            <h3>Pricing</h3>
            <h1>Perfect plan for every business</h1>
          </div>
          <div className="grid-layout">

            <div class="plan __fav">
              <div class="desc">
                <div class="best">
                  <svg width="48px" height="auto" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.886 26.9659L21.026 37.3929C21.023 37.3969 21.022 37.4019 21.019 37.4059C21.007 37.4239 20.998 37.4439 20.987 37.4629C20.971 37.4899 20.956 37.5169 20.944 37.5459C20.941 37.5519 20.937 37.5579 20.935 37.5639C20.928 37.5789 20.925 37.5949 20.919 37.6099C20.908 37.6369 20.898 37.6649 20.89 37.6929C20.883 37.7159 20.878 37.7399 20.872 37.7639C20.866 37.7909 20.861 37.8169 20.856 37.8449C20.853 37.8689 20.85 37.8939 20.848 37.9179C20.846 37.9449 20.845 37.9729 20.845 37.9999C20.845 38.0239 20.845 38.0469 20.846 38.0709C20.848 38.0999 20.851 38.1279 20.855 38.1569C20.858 38.1789 20.861 38.2009 20.866 38.2229C20.871 38.2529 20.88 38.2819 20.888 38.3109C20.894 38.3319 20.899 38.3519 20.906 38.3729C20.916 38.4019 20.928 38.4299 20.941 38.4579C20.95 38.4779 20.958 38.4979 20.968 38.5169C20.971 38.5229 20.973 38.5289 20.976 38.5359C20.988 38.5569 21.002 38.5769 21.015 38.5979C21.027 38.6169 21.037 38.6349 21.05 38.6529C21.07 38.6809 21.092 38.7069 21.114 38.7319C21.125 38.7449 21.134 38.7589 21.146 38.7709L38.157 56.8559C38.159 56.8589 38.161 56.8609 38.163 56.8639L38.167 56.8679C38.171 56.8719 38.175 56.8759 38.18 56.8799C38.184 56.8839 38.188 56.8879 38.192 56.8919C38.205 56.9059 38.217 56.9169 38.231 56.9299C38.236 56.9349 38.242 56.9399 38.247 56.9449C38.253 56.9499 38.26 56.9549 38.266 56.9609C38.269 56.9629 38.272 56.9659 38.275 56.9689C38.288 56.9789 38.301 56.9899 38.315 56.9999C38.321 57.0049 38.328 57.0099 38.335 57.0139C38.342 57.0199 38.35 57.0239 38.357 57.0299C38.361 57.0319 38.365 57.0349 38.37 57.0379C38.382 57.0459 38.393 57.0549 38.406 57.0609C38.414 57.0659 38.422 57.0709 38.429 57.0749C38.437 57.0789 38.446 57.0839 38.454 57.0889C38.462 57.0929 38.471 57.0969 38.479 57.1019C38.486 57.1059 38.494 57.1109 38.501 57.1139L38.503 57.1149C38.511 57.1189 38.519 57.1219 38.527 57.1249C38.537 57.1299 38.547 57.1329 38.557 57.1379C38.573 57.1449 38.589 57.1519 38.605 57.1589C38.614 57.1609 38.623 57.1629 38.632 57.1669C38.643 57.1699 38.653 57.1729 38.665 57.1769C38.68 57.1809 38.694 57.1869 38.709 57.1909C38.72 57.1929 38.731 57.1949 38.741 57.1969C38.752 57.1989 38.763 57.2009 38.774 57.2029L38.776 57.2039C38.789 57.2069 38.802 57.2099 38.815 57.2119C38.827 57.2129 38.838 57.2149 38.85 57.2159C38.862 57.2169 38.873 57.2189 38.885 57.2189C38.898 57.2209 38.911 57.2229 38.924 57.2229C38.937 57.2229 38.949 57.2229 38.961 57.2229C38.967 57.2229 38.973 57.2249 38.979 57.2249C38.985 57.2249 38.991 57.2229 38.997 57.2229C39.009 57.2229 39.022 57.2229 39.034 57.2229C39.048 57.2229 39.06 57.2209 39.073 57.2189C39.085 57.2189 39.096 57.2169 39.108 57.2159C39.12 57.2149 39.131 57.2129 39.143 57.2119C39.156 57.2099 39.169 57.2069 39.182 57.2039L39.184 57.2029C39.196 57.2009 39.206 57.1989 39.217 57.1969C39.228 57.1949 39.238 57.1929 39.249 57.1909C39.264 57.1869 39.278 57.1809 39.293 57.1769C39.305 57.1729 39.315 57.1699 39.326 57.1669C39.335 57.1629 39.345 57.1609 39.353 57.1589C39.369 57.1519 39.384 57.1449 39.4 57.1379C39.41 57.1329 39.421 57.1299 39.43 57.1249C39.438 57.1219 39.447 57.1189 39.454 57.1149L39.456 57.1139C39.464 57.1109 39.471 57.1059 39.478 57.1019C39.486 57.0969 39.494 57.0929 39.502 57.0889C39.511 57.0839 39.52 57.0789 39.527 57.0749C39.534 57.0709 39.543 57.0659 39.55 57.0609C39.563 57.0539 39.574 57.0449 39.586 57.0379C39.59 57.0349 39.595 57.0319 39.599 57.0299C39.606 57.0239 39.614 57.0199 39.621 57.0139C39.628 57.0099 39.635 57.0049 39.641 56.9999C39.655 56.9899 39.667 56.9789 39.681 56.9689C39.684 56.9659 39.687 56.9629 39.691 56.9609C39.697 56.9549 39.704 56.9499 39.71 56.9449C39.716 56.9399 39.721 56.9349 39.727 56.9299C39.74 56.9169 39.752 56.9059 39.765 56.8919C39.769 56.8879 39.774 56.8839 39.778 56.8799C39.782 56.8759 39.786 56.8719 39.791 56.8679L39.795 56.8639C39.797 56.8609 39.799 56.8589 39.801 56.8559L56.812 38.7709C56.823 38.7589 56.832 38.7459 56.842 38.7329C56.864 38.7069 56.887 38.6809 56.907 38.6519C56.92 38.6349 56.929 38.6159 56.94 38.5979C56.954 38.5769 56.968 38.5569 56.98 38.5359C56.984 38.5299 56.985 38.5229 56.989 38.5169C56.999 38.4979 57.007 38.4779 57.015 38.4579C57.028 38.4299 57.04 38.4009 57.05 38.3719C57.057 38.3509 57.063 38.3309 57.069 38.3109C57.077 38.2809 57.085 38.2519 57.09 38.2219C57.095 38.1999 57.098 38.1789 57.101 38.1559C57.105 38.1269 57.108 38.0989 57.11 38.0699C57.112 38.0459 57.112 38.0229 57.112 37.9989C57.112 37.9719 57.11 37.9439 57.108 37.9169C57.106 37.8919 57.103 37.8679 57.1 37.8439C57.096 37.8169 57.09 37.7899 57.084 37.7629C57.079 37.7399 57.073 37.7159 57.066 37.6919C57.058 37.6639 57.047 37.6359 57.038 37.6089C57.032 37.5939 57.028 37.5779 57.021 37.5629C57.019 37.5569 57.014 37.5519 57.012 37.5449C56.998 37.5159 56.983 37.4889 56.968 37.4609C56.957 37.4419 56.947 37.4229 56.937 37.4059C56.934 37.4019 56.932 37.3969 56.929 37.3919L50.07 26.9649C49.863 26.6499 49.514 26.4629 49.137 26.4629H44.65H33.306H28.818C28.441 26.4629 28.093 26.6509 27.886 26.9659ZM29.691 39.1219L34.93 50.1679L24.541 39.1219H29.691ZM35.232 28.6949H42.727L45.929 36.8889H43.216H34.744H32.031L35.232 28.6949ZM34.744 39.1219H43.216H45.799L38.98 53.4979L32.161 39.1219H34.744ZM43.029 50.1679L48.268 39.1219H53.418L43.029 50.1679ZM53.931 36.8899H48.326L45.124 28.6959H48.54L53.931 36.8899ZM32.836 28.6949L29.634 36.8889H24.029L29.42 28.6949H32.836Z" fill="#2D6848" />
                    <path d="M38.98 60.0999C38.364 60.0999 37.864 60.5999 37.864 61.2149V74.8159C37.864 75.4319 38.364 75.9319 38.98 75.9319C39.596 75.9319 40.096 75.4319 40.096 74.8159V61.2149C40.096 60.5999 39.596 60.0999 38.98 60.0999Z" fill="#2D6848" />
                    <path d="M47.839 59.139C47.63 58.559 46.99 58.258 46.41 58.467C45.831 58.676 45.53 59.317 45.739 59.896L50.347 72.69C50.556 73.27 51.196 73.571 51.775 73.363C52.355 73.153 52.656 72.514 52.447 71.934L47.839 59.139Z" fill="#2D6848" />
                    <path d="M54.4199 54.561C54.0259 54.086 53.3229 54.02 52.8489 54.414C52.3749 54.808 52.3079 55.511 52.7009 55.985L61.3739 66.462C61.7679 66.937 62.4709 67.003 62.9449 66.609C63.4189 66.215 63.4859 65.512 63.0929 65.038L54.4199 54.561Z" fill="#2D6848" />
                    <path d="M70.7701 54.9389L59.0601 48.0229C58.5301 47.7109 57.8451 47.8859 57.5321 48.4169C57.2191 48.9479 57.3942 49.6319 57.9262 49.9449L69.6351 56.8609C70.1661 57.1749 70.8511 56.9989 71.1641 56.4679C71.4771 55.9379 71.3001 55.2539 70.7701 54.9389Z" fill="#2D6848" />
                    <path d="M74.5701 42.8398L61.2101 40.3008C60.6051 40.1858 60.0211 40.5828 59.9051 41.1888C59.7901 41.7948 60.1871 42.3788 60.7931 42.4938L74.1541 45.0318C74.7591 45.1468 75.3431 44.7498 75.4591 44.1438C75.5751 43.5378 75.1761 42.9548 74.5701 42.8398Z" fill="#2D6848" />
                    <path d="M59.6881 33.5829C59.7851 34.1919 60.3571 34.6059 60.9651 34.5099L74.3961 32.3699C75.0041 32.2729 75.4191 31.7009 75.3231 31.0929C75.2261 30.4839 74.6541 30.0699 74.0461 30.1659L60.6151 32.3059C60.0071 32.4029 59.5921 32.9749 59.6881 33.5829Z" fill="#2D6848" />
                    <path d="M56.9081 26.502C57.2051 27.042 57.8841 27.238 58.4241 26.94L70.3341 20.375C70.8741 20.078 71.0701 19.399 70.7721 18.859C70.4741 18.319 69.7961 18.123 69.2561 18.421L57.3461 24.986C56.8071 25.284 56.6101 25.962 56.9081 26.502Z" fill="#2D6848" />
                    <path d="M51.8912 20.7818C52.3552 21.1888 53.0592 21.1438 53.4662 20.6808L62.4462 10.4678C62.8532 10.0058 62.8072 9.30079 62.3442 8.89279C61.8822 8.48579 61.1772 8.53079 60.7702 8.99379L51.7902 19.2068C51.3832 19.6698 51.4292 20.3748 51.8912 20.7818Z" fill="#2D6848" />
                    <path d="M45.232 17.1009C45.806 17.3269 46.455 17.0449 46.68 16.4719L51.667 3.81993C51.893 3.24693 51.611 2.59793 51.038 2.37193C50.465 2.14593 49.816 2.42793 49.591 3.00093L44.604 15.6529C44.378 16.2269 44.659 16.8749 45.232 17.1009Z" fill="#2D6848" />
                    <path d="M37.7222 15.8939C38.3382 15.9119 38.8522 15.4279 38.8702 14.8109L39.2742 1.2169C39.2932 0.600899 38.8082 0.0868991 38.1922 0.0688991C37.5762 0.0498991 37.0622 0.534899 37.0442 1.1509L36.6392 14.7449C36.6212 15.3609 37.1052 15.8749 37.7222 15.8939Z" fill="#2D6848" />
                    <path d="M28.8372 16.59C29.0292 17.176 29.6592 17.495 30.2452 17.304C30.8312 17.113 31.1502 16.482 30.9592 15.897L26.7322 2.96995C26.5412 2.38495 25.9102 2.06495 25.3252 2.25595C24.7392 2.44795 24.4192 3.07795 24.6112 3.66395L28.8372 16.59Z" fill="#2D6848" />
                    <path d="M22.1231 20.9698C22.5011 21.4558 23.2031 21.5428 23.6891 21.1648C24.1751 20.7858 24.2631 20.0848 23.8841 19.5988L15.5271 8.86984C15.1481 8.38384 14.4471 8.29684 13.9611 8.67584C13.4751 9.05484 13.3881 9.75584 13.7671 10.2418L22.1231 20.9698Z" fill="#2D6848" />
                    <path d="M5.79212 20.1048L17.2911 27.3668C17.8121 27.6958 18.5011 27.5408 18.8311 27.0188C19.1601 26.4978 19.0041 25.8088 18.4831 25.4788L6.98412 18.2168C6.46312 17.8878 5.77412 18.0438 5.44412 18.5648C5.11512 19.0858 5.27112 19.7758 5.79212 20.1048Z" fill="#2D6848" />
                    <path d="M1.63212 32.0869L14.9111 35.0219C15.5131 35.1549 16.1081 34.7749 16.2421 34.1729C16.3751 33.5709 15.9951 32.9749 15.3931 32.8419L2.11412 29.9079C1.51212 29.7749 0.916125 30.1549 0.783125 30.7569C0.650125 31.3589 1.03012 31.9549 1.63212 32.0869Z" fill="#2D6848" />
                    <path d="M16.232 41.7809C16.153 41.1699 15.594 40.7379 14.982 40.8179L1.49505 42.5569C0.884048 42.6359 0.452048 43.1959 0.531048 43.8069C0.610048 44.4179 1.16905 44.8499 1.78105 44.7709L15.269 43.0319C15.879 42.9529 16.311 42.3929 16.232 41.7809Z" fill="#2D6848" />
                    <path d="M18.801 48.9428C18.52 48.3938 17.847 48.1768 17.299 48.4588L5.199 54.6678C4.651 54.9488 4.434 55.6208 4.715 56.1698C4.997 56.7178 5.669 56.9348 6.217 56.6518L18.318 50.4448C18.866 50.1638 19.083 49.4918 18.801 48.9428Z" fill="#2D6848" />
                    <path d="M23.6449 54.8108C23.1949 54.3888 22.4889 54.4148 22.0679 54.8638L12.7879 64.8048C12.3679 65.2558 12.3919 65.9618 12.8419 66.3828C13.2929 66.8028 13.9989 66.7788 14.4189 66.3278L23.6999 56.3868C24.1199 55.9368 24.0959 55.2298 23.6449 54.8108Z" fill="#2D6848" />
                    <path d="M30.1909 58.6878C29.6249 58.4458 28.9679 58.7078 28.7249 59.2738L23.3629 71.7718C23.1199 72.3378 23.3819 72.9948 23.9479 73.2378C24.5139 73.4808 25.1709 73.2178 25.4139 72.6518L30.7759 60.1528C31.0199 59.5868 30.7569 58.9308 30.1909 58.6878Z" fill="#2D6848" />
                  </svg>
                  <p>For You</p>
                </div>
                <h2>Free Analysis</h2>
                <p>In a private conference, we will thoroughly examine the financial position of your business and the current state of accounting, offering optimal solutions.</p>
              </div>
              <div class="price">
                <div class="button">
                  <a href="#pre-call" onClick={scrollToPreCall}>Book a Call</a>
                </div>
              </div>
            </div>

            <div className="plan">
              <div className="desc">
                <div className="best">
                </div>
                <h2>CFO</h2>
                <p>
                  Our CFO services include deep analysis of financial KPIs and reports,
                  strategy and plan development, and forecasting. We help your business
                  achieve financial stability and growth.
                </p>
              </div>
              <div className="price">
                <h2></h2>
                <div className="button">
                  <a href="#pre-call" onClick={scrollToPreCall} >Book a Call</a>
                </div>
              </div>
            </div>

            <div className="plan">
              <div className="desc">
                <div className="best">
                  <p>None</p>
                </div>
                <h2>Startup</h2>
                <div className="list">
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />

                    </svg>
                    <p>Transactions: 100</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Accounts: 2</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Monthly Meetings</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial Reports</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Client Portal</p>
                  </div>
                </div>
              </div>
              <div className="price">
                <h2>$357 /месяц</h2>
                <div className="button">
                  <a href="#pre-call" onClick={scrollToPreCall} >Book a Call</a>
                </div>
              </div>
            </div>

            <div className="plan">
              <div className="desc">
                <div className="best">
                  <p>None</p>
                </div>
                <h2>Small Business</h2>
                <div className="list">
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Transactions: 300</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Accounts: 3</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Monthly Meetings</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial Reports</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Client Portal</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial Metrics</p>
                  </div>
                </div>
              </div>
              <div className="price">
                <h2>$672 /месяц</h2>
                <div className="button">
                  <a href="#pre-call" onClick={scrollToPreCall}>Book a Call</a>
                </div>
              </div>
            </div>

            <div className="plan">
              <div className="desc">
                <div className="best">
                  <p>None</p>
                </div>
                <h2>Medium Business</h2>
                <div className="list">
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Transactions: 500</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Accounts: 4</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Monthly Meetings</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial Reports</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Client Portal</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial Metrics</p>
                  </div>
                  <div className="point">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#7FF0B2" fillOpacity="0.25" />
                      <path d="M14.3387 5.18558C14.0648 5.1956 13.8053 5.32259 13.6153 5.53956C11.5999 7.75846 10.0607 9.61169 8.19013 11.709L6.1976 9.85963C6.09188 9.76142 5.96955 9.6871 5.83763 9.64091C5.70571 9.59472 5.56679 9.57759 5.42883 9.59048C5.29087 9.60338 5.15658 9.64604 5.03366 9.71604C4.91074 9.78605 4.8016 9.88202 4.71249 9.99844C4.62339 10.1149 4.55607 10.2494 4.51439 10.3945C4.47271 10.5395 4.4575 10.6922 4.46962 10.8437C4.48173 10.9952 4.52095 11.1427 4.58501 11.2775C4.64907 11.4123 4.73673 11.532 4.84295 11.6296L7.57856 14.1725C7.77984 14.3587 8.03734 14.4553 8.30028 14.4433C8.56322 14.4313 8.8125 14.3114 8.99898 14.1074C11.2653 11.6124 12.8786 9.61948 15.1015 7.17223C15.2542 7.01012 15.3586 6.80107 15.4012 6.57254C15.4437 6.344 15.4223 6.10668 15.3398 5.89176C15.2572 5.67683 15.1175 5.49436 14.9388 5.36833C14.7601 5.24229 14.5509 5.17859 14.3387 5.18558Z" fill="#2D6848" />
                    </svg>
                    <p>Financial analysis</p>
                  </div>
                </div>
              </div>
              <div className="price">
                <h2>$1,350 /месяц</h2>
                <div className="button">
                  <a href="#pre-call" onClick={scrollToPreCall}>Book a Call</a>
                </div>
              </div>
            </div>

            <div class="plan __fav">
              <div class="desc">
                <div class="best">
                  <svg width="48px" height="auto" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.886 26.9659L21.026 37.3929C21.023 37.3969 21.022 37.4019 21.019 37.4059C21.007 37.4239 20.998 37.4439 20.987 37.4629C20.971 37.4899 20.956 37.5169 20.944 37.5459C20.941 37.5519 20.937 37.5579 20.935 37.5639C20.928 37.5789 20.925 37.5949 20.919 37.6099C20.908 37.6369 20.898 37.6649 20.89 37.6929C20.883 37.7159 20.878 37.7399 20.872 37.7639C20.866 37.7909 20.861 37.8169 20.856 37.8449C20.853 37.8689 20.85 37.8939 20.848 37.9179C20.846 37.9449 20.845 37.9729 20.845 37.9999C20.845 38.0239 20.845 38.0469 20.846 38.0709C20.848 38.0999 20.851 38.1279 20.855 38.1569C20.858 38.1789 20.861 38.2009 20.866 38.2229C20.871 38.2529 20.88 38.2819 20.888 38.3109C20.894 38.3319 20.899 38.3519 20.906 38.3729C20.916 38.4019 20.928 38.4299 20.941 38.4579C20.95 38.4779 20.958 38.4979 20.968 38.5169C20.971 38.5229 20.973 38.5289 20.976 38.5359C20.988 38.5569 21.002 38.5769 21.015 38.5979C21.027 38.6169 21.037 38.6349 21.05 38.6529C21.07 38.6809 21.092 38.7069 21.114 38.7319C21.125 38.7449 21.134 38.7589 21.146 38.7709L38.157 56.8559C38.159 56.8589 38.161 56.8609 38.163 56.8639L38.167 56.8679C38.171 56.8719 38.175 56.8759 38.18 56.8799C38.184 56.8839 38.188 56.8879 38.192 56.8919C38.205 56.9059 38.217 56.9169 38.231 56.9299C38.236 56.9349 38.242 56.9399 38.247 56.9449C38.253 56.9499 38.26 56.9549 38.266 56.9609C38.269 56.9629 38.272 56.9659 38.275 56.9689C38.288 56.9789 38.301 56.9899 38.315 56.9999C38.321 57.0049 38.328 57.0099 38.335 57.0139C38.342 57.0199 38.35 57.0239 38.357 57.0299C38.361 57.0319 38.365 57.0349 38.37 57.0379C38.382 57.0459 38.393 57.0549 38.406 57.0609C38.414 57.0659 38.422 57.0709 38.429 57.0749C38.437 57.0789 38.446 57.0839 38.454 57.0889C38.462 57.0929 38.471 57.0969 38.479 57.1019C38.486 57.1059 38.494 57.1109 38.501 57.1139L38.503 57.1149C38.511 57.1189 38.519 57.1219 38.527 57.1249C38.537 57.1299 38.547 57.1329 38.557 57.1379C38.573 57.1449 38.589 57.1519 38.605 57.1589C38.614 57.1609 38.623 57.1629 38.632 57.1669C38.643 57.1699 38.653 57.1729 38.665 57.1769C38.68 57.1809 38.694 57.1869 38.709 57.1909C38.72 57.1929 38.731 57.1949 38.741 57.1969C38.752 57.1989 38.763 57.2009 38.774 57.2029L38.776 57.2039C38.789 57.2069 38.802 57.2099 38.815 57.2119C38.827 57.2129 38.838 57.2149 38.85 57.2159C38.862 57.2169 38.873 57.2189 38.885 57.2189C38.898 57.2209 38.911 57.2229 38.924 57.2229C38.937 57.2229 38.949 57.2229 38.961 57.2229C38.967 57.2229 38.973 57.2249 38.979 57.2249C38.985 57.2249 38.991 57.2229 38.997 57.2229C39.009 57.2229 39.022 57.2229 39.034 57.2229C39.048 57.2229 39.06 57.2209 39.073 57.2189C39.085 57.2189 39.096 57.2169 39.108 57.2159C39.12 57.2149 39.131 57.2129 39.143 57.2119C39.156 57.2099 39.169 57.2069 39.182 57.2039L39.184 57.2029C39.196 57.2009 39.206 57.1989 39.217 57.1969C39.228 57.1949 39.238 57.1929 39.249 57.1909C39.264 57.1869 39.278 57.1809 39.293 57.1769C39.305 57.1729 39.315 57.1699 39.326 57.1669C39.335 57.1629 39.345 57.1609 39.353 57.1589C39.369 57.1519 39.384 57.1449 39.4 57.1379C39.41 57.1329 39.421 57.1299 39.43 57.1249C39.438 57.1219 39.447 57.1189 39.454 57.1149L39.456 57.1139C39.464 57.1109 39.471 57.1059 39.478 57.1019C39.486 57.0969 39.494 57.0929 39.502 57.0889C39.511 57.0839 39.52 57.0789 39.527 57.0749C39.534 57.0709 39.543 57.0659 39.55 57.0609C39.563 57.0539 39.574 57.0449 39.586 57.0379C39.59 57.0349 39.595 57.0319 39.599 57.0299C39.606 57.0239 39.614 57.0199 39.621 57.0139C39.628 57.0099 39.635 57.0049 39.641 56.9999C39.655 56.9899 39.667 56.9789 39.681 56.9689C39.684 56.9659 39.687 56.9629 39.691 56.9609C39.697 56.9549 39.704 56.9499 39.71 56.9449C39.716 56.9399 39.721 56.9349 39.727 56.9299C39.74 56.9169 39.752 56.9059 39.765 56.8919C39.769 56.8879 39.774 56.8839 39.778 56.8799C39.782 56.8759 39.786 56.8719 39.791 56.8679L39.795 56.8639C39.797 56.8609 39.799 56.8589 39.801 56.8559L56.812 38.7709C56.823 38.7589 56.832 38.7459 56.842 38.7329C56.864 38.7069 56.887 38.6809 56.907 38.6519C56.92 38.6349 56.929 38.6159 56.94 38.5979C56.954 38.5769 56.968 38.5569 56.98 38.5359C56.984 38.5299 56.985 38.5229 56.989 38.5169C56.999 38.4979 57.007 38.4779 57.015 38.4579C57.028 38.4299 57.04 38.4009 57.05 38.3719C57.057 38.3509 57.063 38.3309 57.069 38.3109C57.077 38.2809 57.085 38.2519 57.09 38.2219C57.095 38.1999 57.098 38.1789 57.101 38.1559C57.105 38.1269 57.108 38.0989 57.11 38.0699C57.112 38.0459 57.112 38.0229 57.112 37.9989C57.112 37.9719 57.11 37.9439 57.108 37.9169C57.106 37.8919 57.103 37.8679 57.1 37.8439C57.096 37.8169 57.09 37.7899 57.084 37.7629C57.079 37.7399 57.073 37.7159 57.066 37.6919C57.058 37.6639 57.047 37.6359 57.038 37.6089C57.032 37.5939 57.028 37.5779 57.021 37.5629C57.019 37.5569 57.014 37.5519 57.012 37.5449C56.998 37.5159 56.983 37.4889 56.968 37.4609C56.957 37.4419 56.947 37.4229 56.937 37.4059C56.934 37.4019 56.932 37.3969 56.929 37.3919L50.07 26.9649C49.863 26.6499 49.514 26.4629 49.137 26.4629H44.65H33.306H28.818C28.441 26.4629 28.093 26.6509 27.886 26.9659ZM29.691 39.1219L34.93 50.1679L24.541 39.1219H29.691ZM35.232 28.6949H42.727L45.929 36.8889H43.216H34.744H32.031L35.232 28.6949ZM34.744 39.1219H43.216H45.799L38.98 53.4979L32.161 39.1219H34.744ZM43.029 50.1679L48.268 39.1219H53.418L43.029 50.1679ZM53.931 36.8899H48.326L45.124 28.6959H48.54L53.931 36.8899ZM32.836 28.6949L29.634 36.8889H24.029L29.42 28.6949H32.836Z" fill="#2D6848" />
                    <path d="M38.98 60.0999C38.364 60.0999 37.864 60.5999 37.864 61.2149V74.8159C37.864 75.4319 38.364 75.9319 38.98 75.9319C39.596 75.9319 40.096 75.4319 40.096 74.8159V61.2149C40.096 60.5999 39.596 60.0999 38.98 60.0999Z" fill="#2D6848" />
                    <path d="M47.839 59.139C47.63 58.559 46.99 58.258 46.41 58.467C45.831 58.676 45.53 59.317 45.739 59.896L50.347 72.69C50.556 73.27 51.196 73.571 51.775 73.363C52.355 73.153 52.656 72.514 52.447 71.934L47.839 59.139Z" fill="#2D6848" />
                    <path d="M54.4199 54.561C54.0259 54.086 53.3229 54.02 52.8489 54.414C52.3749 54.808 52.3079 55.511 52.7009 55.985L61.3739 66.462C61.7679 66.937 62.4709 67.003 62.9449 66.609C63.4189 66.215 63.4859 65.512 63.0929 65.038L54.4199 54.561Z" fill="#2D6848" />
                    <path d="M70.7701 54.9389L59.0601 48.0229C58.5301 47.7109 57.8451 47.8859 57.5321 48.4169C57.2191 48.9479 57.3942 49.6319 57.9262 49.9449L69.6351 56.8609C70.1661 57.1749 70.8511 56.9989 71.1641 56.4679C71.4771 55.9379 71.3001 55.2539 70.7701 54.9389Z" fill="#2D6848" />
                    <path d="M74.5701 42.8398L61.2101 40.3008C60.6051 40.1858 60.0211 40.5828 59.9051 41.1888C59.7901 41.7948 60.1871 42.3788 60.7931 42.4938L74.1541 45.0318C74.7591 45.1468 75.3431 44.7498 75.4591 44.1438C75.5751 43.5378 75.1761 42.9548 74.5701 42.8398Z" fill="#2D6848" />
                    <path d="M59.6881 33.5829C59.7851 34.1919 60.3571 34.6059 60.9651 34.5099L74.3961 32.3699C75.0041 32.2729 75.4191 31.7009 75.3231 31.0929C75.2261 30.4839 74.6541 30.0699 74.0461 30.1659L60.6151 32.3059C60.0071 32.4029 59.5921 32.9749 59.6881 33.5829Z" fill="#2D6848" />
                    <path d="M56.9081 26.502C57.2051 27.042 57.8841 27.238 58.4241 26.94L70.3341 20.375C70.8741 20.078 71.0701 19.399 70.7721 18.859C70.4741 18.319 69.7961 18.123 69.2561 18.421L57.3461 24.986C56.8071 25.284 56.6101 25.962 56.9081 26.502Z" fill="#2D6848" />
                    <path d="M51.8912 20.7818C52.3552 21.1888 53.0592 21.1438 53.4662 20.6808L62.4462 10.4678C62.8532 10.0058 62.8072 9.30079 62.3442 8.89279C61.8822 8.48579 61.1772 8.53079 60.7702 8.99379L51.7902 19.2068C51.3832 19.6698 51.4292 20.3748 51.8912 20.7818Z" fill="#2D6848" />
                    <path d="M45.232 17.1009C45.806 17.3269 46.455 17.0449 46.68 16.4719L51.667 3.81993C51.893 3.24693 51.611 2.59793 51.038 2.37193C50.465 2.14593 49.816 2.42793 49.591 3.00093L44.604 15.6529C44.378 16.2269 44.659 16.8749 45.232 17.1009Z" fill="#2D6848" />
                    <path d="M37.7222 15.8939C38.3382 15.9119 38.8522 15.4279 38.8702 14.8109L39.2742 1.2169C39.2932 0.600899 38.8082 0.0868991 38.1922 0.0688991C37.5762 0.0498991 37.0622 0.534899 37.0442 1.1509L36.6392 14.7449C36.6212 15.3609 37.1052 15.8749 37.7222 15.8939Z" fill="#2D6848" />
                    <path d="M28.8372 16.59C29.0292 17.176 29.6592 17.495 30.2452 17.304C30.8312 17.113 31.1502 16.482 30.9592 15.897L26.7322 2.96995C26.5412 2.38495 25.9102 2.06495 25.3252 2.25595C24.7392 2.44795 24.4192 3.07795 24.6112 3.66395L28.8372 16.59Z" fill="#2D6848" />
                    <path d="M22.1231 20.9698C22.5011 21.4558 23.2031 21.5428 23.6891 21.1648C24.1751 20.7858 24.2631 20.0848 23.8841 19.5988L15.5271 8.86984C15.1481 8.38384 14.4471 8.29684 13.9611 8.67584C13.4751 9.05484 13.3881 9.75584 13.7671 10.2418L22.1231 20.9698Z" fill="#2D6848" />
                    <path d="M5.79212 20.1048L17.2911 27.3668C17.8121 27.6958 18.5011 27.5408 18.8311 27.0188C19.1601 26.4978 19.0041 25.8088 18.4831 25.4788L6.98412 18.2168C6.46312 17.8878 5.77412 18.0438 5.44412 18.5648C5.11512 19.0858 5.27112 19.7758 5.79212 20.1048Z" fill="#2D6848" />
                    <path d="M1.63212 32.0869L14.9111 35.0219C15.5131 35.1549 16.1081 34.7749 16.2421 34.1729C16.3751 33.5709 15.9951 32.9749 15.3931 32.8419L2.11412 29.9079C1.51212 29.7749 0.916125 30.1549 0.783125 30.7569C0.650125 31.3589 1.03012 31.9549 1.63212 32.0869Z" fill="#2D6848" />
                    <path d="M16.232 41.7809C16.153 41.1699 15.594 40.7379 14.982 40.8179L1.49505 42.5569C0.884048 42.6359 0.452048 43.1959 0.531048 43.8069C0.610048 44.4179 1.16905 44.8499 1.78105 44.7709L15.269 43.0319C15.879 42.9529 16.311 42.3929 16.232 41.7809Z" fill="#2D6848" />
                    <path d="M18.801 48.9428C18.52 48.3938 17.847 48.1768 17.299 48.4588L5.199 54.6678C4.651 54.9488 4.434 55.6208 4.715 56.1698C4.997 56.7178 5.669 56.9348 6.217 56.6518L18.318 50.4448C18.866 50.1638 19.083 49.4918 18.801 48.9428Z" fill="#2D6848" />
                    <path d="M23.6449 54.8108C23.1949 54.3888 22.4889 54.4148 22.0679 54.8638L12.7879 64.8048C12.3679 65.2558 12.3919 65.9618 12.8419 66.3828C13.2929 66.8028 13.9989 66.7788 14.4189 66.3278L23.6999 56.3868C24.1199 55.9368 24.0959 55.2298 23.6449 54.8108Z" fill="#2D6848" />
                    <path d="M30.1909 58.6878C29.6249 58.4458 28.9679 58.7078 28.7249 59.2738L23.3629 71.7718C23.1199 72.3378 23.3819 72.9948 23.9479 73.2378C24.5139 73.4808 25.1709 73.2178 25.4139 72.6518L30.7759 60.1528C31.0199 59.5868 30.7569 58.9308 30.1909 58.6878Z" fill="#2D6848" />
                  </svg>
                  <p>For You</p>
                </div>
                <h2>Flexible Plan</h2>
                <p>Create a personalized plan designed for your needs, which may include services from other plans and even more!</p>
              </div>
              <div class="price">
                <div class="button">
                  <a href="#pre-call" onClick={scrollToPreCall}>Book a Call</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Booking Section */}
        <section>
          <div id="pre-call"></div>
          <div id="call" className="flex-center">
            <div className="text">
              <h3>Free Consultation</h3>
              <h1>Schedule my free consultation right now</h1>
            </div>
            <div className="calendly-inline-widget" data-url="https://calendly.com/go4profit-us/discoverycall" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>

        </section>

        {/* Footer Section */}
        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <img src={whiteLogo} alt="go4profit-logo" />
            </div>
            <ul>
              <li>info@go4profit.us</li>
              <li>+1(917) 200-7609</li>
              <li>6500 River Place Blvd Building 7, Austin, TX 78730</li>
            </ul>
          </div>
          <p>Copyright © 2024 Go4Profit | All rights reserved</p>
        </footer>
      </main>
    </div >
  );
}

export default Home;
