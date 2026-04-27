export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

export function initStickyHeader() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}