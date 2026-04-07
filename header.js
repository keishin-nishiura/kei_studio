/**
 * header.js — 共通ヘッダーコンポーネント
 * <div id="site-header"></div> を置いたページに自動でヘッダーを挿入します。
 * 現在のページのリンクに .active クラスを自動付与します。
 */
(() => {
  const HTML = `
<header class="bar">
  <div class="wrap bar__in">
    <a href="index.html" class="logo" aria-label="keistudio top">
      <div class="logo__mark" aria-hidden="true">
        <img src="assets/keistudio-logo.png" alt="keistudio logo" class="logo__img" loading="lazy" />
      </div>
      <div class="logo__text">
        <strong>keistudio</strong>
        <span>by keishinnishiura</span>
      </div>
    </a>
    <nav class="nav" id="site-nav">
      <a href="index.html">Top</a>
      <a href="product.html">Products</a>
      <a href="about.html">About</a>
      <a href="#contact" class="cta">お問い合わせ</a>
    </nav>
    <button class="nav-burger" id="nav-burger" aria-label="メニューを開く" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="nav-drawer" id="nav-drawer" aria-hidden="true">
  <a href="index.html">Top</a>
  <a href="product.html">Products</a>
  <a href="about.html">About</a>
  <a href="#contact" class="cta">お問い合わせ</a>
</div>
<div class="nav-overlay" id="nav-overlay"></div>`;

  const CSS = `
    .bar {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(24px) saturate(160%);
      -webkit-backdrop-filter: blur(24px) saturate(160%);
      background-image:
        linear-gradient(180deg, rgba(7, 11, 15, 0.88), rgba(7, 11, 15, 0.75)),
        url("assets/header-banner.png");
      background-size: cover;
      background-position: 25% 47%;
      background-repeat: no-repeat;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }
    .bar__in {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 24px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 13px;
      text-decoration: none;
      color: inherit;
    }
    .logo__mark {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .logo__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .logo__text strong {
      display: block;
      font-size: 0.925rem;
      font-weight: 700;
      line-height: 1;
    }
    .logo__text span {
      display: block;
      font-size: 0.65rem;
      color: var(--text-3, #6e7e90);
      margin-top: 2px;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 999px;
      padding: 4px;
    }
    .nav a {
      padding: 7px 16px;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
      transition: color 0.2s, background 0.2s;
      white-space: nowrap;
    }
    .nav a:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }
    .nav .cta {
      color: #050e17;
      background: linear-gradient(135deg, #c6eeff, #86d8ff);
      font-weight: 700;
      box-shadow: 0 8px 24px rgba(134, 216, 255, 0.18);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .nav .cta:hover {
      color: #050e17;
      background: linear-gradient(135deg, #d8f5ff, #a0e5ff);
      transform: translateY(-1px);
      box-shadow: 0 12px 32px rgba(134, 216, 255, 0.28);
    }
    /* ── ナビ / ハンバーガー 切り替え ── */
    /* デフォルト：ナビ表示・ハンバーガー非表示 */
    .nav-burger {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255,255,255,0.06);
      border-radius: 10px;
      cursor: pointer;
      padding: 0;
      flex-shrink: 0;
      -webkit-tap-highlight-color: transparent;
    }
    /* 860px以下でナビ非表示→ハンバーガー表示に切り替え */
    @media (max-width: 860px) {
      .nav          { display: none !important; }
      .nav-burger   { display: flex; }
      .bar__in      { height: 64px; }
    }
    .nav-burger span {
      display: block;
      width: 18px;
      height: 1.5px;
      background: rgba(255,255,255,0.8);
      border-radius: 2px;
      transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.2s;
      transform-origin: center;
    }
    .nav-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .nav-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    /* ── ドロワー ── */
    .nav-drawer {
      position: fixed;
      top: 72px; /* PCヘッダー高さ */
      right: 0;
      bottom: 0;
      width: min(280px, 82vw);
      z-index: 99;
      background: rgba(7,11,15,0.97);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-left: 1px solid rgba(255,255,255,0.07);
      display: flex;
      flex-direction: column;
      padding: 20px 16px;
      gap: 4px;
      transform: translateX(110%);
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                  visibility 0s linear 0.35s;
      visibility: hidden;
    }
    @media (max-width: 860px) {
      .nav-drawer { top: 64px; } /* スマホヘッダー高さ */
    }
    .nav-drawer.open {
      transform: translateX(0);
      visibility: visible;
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                  visibility 0s linear 0s;
    }
    .nav-drawer a {
      padding: 15px 18px;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 500;
      color: rgba(255,255,255,0.75);
      text-decoration: none;
      transition: color 0.2s, background 0.2s;
      -webkit-tap-highlight-color: transparent;
    }
    .nav-drawer a:hover,
    .nav-drawer a:active { color: #fff; background: rgba(255,255,255,0.07); }
    .nav-drawer .cta {
      margin-top: 10px;
      color: #050e17;
      background: linear-gradient(135deg, #c6eeff, #86d8ff);
      font-weight: 700;
      text-align: center;
      border-radius: 14px;
    }
    .nav-drawer .cta:hover,
    .nav-drawer .cta:active { background: linear-gradient(135deg, #d8f5ff, #a0e5ff); color: #050e17; }

    /* ── オーバーレイ ── */
    .nav-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 98;
      background: rgba(0,0,0,0.45);
      backdrop-filter: blur(2px);
    }
    .nav-overlay.open { display: block; }
  `;

  // スタイルを挿入
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  // ヘッダーHTMLを挿入
  const target = document.getElementById("site-header");
  if (target) {
    target.outerHTML = HTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", HTML);
  }
  // ハンバーガーメニュー制御
  (() => {
    const burger = document.getElementById("nav-burger");
    const drawer = document.getElementById("nav-drawer");
    const overlay = document.getElementById("nav-overlay");
    if (!burger || !drawer || !overlay) return;

    function openMenu() {
      burger.classList.add("open");
      drawer.classList.add("open");
      overlay.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      burger.classList.remove("open");
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    burger.addEventListener("click", () => {
      burger.classList.contains("open") ? closeMenu() : openMenu();
    });
    overlay.addEventListener("click", closeMenu);
    drawer
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", closeMenu));
  })();
})();
