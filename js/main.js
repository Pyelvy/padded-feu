// =========================================================
// Padded — shared site behavior
// Features: mobile nav toggle, dynamic greeting + live clock,
// shared listing-card renderer used by home + listings pages.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initDynamicGreeting();
  initLiveClock();
  renderFeatured();
  initGalleryDelegation();
});

/* ---- Feature 1: mobile menu toggle -------------------- */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is tapped (mobile UX nicety)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Feature 2: dynamic greeting based on time of day -- */
function initDynamicGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;
  const hour = new Date().getHours();
  let greeting = 'Good evening, house hunter';
  if (hour < 12) greeting = 'Good morning, house hunter';
  else if (hour < 18) greeting = 'Good afternoon, house hunter';
  el.textContent = greeting;
}

/* ---- Feature 3 (bonus): live Manila-time clock in stats/footer -- */
function initLiveClock() {
  const statTime = document.getElementById('statTime');
  const footerTime = document.getElementById('footerTime');
  if (!statTime && !footerTime) return;

  function tick() {
    const now = new Date();
    const formatted = now.toLocaleTimeString('en-PH', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
    if (statTime) statTime.textContent = formatted;
    if (footerTime) footerTime.textContent = `Page loaded ${now.toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---- Shared: build one listing card ------------------- */
function buildCardHTML(listing) {

  const chips = listing.amenities
    .map(a => `<span class="chip">${a}</span>`)
    .join('');

  const image = listing.images
    ? listing.images[0]
    : `assets/thumbs/${listing.id}.svg`;

  return `
    <article class="card">

      <div class="card__thumb" style="background:${listing.color || '#8C2F39'};position:relative;">

        ${listing.new ? '<span class="badge-new">New</span>' : ''}

        <img
          src="${image}"
          alt="${listing.name}"
          class="listing-photo">

      </div>

      <div class="card__body">

        <div class="card__top">

          <div>
            <div class="card__title">${listing.name}</div>
            <div class="card__street">${listing.street}</div>
          </div>

          <span class="fare-tag">
            ₱${listing.price.toLocaleString()}/mo
          </span>

        </div>

        <div class="chip-row">

          <span class="chip chip--route">
            ${listing.walk} min to FEU
          </span>

          <span class="chip">${listing.type}</span>

          <span class="chip">${listing.gender}</span>

          ${chips}

        </div>

        <div class="card__foot">

          <span class="tally">
            ID #${listing.id.slice(0,6).toUpperCase()}
          </span>

          <a href="details.html?id=${listing.id}">
            View Details →
          </a>

        </div>

      </div>

    </article>
  `;
}

/* ---- Home page: render featured (top 4 by walk time) -- */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid || typeof LISTINGS === 'undefined') return;
  const featured = [...LISTINGS].sort((a, b) => a.walk - b.walk).slice(0, 4);
  grid.innerHTML = featured.map(buildCardHTML).join('');
}

/* ---- Feature: photo gallery modal on card click -------- */
function getGalleryPhotos(listing) {
  return [
    { src: `assets/thumbs/${listing.id}.svg`, label: 'Exterior' },
    { src: `assets/thumbs/${listing.id}-room.svg`, label: 'Room' },
    { src: `assets/thumbs/${listing.id}-bath.svg`, label: 'CR / Bathroom' },
    { src: `assets/thumbs/${listing.id}-common.svg`, label: 'Common area' }
  ];
}

let galleryPhotos = [];
let galleryIndex = 0;

function openGallery(listing) {
  galleryPhotos = getGalleryPhotos(listing);
  galleryIndex = 0;

  let overlay = document.getElementById('galleryOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'galleryOverlay';
    overlay.className = 'gallery-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeGallery();
    });
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') stepGallery(1);
      if (e.key === 'ArrowLeft') stepGallery(-1);
    });
  }

  overlay.innerHTML = `
    <div class="gallery-modal" role="dialog" aria-modal="true" aria-label="Photos of ${listing.name}">
      <button class="gallery-close" aria-label="Close gallery">✕</button>
      <div class="gallery-main" style="background:${listing.color};">
        <button class="gallery-nav gallery-nav--prev" aria-label="Previous photo">←</button>
        <img id="galleryMainImg" src="" alt="">
        <button class="gallery-nav gallery-nav--next" aria-label="Next photo">→</button>
        <span id="galleryCaption" class="gallery-caption"></span>
      </div>
      <div class="gallery-thumbs" id="galleryThumbs"></div>
      <div class="gallery-info">
        <div>
          <div class="card__title">${listing.name}</div>
          <div class="card__street">${listing.street}</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="fare-tag">₱${listing.price.toLocaleString()}/mo</span>
          <a class="btn btn--primary" href="contact.html?listing=${encodeURIComponent(listing.name)}">Inquire →</a>
        </div>
      </div>
    </div>
  `;

  overlay.querySelector('.gallery-close').addEventListener('click', closeGallery);
  overlay.querySelector('.gallery-nav--prev').addEventListener('click', () => stepGallery(-1));
  overlay.querySelector('.gallery-nav--next').addEventListener('click', () => stepGallery(1));

  renderGalleryThumbs();
  updateGalleryImage();

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function renderGalleryThumbs() {
  const thumbs = document.getElementById('galleryThumbs');
  if (!thumbs) return;
  thumbs.innerHTML = galleryPhotos.map((p, i) =>
    `<button class="gallery-thumb${i === galleryIndex ? ' is-active' : ''}" data-i="${i}" aria-label="Show photo: ${p.label}"><img src="${p.src}" alt="${p.label}"></button>`
  ).join('');
  thumbs.querySelectorAll('.gallery-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      galleryIndex = parseInt(btn.dataset.i, 10);
      updateGalleryImage();
    });
  });
}

function updateGalleryImage() {
  const img = document.getElementById('galleryMainImg');
  const caption = document.getElementById('galleryCaption');
  const photo = galleryPhotos[galleryIndex];
  if (!img || !photo) return;
  img.src = photo.src;
  img.alt = photo.label;
  if (caption) caption.textContent = `${photo.label} — ${galleryIndex + 1} / ${galleryPhotos.length}`;
  document.querySelectorAll('.gallery-thumb').forEach((btn, i) => {
    btn.classList.toggle('is-active', i === galleryIndex);
  });
}

function stepGallery(dir) {
  galleryIndex = (galleryIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  updateGalleryImage();
}

function closeGallery() {
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* ---- Wire up gallery clicks on any listing grid -------- */
function initGalleryDelegation() {
  ['featuredGrid', 'listingGrid'].forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // let the Inquire link navigate normally
      const card = e.target.closest('.card');
      if (!card || !grid.contains(card)) return;
      const listing = LISTINGS.find(l => l.id === card.dataset.id);
      if (listing) openGallery(listing);
    });
    grid.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.card');
      if (!card || !grid.contains(card)) return;
      e.preventDefault();
      const listing = LISTINGS.find(l => l.id === card.dataset.id);
      if (listing) openGallery(listing);
    });
  });
}
