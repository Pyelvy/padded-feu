const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const listing = LISTINGS.find(item => item.id === id);

if (listing) {
    document.getElementById("pageTitle").textContent = `${listing.name} — Padded`;
    document.getElementById("dormName").textContent = listing.name;
    document.getElementById("street").textContent = listing.street;
    document.getElementById("walk").textContent = listing.walk;
    document.getElementById("type").textContent = listing.type;
    document.getElementById("gender").textContent = listing.gender;
    document.getElementById("dormType").textContent = listing.type || "Listing";

    // ---------- Header badges ----------
    const badges = document.getElementById("dormBadges");
    badges.innerHTML = `
        <span class="chip chip--route">${listing.walk} min to FEU</span>
        <span class="chip">${listing.gender}</span>
        <span class="chip">${listing.type}</span>
    `;

    // ---------- Rental Rates ----------
    const price = document.getElementById("price");
    let rateCards = "";

    const rateCard = (label, value) => `
        <div class="rate-card">
            <span class="rate-card__label">${label}</span>
            <span class="rate-card__value">${value}</span>
        </div>`;

    if (listing.rates) {
        if (listing.rates.bare) rateCards += rateCard("Bare Unit", listing.rates.bare);
        if (listing.rates.semi) rateCards += rateCard("Semi-Furnished", listing.rates.semi);
        if (listing.rates.studio) rateCards += rateCard("Studio Unit", listing.rates.studio);
        if (listing.rates.shared) rateCards += rateCard("Shared Unit / Bedspace", listing.rates.shared);
        price.innerHTML = rateCards;
    } else {
        price.innerHTML = rateCard("Monthly Rate", `₱${listing.price.toLocaleString()}/month`);
    }

    // ---------- Images ----------
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (listing.images && listing.images.length) {
        gallery.innerHTML = `
            <div class="detail-gallery__main">
                <img id="mainPhoto" src="${listing.images[0]}" alt="${listing.name} — photo 1">
            </div>
            ${listing.images.length > 1 ? `
            <div class="detail-gallery__thumbs">
                ${listing.images.map((img, i) => `
                    <button class="detail-thumb${i === 0 ? ' is-active' : ''}" data-src="${img}" aria-label="Show photo ${i + 1}">
                        <img src="${img}" alt="${listing.name} — thumbnail ${i + 1}">
                    </button>
                `).join('')}
            </div>` : ''}
        `;

        gallery.querySelectorAll('.detail-thumb').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('mainPhoto').src = btn.dataset.src;
                gallery.querySelectorAll('.detail-thumb').forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
            });
        });
    }

    // ---------- Amenities ----------
    const amenities = document.getElementById("amenities");
    amenities.innerHTML = "";
    listing.amenities.forEach(item => {
        amenities.innerHTML += `<li><span class="amenity-dot"></span>${item}</li>`;
    });

} else {
    document.querySelector('.detail-header').innerHTML = `
        <div>
            <h1 style="color:var(--ink);">Listing not found</h1>
            <p>This dorm may have been removed. <a href="listings.html">Browse all listings →</a></p>
        </div>`;
}
