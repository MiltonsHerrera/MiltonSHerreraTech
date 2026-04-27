import { getServices } from "./services/services.js";
import { renderServices } from "./ui/renderServices.js";
import { addServiceEvents } from "./ui/serviceEvents.js";

import { getLandingData } from "./services/landingService.js";
import { renderLanding } from "./ui/renderLanding.js";

import { initSmoothScroll } from "./ui/scroll.js";
import { initStickyHeader } from "./ui/scroll.js";

async function init() {

    // 🔍 Detectar APP (app.html)
    const isApp = document.getElementById("services-container");

    if (isApp) {
        const services = await getServices();
        renderServices(services);
        addServiceEvents();
    }

    // 🔍 Detectar LANDING (index.html)
    const isLanding = document.getElementById("hero-title");

    if (isLanding) {
        const data = await getLandingData();
        if (data) renderLanding(data);
    }

    // 🔽 Funciones globales
    initSmoothScroll();
    initStickyHeader();
}

init();