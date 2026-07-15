// =========================================================
// Padded — listings.html interactivity
// Feature: live search + filter (type, budget, gender)
// with URL query params read from the homepage search box.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof LISTINGS === 'undefined') return;

  const grid = document.getElementById('listingGrid');
  const emptyState = document.getElementById('emptyState');
  const tally = document.getElementById('resultsTally');
  const qInput = document.getElementById('q');
  const typeSelect = document.getElementById('type');
  const budgetSelect = document.getElementById('budget');
  const genderButtons = document.querySelectorAll('#genderFilters .filter-btn');
  const clearBtn = document.getElementById('clearFilters');

  let activeGender = 'all';

  // Pre-fill from URL params (e.g. coming from the homepage search)
  const params = new URLSearchParams(window.location.search);
  if (params.get('q')) qInput.value = params.get('q');
  if (params.get('type')) typeSelect.value = params.get('type');
  if (params.get('budget')) budgetSelect.value = params.get('budget');

  function applyFilters() {
    const q = qInput.value.trim().toLowerCase();
    const type = typeSelect.value;
    const budget = budgetSelect.value ? parseInt(budgetSelect.value, 10) : null;

    const results = LISTINGS.filter(l => {
      const matchesQuery = !q ||
        l.name.toLowerCase().includes(q) ||
        l.street.toLowerCase().includes(q);
      const matchesType = !type || l.type === type;
      const matchesBudget = !budget || l.price <= budget;
      const matchesGender = activeGender === 'all' || l.gender === activeGender;
      return matchesQuery && matchesType && matchesBudget && matchesGender;
    });

    grid.innerHTML = results.map(buildCardHTML).join('');
    tally.textContent = `Showing ${results.length} of ${LISTINGS.length} listings`;
    emptyState.style.display = results.length === 0 ? 'block' : 'none';
    grid.style.display = results.length === 0 ? 'none' : 'grid';
  }

  [qInput, typeSelect, budgetSelect].forEach(el => {
    el.addEventListener('input', applyFilters);
    el.addEventListener('change', applyFilters);
  });

  genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      genderButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeGender = btn.dataset.gender;
      applyFilters();
    });
  });

  clearBtn.addEventListener('click', () => {
    qInput.value = '';
    typeSelect.value = '';
    budgetSelect.value = '';
    activeGender = 'all';
    genderButtons.forEach(b => b.classList.remove('is-active'));
    document.querySelector('#genderFilters [data-gender="all"]').classList.add('is-active');
    applyFilters();
  });

  // Prevent the (visual-only) form from navigating away
  document.getElementById('listingSearch').addEventListener('submit', e => e.preventDefault());

  applyFilters();
});
