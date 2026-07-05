// TasteRadar — script.js

import { initLightfall } from './lightfall.js';

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    //  DOM REFS
    // ============================================================
    const tabButtons = document.querySelectorAll('.tab');

    // ============================================================
    //  LIGHTFALL BACKGROUND
    // ============================================================
    const bgContainer = document.getElementById('lightfall-bg');
    if (bgContainer) {
        initLightfall(bgContainer, {
            colors: ['#A6C8FF', '#5227FF', '#FF9FFC'],
            backgroundColor: "#0A29FF",
            speed: 0.5,
            streakCount: 2,
            streakWidth: 1,
            streakLength: 1,
            glow: 1,
            density: 0.6,
            twinkle: 1,
            zoom: 3,
            backgroundGlow: 0.5,
            opacity: 1,
            mouseInteraction: true,
            mouseStrength: 0.5,
            mouseRadius: 1
        });
    }

    // ============================================================
    //  EVENT LISTENERS
    // ============================================================

    // Bottom tab buttons (visual toggle only)
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ============================================================
    //  MAC OS DOCK ANIMATION
    // ============================================================
    const tabBar = document.querySelector('.tab-bar');
    const baseItemSize = 50;
    const maxItemSize = 75; // Similar to magnification in React example
    const distance = 150;

    // Set up data-tooltip from the span text for tooltip display
    tabButtons.forEach(tab => {
        const span = tab.querySelector('span');
        if (span) {
            tab.setAttribute('data-tooltip', span.textContent);
        }
        tab._currentSize = baseItemSize;
    });

    if (tabBar) {
        let mouseX = null;

        tabBar.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
        });

        tabBar.addEventListener('mouseleave', () => {
            mouseX = null;
        });

        const animate = () => {
            tabButtons.forEach(tab => {
                let targetSize = baseItemSize;

                if (mouseX !== null) {
                    const rect = tab.getBoundingClientRect();
                    const tabCenterX = rect.left + rect.width / 2;
                    const diffX = Math.abs(mouseX - tabCenterX);

                    if (diffX < distance) {
                        // Smooth scaling curve based on distance
                        const progress = 1 - (diffX / distance);
                        targetSize = baseItemSize + (maxItemSize - baseItemSize) * Math.sin(progress * Math.PI / 2);
                    }
                }

                // Lerp towards targetSize
                tab._currentSize += (targetSize - tab._currentSize) * 0.25;

                tab.style.width = `${tab._currentSize}px`;
                tab.style.height = `${tab._currentSize}px`;

                const svg = tab.querySelector('svg');
                if (svg) {
                    const iconScale = tab._currentSize / baseItemSize;
                    svg.style.width = `${20 * iconScale}px`;
                    svg.style.height = `${20 * iconScale}px`;
                }
            });
            requestAnimationFrame(animate);
        };
        
        animate();
    }
});
