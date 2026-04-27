export async function getLandingData() {
    try {
        const res = await fetch("../data/landing.json");
        return await res.json();
    } catch (error) {
        console.error("Error cargando landing:", error);
        return null;
    }
}