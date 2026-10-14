(function () {
  const main = document.getElementById('contenido');
  const nav = document.getElementById('nav-fases');
  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const estudiantesBtn = document.getElementById('estudiantes-btn');
  const estudiantesSection = document.getElementById('estudiantes');
  const estudiantesGrid = document.getElementById('estudiantes-grid');

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

  // Lógica para sección de estudiantes
  estudiantesBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!estudiantesSection) return;
    if (estudiantesSection.style.display === 'none') {
      estudiantesSection.style.display = 'block';
      renderEstudiantes();
    }
    estudiantesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function renderEstudiantes() {
    const estudiantes = [
      { nombre: 'Renata Carrillo', url: 'https://kreicsf.my.canva.site/caja-de-herramientas-ren/' },
      { nombre: 'Camila Tapia', url: 'https://www.figma.com/proto/HCYz4gJXGmkVFjFA6yjQcU/Caja-de-herramientas?node-id=1-2&viewport=110%2C-4%2C0.49&t=9sKP02r4pZyIGQjo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1' },
      { nombre: 'Fernanda Padilla', url: 'https://micajadeherramientasferpony.my.canva.site/' }
    ];

    let html = '';
    estudiantes.forEach((est, i) => {
      html += `
        <div class="tarjeta" style="border-color: #9933cc;">
          <div class="tarjeta-accent" style="background: #9933cc;"></div>
          <h3>${est.nombre}</h3>
          <p style="margin-top: 0.5rem;">
            <a href="${est.url}" target="_blank" rel="noopener" style="color: #9933cc; text-decoration: underline;">Visitar sitio</a>
          </p>
        </div>
      `;
    });

    estudiantesGrid.innerHTML = html;
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
