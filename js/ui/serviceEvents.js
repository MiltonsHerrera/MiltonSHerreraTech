export function addServiceEvents() {

    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            const card = btn.closest(".service-card");
            const details = card.querySelector(".details");

            details.style.display =
                details.style.display === "block" ? "none" : "block";
        });
    });

  
    document.querySelectorAll(".whatsapp-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); 

            const service = btn.dataset.service;

            const message = `Hola, estoy interesado en el servicio "${service}". ¿Me puedes dar más información?`;
            const phone = "573045666645"; 

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        });
    });

}