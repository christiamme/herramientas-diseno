(function () {
  const main = document.getElementById('contenido');
  const nav = document.getElementById('nav-fases');
  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function renderFases() {
    let html = '';
    fases.forEach(f => {
      html += `
        <section class="fase" id="fase-${f.id}" style="border-left: 4px solid ${f.color}; padding-left: 1.2rem;">
          <div class="fase-header">
            <span class="fase-num" style="background: ${f.color};">${f.id}</span>
            <h2 class="fase-titulo">${f.titulo}</h2>
          </div>
          <p class="fase-desc">${f.descripcion}</p>
          <div class="grid-herramientas">
            ${f.herramientas.map(h => `
              <div class="tarjeta" data-fase-id="${f.id}" data-herramienta="${h.nombre}">
                <div class="tarjeta-accent" style="background: ${f.color};"></div>
                <h3>${h.nombre}</h3>
                <p>${h.descripcion.substring(0, 120)}${h.descripcion.length > 120 ? '...' : ''}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    });
    main.innerHTML = html;
  }

  function renderNav() {
    fases.forEach(f => {
      const a = document.createElement('a');
      a.href = `#fase-${f.id}`;
      a.textContent = f.titulo;
      nav.appendChild(a);
    });
  }

  function findHerramienta(faseId, nombre) {
    const fase = fases.find(f => f.id === faseId);
    if (!fase) return null;
    return fase.herramientas.find(h => h.nombre === nombre);
  }

  function openModal(faseId, nombre) {
    const fase = fases.find(f => f.id === faseId);
    const h = findHerramienta(faseId, nombre);
    if (!fase || !h) return;

    modalBody.innerHTML = `
      <div class="modal-accent" style="background: ${fase.color};"></div>
      <span class="modal-fase-label" style="color: ${fase.color};">${fase.titulo}</span>
      <h2>${h.nombre}</h2>
      <h3>Descripción</h3>
      <p>${h.descripcion}</p>
      <h3>Propósito principal</h3>
      <p>${h.proposito}</p>
      <h3>Contexto de uso</h3>
      <p>${h.contexto}</p>
    `;
    overlay.classList.remove('hidden');
  }

  function closeModal() {
    overlay.classList.add('hidden');
  }

  main.addEventListener('click', function (e) {
    const tarjeta = e.target.closest('.tarjeta');
    if (!tarjeta) return;
    const faseId = parseInt(tarjeta.dataset.faseId, 10);
    const nombre = tarjeta.dataset.herramienta;
    openModal(faseId, nombre);
  });

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  renderNav();
  renderFases();
})();
