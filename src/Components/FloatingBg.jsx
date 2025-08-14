import React, { useEffect, useRef } from "react";

export default function FloatingBg({
    count = 6,
    children,
    colors = [
        ["#ff3b30", "#ff9500"], // Red to orange
        ["#34c759", "#00c7be"], // Green to teal
        ["#007aff", "#5ac8fa"], // Blue to light blue
        ["#af52de", "#ff2d55"], // Purple to pink
        ["#ffcc00", "#ff9500"], // Yellow to orange
    ], }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        function createCircle() {
            const circle = document.createElement("div");
            circle.classList.add("circle");

            const size = Math.floor(Math.random() * 200);
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;

            circle.style.top = `${Math.random() * 100}%`;
            circle.style.left = `${Math.random() * 100}%`;

            const color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.background = `radial-gradient(circle at center, ${color[0]}, transparent 70%)`;

            const maxLeft = containerWidth - size;
            const maxTop = containerHeight - size;
            circle.style.left = `${Math.random() * maxLeft}px`;
            circle.style.top = `${Math.random() * maxTop}px`;

            const tx = `${Math.random() * 400 - 200}px`;
            const ty = `${Math.random() * 400 - 200}px`;
            circle.style.setProperty("--tx", tx);
            circle.style.setProperty("--ty", ty);

            const duration = `${Math.random() * 10 + 10}s`;
            circle.style.setProperty("--duration", duration);

            container.appendChild(circle);
        }

        for (let i = 0; i < count; i++) {
            createCircle();
        }
    }, [count, colors]);

    return (
        <div className="floating-bg" ref={containerRef}>
            {children}
        </div>)
}

