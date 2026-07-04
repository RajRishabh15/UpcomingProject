// TasteRadar — script.js

import { initPixelBlast } from './pixelblast.js';

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    //  DOM REFS
    // ============================================================
    const tabButtons = document.querySelectorAll('.tab');

    // ============================================================
    //  PIXELBLAST BACKGROUND
    // ============================================================
    const bgContainer = document.getElementById('pixelblast-bg');
    if (bgContainer) {
        initPixelBlast(bgContainer, {
            variant: "square",
            pixelSize: 4,
            color: "#B497CF",
            patternScale: 2,
            patternDensity: 1.5,
            pixelSizeJitter: 0,
            enableRipples: true,
            rippleSpeed: 0.4,
            rippleThickness: 0.12,
            rippleIntensityScale: 1.5,
            liquid: false,
            liquidStrength: 0.12,
            liquidRadius: 1.2,
            liquidWobbleSpeed: 5,
            speed: 0.5,
            edgeFade: 0.25,
            transparent: true
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
    });

    if (tabBar) {
        tabBar.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;

            tabButtons.forEach(tab => {
                const rect = tab.getBoundingClientRect();
                const tabCenterX = rect.left + rect.width / 2;
                const diffX = Math.abs(mouseX - tabCenterX);

                let size = baseItemSize;
                if (diffX < distance) {
                    // Smooth scaling curve based on distance
                    const progress = 1 - (diffX / distance);
                    size = baseItemSize + (maxItemSize - baseItemSize) * Math.sin(progress * Math.PI / 2);
                }

                tab.style.width = `${size}px`;
                tab.style.height = `${size}px`;

                const svg = tab.querySelector('svg');
                if (svg) {
                    const iconScale = size / baseItemSize;
                    svg.style.width = `${24 * iconScale}px`;
                    svg.style.height = `${24 * iconScale}px`;
                }
            });
        });

        tabBar.addEventListener('mouseleave', () => {
            tabButtons.forEach(tab => {
                tab.style.width = `${baseItemSize}px`;
                tab.style.height = `${baseItemSize}px`;

                const svg = tab.querySelector('svg');
                if (svg) {
                    svg.style.width = `24px`;
                    svg.style.height = `24px`;
                }
            });
        });
    }
});
