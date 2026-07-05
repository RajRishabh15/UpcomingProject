// TasteRadar — script.js

import { initPrism } from './prism.js';

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    //  DOM REFS
    // ============================================================
    const tabButtons = document.querySelectorAll('.tab');

    // ============================================================
    //  PRISM BACKGROUND
    // ============================================================
    const bgContainer = document.getElementById('prism-bg');
    if (bgContainer) {
        initPrism(bgContainer, {
            animationType: "rotate",
            timeScale: 0.5,
            height: 3.5,
            baseWidth: 5.5,
            scale: 3.6,
            hueShift: 0,
            colorFrequency: 1,
            noise: 0,
            glow: 1
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
