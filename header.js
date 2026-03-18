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
    <nav class="nav">
      <a href="index.html">Top</a>
      <a href="product.html">Products</a>
      <a href="about.html">About</a>
      <a href="#contact" class="cta">お問い合わせ</a>
    </nav>
  </div>
</header>`;

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
    @media (max-width: 860px) {
      .nav { display: none; }
      .bar__in { height: 64px; }
    }
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
})();
