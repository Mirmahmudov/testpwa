import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>BrandName</h2>
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link">Bosh sahifa</a>
            <a href="#features" className="nav-link">Xususiyatlar</a>
            <a href="#about" className="nav-link">Haqida</a>
            <a href="#contact" className="nav-link">Aloqa</a>
          </div>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Zamonaviy <span className="highlight">Yechimlar</span> 
              <br />Bizning Kompaniyamizda
            </h1>
            <p className="hero-description">
              Biz mijozlarimizga eng yaxshi xizmatni taqdim etish uchun 
              innovatsion texnologiyalar va professional yondashuvdan foydalanamiz.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Boshlash</button>
              <button className="btn btn-secondary">Batafsil</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" rx="20" fill="#f0f0f0"/>
                <circle cx="200" cy="150" r="60" fill="#e0e0e0"/>
                <path d="M180 150 L195 165 L220 135" stroke="#666" strokeWidth="3" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Bizning Xususiyatlar</h2>
            <p>Nima uchun bizni tanlashingiz kerak</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Tezkor</h3>
              <p>Eng zamonaviy texnologiyalar bilan tezkor ishlash</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Xavfsiz</h3>
              <p>Yuqori darajadagi xavfsizlik standartlari</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovatsion</h3>
              <p>Eng so'nggi innovatsiyalar va yechimlar</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Qo'llab-quvvatlash</h3>
              <p>24/7 mijozlar qo'llab-quvvatlash xizmati</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Kompaniya Haqida</h2>
              <p>
                Biz 2020-yildan beri mijozlarimizga sifatli xizmat ko'rsatib kelmoqdamiz. 
                Bizning jamoa tajribali mutaxassislardan iborat bo'lib, har bir loyihani 
                maxsus e'tibor bilan amalga oshiradi.
              </p>
              <p>
                Bizning maqsad - mijozlarimizning ehtiyojlarini to'liq qondirish va 
                ularga eng yaxshi natijalarni taqdim etishdir.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Mamnun mijozlar</p>
                </div>
                <div className="stat">
                  <h3>100+</h3>
                  <p>Bajarilgan loyihalar</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Yillik tajriba</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" rx="20" fill="#f8f9fa"/>
                  <rect x="50" y="50" width="300" height="200" rx="10" fill="#e9ecef"/>
                  <circle cx="200" cy="150" r="40" fill="#dee2e6"/>
                  <path d="M185 150 L200 165 L215 135" stroke="#6c757d" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Biz bilan bog'laning</h2>
            <p>Savollaringiz bormi? Bizga yozing!</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@company.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telefon</h4>
                  <p>+998 90 123 45 67</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Manzil</h4>
                  <p>Toshkent shahri, O'zbekiston</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Ismingiz" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Xabaringiz" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Yuborish</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>BrandName</h3>
              <p>Zamonaviy yechimlar va sifatli xizmat</p>
            </div>
            <div className="footer-section">
              <h4>Tezkor havolalar</h4>
              <a href="#home">Bosh sahifa</a>
              <a href="#features">Xususiyatlar</a>
              <a href="#about">Haqida</a>
              <a href="#contact">Aloqa</a>
            </div>
            <div className="footer-section">
              <h4>Ijtimoiy tarmoqlar</h4>
              <a href="#">Telegram</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BrandName. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
