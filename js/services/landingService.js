import { BASE_PATH } from "../config.js";

export async function getLandingData() {
    try {
        const response = await fetch(`${BASE_PATH}/data/landing.json`);

        if (!response.ok) {
            throw new Error("Error al cargar landing");
        }

        return await response.json();

    } catch (error) {
        console.error("Error cargando landing:", error);
        return null;
    }
}