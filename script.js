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
