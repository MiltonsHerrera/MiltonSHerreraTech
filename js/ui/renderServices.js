export function renderServices(services) {
  const container = document.getElementById("services-container");

  container.innerHTML = services.map(service => `
    <div class="service-card">

      <div class="card-image">
        <img src="${service.image}" alt="${service.title}">
      </div>

      <div class="card-body">
        <h3>${service.title}</h3>

        <p class="description">
          ${service.description}
        </p>

        <div class="meta">
          <span><strong>⏱</strong> ${service.time}</span>
          <span><strong>💰</strong> ${service.price}</span>
        </div>

        <button class="btn toggle-btn">Ver detalles</button>

        <!-- 👇 LISTA DINÁMICA -->
        <div class="details">
  <ul>
    ${service.details.map(item => `
      <li>✔ ${item}</li>
    `).join("")}
  </ul>
</div>

        <button class="btn whatsapp-btn" data-service="${service.title}">
          Solicitar
        </button>

      </div>

    </div>
  `).join("");
}