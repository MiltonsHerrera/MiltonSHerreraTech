export function renderLanding(data) {

    // HERO
    document.getElementById("hero-title").textContent = data.hero.title;
    document.getElementById("hero-subtitle").textContent = data.hero.subtitle;

    const hero = document.getElementById("hero");
    hero.style.backgroundImage = `url(${data.hero.image})`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";

    // SERVICES
    const servicesContainer = document.getElementById("services-container");

    servicesContainer.innerHTML = data.services.map(service => `
    <div class="card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join("");

    // ABOUT
    const about = data.about;

    const text = document.getElementById("about-text");
    const img = document.getElementById("about-image");

    if (text) {
        text.innerHTML = `
    <strong>${about.name}</strong><br>
    <span>${about.title}</span><br><br>
    ${about.description}<br><br>
    📍 ${about.location}<br>
    🛠 ${about.experience}
  `;
    }

    if (img) {
        img.src = about.image;
        img.alt = about.name;
    }

    // CONTACT
    const link = document.getElementById("contact-link");

    const message = encodeURIComponent(data.contact.message);
    link.href = `https://wa.me/${data.contact.phone}?text=${message}`;

    // WHATSAPP FLOAT
    const floatBtn = document.getElementById("whatsapp-float");

    if (floatBtn) {
        const message = encodeURIComponent(data.contact.message);
        floatBtn.href = `https://wa.me/${data.contact.phone}?text=${message}`;
    }
}