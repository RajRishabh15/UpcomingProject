// OnePlus N6 Interactive Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    const notifyBtn = document.getElementById('notifyBtn');

    // Tab click handlers
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active Class in buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Notify Button Event
    if (notifyBtn) {
        notifyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you! We will notify you when pre-orders open.');
        });
    }

    // Dynamic Floating Neon Glitters Background
    const createGlitters = () => {
        const container = document.createElement('div');
        container.className = 'glitter-container';
        document.body.appendChild(container);

        const colors = [
            '#00ffd2', // Neon Cyan
            '#ff003c', // Neon Red
            '#ffffff', // White
            '#ffe600', // Neon Yellow
            '#00ff66'  // Neon Green
        ];

        // Generate 45 randomized floating glitters
        for (let i = 0; i < 45; i++) {
            const dot = document.createElement('div');
            dot.className = 'glitter-dot';
            dot.style.left = `${Math.random() * 100}%`;
            
            // CSS Variables for keyframe animation styling
            dot.style.setProperty('--delay', `${-Math.random() * 20}s`);
            dot.style.setProperty('--speed', `${8 + Math.random() * 14}s`);
            dot.style.setProperty('--size', `${1.5 + Math.random() * 3.5}px`);
            dot.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
            dot.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
            
            container.appendChild(dot);
        }
    };

    createGlitters();
});
