const categories = [
  { name: 'Oturma Grubu', icon: 'sofa', tag: 'Modern' },
  { name: 'Yatak Odası', icon: 'bed', tag: 'Konfor' },
  { name: 'Mutfak', icon: 'kitchen', tag: 'Pratik' },
  { name: 'Ofis', icon: 'desk', tag: 'Verimlilik' },
  { name: 'Aydınlatma', icon: 'lamp', tag: 'Estetik' },
  { name: 'Dekor', icon: 'ornament', tag: 'Özel' },
];

const benefits = [
  'Ücretsiz ölçü ve proje danışmanlığı',
  'Yıllık garanti ve kalite kontrol',
  'Özel üretim ve kişiselleştirilmiş tasarım',
  'Hızlı teslimat ve kurulum hizmeti',
];

const featuredProducts = [
  {
    name: 'Luna Sofa',
    category: 'Sofalar',
    price: '₺14.800',
    image: '/img/alina-bondar-DJ3dx5MoUIw-unsplash.jpg',
    description: 'Modern çizgiler ve konforlu oturma deneyimi için tasarlanmış üçlü koltuk.',
  },
  {
    name: 'Nordik Masa',
    category: 'Ofis',
    price: '₺8.600',
    image: '/img/personalgraphic-com-4Co4l84sJWg-unsplash.jpg',
    description: 'Çalışma alanınıza şıklık katan, fonksiyonel ve sağlam tasarım.',
  },
  {
    name: 'Kova Koltuk',
    category: 'Koltuklar',
    price: '₺6.200',
    image: '/img/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg',
    description: 'Minimal çizgilerle evinize sofistike bir dokunuş ekleyen koltuk.',
  },
  {
    name: 'Aster Dining',
    category: 'Mutfak',
    price: '₺11.400',
    image: '/img/sora-sagano--a1HpH8uLjU-unsplash.jpg',
    description: 'Aile yemekleri için zarif, dayanıklı ve mekân dostu masa seti.',
  },
];

function Icon({ type }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

  const icons = {
    sofa: (
      <svg {...common}>
        <path d="M4 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M6 12h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3Zm-2 0h16M8 7V5m8 2V5" />
      </svg>
    ),
    bed: (
      <svg {...common}>
        <path d="M4 16V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7M4 16v2m16-2v2M4 12h16" />
      </svg>
    ),
    kitchen: (
      <svg {...common}>
        <path d="M6 4v7M10 4v7M14 4v7M18 4v7M4 11h16M6 18h.01M12 18h.01M18 18h.01" />
      </svg>
    ),
    desk: (
      <svg {...common}>
        <path d="M3 8h18M6 8v9M18 8v9M6 17h12M9 12h.01M15 12h.01" />
      </svg>
    ),
    lamp: (
      <svg {...common}>
        <path d="M9 18h6m-6-6h6l1.5 6H7.5L9 12Zm2-8h2a3 3 0 0 1 3 3H8a3 3 0 0 1 3-3Z" />
      </svg>
    ),
    ornament: (
      <svg {...common}>
        <path d="M12 3v6m-4.5 4.5h9M12 9l4 4-4 4-4-4 4-4Zm-7 8h14" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 18V8m6 10V4m6 14v-7m4 11H4" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7m-9 2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm6 12 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM6 15l.7 2.3L9 18l-2.3.7L6 21l-.7-2.3L3 18l2.3-.7L6 15Z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm0 0 8 6 8-6" />
      </svg>
    )
  };

  return <span className="icon-wrap">{icons[type] || icons.sofa}</span>;
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Harmoni Mobilya</div>
        <nav className="nav">
          <a href="#about">Hakkımızda</a>
          <a href="#categories">Koleksiyonlar</a>
          <a href="#benefits">Neden Biz</a>
          <a href="#contact">İletişim</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Modern yaşam alanları</p>
            <h1>Görsel estetik, konfor ve kalite bir arada.</h1>
            <h2>Mobilyanızın her detayında düzen, şıklık ve uzun ömürlü kullanım bulunur.</h2>
            <p className="lead">
              Harmoni Mobilya olarak ev, iş yeri ve yaşam alanları için modern ve dayanıklı tasarımlar üretiyoruz.
              Alanınızı daha işlevsel, sıcak ve zarif hale getirmek için özel çözümler sunuyoruz.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#categories">Koleksiyonları Gör</a>
              <a className="secondary-btn" href="#contact">Showroom Ziyareti</a>
            </div>
          </div>

          <div className="hero-card">
            <img src="/img/alvaro-matzumura-tzX5b75T-Qo-unsplash.jpg" alt="Modern yaşam alanı" className="hero-image" />
            <div className="card-glow" />
            <div className="mini-card">
              <span className="label">Müşteri memnuniyeti</span>
              <strong>98%</strong>
            </div>
            <div className="mini-card alt">
              <span className="label">Yıllık deneyim</span>
              <strong>12+</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <div className="heading-icon"><Icon type="briefcase" /></div>
            <p className="eyebrow">Hakkımızda</p>
            <h3>İç mekanlarınıza uygun, işlevsel ve zarif çözümler sunuyoruz.</h3>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                12 yıllık bilgi ve tecrübe ile sektörde güven veren tasarımlar üretiyoruz. Her ürünümüz;
                estetik görünüm, kullanıcı konforu ve uzun ömürlü kullanım düşünülerek hazırlanıyor.
              </p>
              <p>
                Ev, ofis ve ticari alan ihtiyaçlarına göre özgün mobilya çözümleri sunuyor; ölçü, malzeme ve
                renk seçenekleriyle mekanınıza uygun ürünler oluşturuyoruz.
              </p>
            </div>
            <div className="stats-box">
              <div>
                <strong>5.000+</strong>
                <span>Mutlu müşteri</span>
              </div>
              <div>
                <strong>250+</strong>
                <span>Ürün serisi</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Hızlı danışmanlık</span>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="section-block">
          <div className="section-heading">
            <div className="heading-icon"><Icon type="spark" /></div>
            <p className="eyebrow">Koleksiyonlar</p>
            <h3>Öne çıkan mobilya grupları</h3>
          </div>
          <div className="project-grid">
            {categories.map((item) => (
              <article key={item.name} className="project-card">
                <div className="project-top">
                  <span className="project-icon"><Icon type={item.icon} /></span>
                  <span className="project-tag">{item.tag}</span>
                </div>
                <h4>{item.name}</h4>
                <p>
                  {item.name} alanınız için estetik ve kullanışlı çözümler sunan, kaliteli malzemelerden üretilmiş
                  tasarımlar.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section-block">
          <div className="section-heading">
            <div className="heading-icon"><Icon type="sofa" /></div>
            <p className="eyebrow">Fotoğraf Galerisi</p>
            <h3>Showroom görünümü ve en çok tercih edilen ürünler</h3>
          </div>
          <div className="gallery-grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className="gallery-card">
                <img src={product.image} alt={product.name} className="gallery-image" />
                <div className="gallery-info">
                  <span className="gallery-tag">{product.category}</span>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <div className="gallery-footer">
                    <strong>{product.price}</strong>
                    <a href="#contact">Teklif al</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="section-block">
          <div className="section-heading">
            <div className="heading-icon"><Icon type="chart" /></div>
            <p className="eyebrow">Neden Biz</p>
            <h3>İhtiyaçlarınıza uygun, güvenilir bir üretici ve tasarım partneri.</h3>
          </div>
          <div className="skill-list">
            {benefits.map((benefit) => (
              <span key={benefit} className="skill-item">
                <Icon type="spark" />
                {benefit}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">İletişim</p>
          <h3>Mekanınıza uygun mobilya için bizimle konuşun.</h3>
        </div>
        <a href="mailto:info@harmonimobilya.com.tr">
          <span className="mail-icon"><Icon type="mail" /></span>
          info@harmonimobilya.com.tr
        </a>
      </footer>
    </div>
  );
}
