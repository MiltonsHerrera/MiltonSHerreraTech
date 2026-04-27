document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
        const details = card.querySelector(".details");

        // cerrar otros
        document.querySelectorAll(".details").forEach(d => {
            if (d !== details) d.style.display = "none";
        });

        // toggle actual
        details.style.display =
            details.style.display === "block" ? "none" : "block";
    });
});