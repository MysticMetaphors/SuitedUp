import { useEffect } from "react";

export default function animateUp() {
    useEffect(() => {
        const elements = document.querySelectorAll('.hidden-up');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const el = entry.target;
                    if (entry.isIntersecting && el.classList.contains('hidden-up')) {
                        el.classList.add('reveal-up');
                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return
}