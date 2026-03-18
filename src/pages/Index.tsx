export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">FRIENDLY*B&G</div>
        <nav>
          <a href="#">Бранч</a>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БРАНЧ —
              <br />
              ЭТО <span>культ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Friendly Bar&Grill. Каждый день с 12:00 до 15:00 — еда, которая заряжает на весь день. Без дресс-кода, без занудства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Забронировать стол
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              БРАНЧ
              <br />
              12:00–15:00
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #FRIENDLYVIBES
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЕДА И ЛЮДИ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БРАНЧ КАЖДЫЙ ДЕНЬ * 12:00 ДО 15:00 * ЯЙЦА БЕНЕДИКТ * ПАНКЕЙКИ * ГРИЛЛ * СМУЗИ И КОФЕ * FRIENDLY BAR&GRILL *
            БРАНЧ КАЖДЫЙ ДЕНЬ * 12:00 ДО 15:00 * ЯЙЦА БЕНЕДИКТ * ПАНКЕЙКИ * ГРИЛЛ * СМУЗИ И КОФЕ * FRIENDLY BAR&GRILL
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">БРАНЧ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит бранча</span>
              <img
                src="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Яйца Бенедикт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Яйца Бенедикт</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хрустящий тост, слабосолёный лосось, пашот и голландский соус. Классика, которую не надоедает.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Для сладкоежек
              </span>
              <img
                src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Стек панкейков"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Панкейки Friendly</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Стек из трёх панкейков с кленовым сиропом, ягодами и маслом.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Заряд дня
              </span>
              <img
                src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Смузи боул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Смузи Боул</h3>
                  <span className="price">550 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Манго, банан, гранола, чиа и свежие ягоды. Влетает в ленту и в желудок одновременно.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ХОЧЕТСЯ ОСТАТЬСЯ.</h2>
            <p className="vibe-text">
              Friendly Bar&Grill — это не просто кафе. Это точка сбора тех, кто любит вкусно поесть и хорошо провести время. Ретро-вайб, живая атмосфера и бранч, после которого день идёт как надо. Приходи один или с компанией — здесь всегда рады.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @FRIENDLY.BARGRILL
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">FRIENDLY*B&G</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кафе для тех, кто умеет наслаждаться жизнью. Бранч каждый день с 12:00 до 15:00.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Бранч меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Бранч</h4>
          <ul>
            <li>Пн – Пт: 12:00 – 15:00</li>
            <li>Сб – Вс: 11:00 – 16:00</li>
          </ul>
          <h4 style={{ marginTop: "20px" }}>Бар & Гриль</h4>
          <ul>
            <li>Пн – Чт: 15:00 – 00:00</li>
            <li>Пт – Вс: 15:00 – 02:00</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
