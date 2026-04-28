import { getServices } from "./services/services.js";
import { renderServices } from "./ui/renderServices.js";
import { addServiceEvents } from "./ui/serviceEvents.js";

import { getLandingData } from "./services/landingService.js";
import { renderLanding } from "./ui/renderLanding.js";

import { initSmoothScroll, initStickyHeader } from "./ui/scroll.js";

async function init() {

    const page = document.body.dataset.page;

    // 🟢 APP
    if (page === "app") {
        const services = await getServices();
        renderServices(services);
        addServiceEvents();
    }

    // 🔵 LANDING
    if (page === "landing") {
        const data = await getLandingData();
        if (data) renderLanding(data);
    }

    // 🌐 GLOBAL
    initSmoothScroll();
    initStickyHeader();
}

init();