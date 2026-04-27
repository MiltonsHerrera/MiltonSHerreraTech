import { BASE_PATH } from "../config.js";

export async function getServices() {
    try {
        const response = await fetch(`${BASE_PATH}/data/services.json`);

        if (!response.ok) {
            throw new Error("Error al cargar servicios");
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return [];
    }
}