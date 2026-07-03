// TasteRadar — script.js

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    //  FOOD DATABASE
    // ============================================================
    const foods = [
        // ---- SOUTH INDIA ----
        {
            id: 'karimeen',
            name: 'Karimeen Pollichathu',
            country: 'India', state: 'Kerala', region: 'South',
            location: 'Alleppey, Kerala',
            desc: 'Pearl Spot fish coated in spicy Kerala masala, wrapped in banana leaves and slow-pan-fried to smoky perfection.',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&fit=crop',
            tags: ['Spicy', 'Seafood']
        },
        {
            id: 'puttu',
            name: 'Puttu & Kadala Curry',
            country: 'India', state: 'Kerala', region: 'South',
            location: 'Kochi, Kerala',
            desc: 'Steamed rice-and-coconut cylinders served with earthy black chickpea curry — the ultimate Kerala morning ritual.',
            image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&fit=crop',
            tags: ['Savory']
        },
        {
            id: 'malabar_parotta',
            name: 'Malabar Parotta & Beef Fry',
            country: 'India', state: 'Kerala', region: 'South',
            location: 'Kozhikode, Kerala',
            desc: 'Flaky, layered wheat flatbread paired with slow-roasted spice-crusted beef — a Malabar street staple.',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&fit=crop',
            tags: ['Savory', 'Meat']
        },
        {
            id: 'sadhya',
            name: 'Kerala Sadya',
            country: 'India', state: 'Kerala', region: 'South',
            location: 'Thrissur, Kerala',
            desc: 'Grand vegetarian feast of 20+ dishes served on a banana leaf — the centerpiece of Onam celebrations.',
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&fit=crop',
            tags: ['Savory']
        },
        {
            id: 'masala_dosa',
            name: 'Masala Dosa',
            country: 'India', state: 'Tamil Nadu', region: 'South',
            location: 'Chennai, Tamil Nadu',
            desc: 'Giant crispy fermented rice crepe stuffed with spiced potato masala, served with sambar and coconut chutney.',
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&fit=crop',
            tags: ['Savory', 'Street Food']
        },
        {
            id: 'chettinad',
            name: 'Chettinad Chicken Curry',
            country: 'India', state: 'Tamil Nadu', region: 'South',
            location: 'Karaikudi, Tamil Nadu',
            desc: 'India\'s most fiery chicken curry, slow-cooked with 20+ freshly-ground spices including kalpasi and marathi mokku.',
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&fit=crop',
            tags: ['Spicy', 'Meat']
        },
        {
            id: 'hyderabadi',
            name: 'Hyderabadi Dum Biryani',
            country: 'India', state: 'Telangana', region: 'South',
            location: 'Hyderabad, Telangana',
            desc: 'Saffron-scented basmati rice layered with marinated meat and sealed ("dum") in a clay pot over slow fire.',
            image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&fit=crop',
            tags: ['Spicy', 'Meat']
        },
        {
            id: 'mysore_pak',
            name: 'Mysore Pak',
            country: 'India', state: 'Karnataka', region: 'South',
            location: 'Mysuru, Karnataka',
            desc: 'Dense, ghee-drenched chickpea-flour fudge with a golden crunch — the crown jewel of Karnataka sweets.',
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&fit=crop',
            tags: ['Sweet']
        },

        // ---- NORTH INDIA ----
        {
            id: 'butter_chicken',
            name: 'Butter Chicken (Murgh Makhani)',
            country: 'India', state: 'Punjab', region: 'North',
            location: 'Amritsar, Punjab',
            desc: 'Tandoor-charred chicken simmered in a silky tomato-butter gravy — the dish that won the world\'s heart.',
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&fit=crop',
            tags: ['Savory', 'Meat']
        },
        {
            id: 'chole_bhature',
            name: 'Chole Bhature',
            country: 'India', state: 'Delhi', region: 'North',
            location: 'Old Delhi, Delhi',
            desc: 'Spiced black chickpea curry paired with billowing deep-fried leavened bread — Delhi\'s glorious brunch.',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&fit=crop',
            tags: ['Spicy', 'Street Food']
        },
        {
            id: 'rogan_josh',
            name: 'Kashmiri Rogan Josh',
            country: 'India', state: 'Kashmir', region: 'North',
            location: 'Srinagar, Jammu & Kashmir',
            desc: 'Slow-cooked tender lamb in vivid Kashmiri red chilli and fennel gravy — a Mughal legacy in the valley.',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
            tags: ['Spicy', 'Meat']
        },
        {
            id: 'jalebi',
            name: 'Varanasi Jalebi & Rabri',
            country: 'India', state: 'Uttar Pradesh', region: 'North',
            location: 'Varanasi, Uttar Pradesh',
            desc: 'Batter piped into spirals, deep-fried crisp, drenched in saffron syrup and drowned in thick clotted cream.',
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&fit=crop',
            tags: ['Sweet', 'Street Food']
        },
        {
            id: 'lassi',
            name: 'Amritsari Lassi',
            country: 'India', state: 'Punjab', region: 'North',
            location: 'Amritsar, Punjab',
            desc: 'Thick, full-fat yoghurt blended and poured into a clay tumbler, crowned with a cap of golden malai.',
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&fit=crop',
            tags: ['Sweet']
        },
        {
            id: 'dal_makhani',
            name: 'Dal Makhani',
            country: 'India', state: 'Punjab', region: 'North',
            location: 'Ludhiana, Punjab',
            desc: 'Black lentils and kidney beans simmered overnight on a slow flame with cream, butter, and tomatoes.',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&fit=crop',
            tags: ['Savory']
        },

        // ---- WEST INDIA ----
        {
            id: 'vada_pav',
            name: 'Vada Pav',
            country: 'India', state: 'Maharashtra', region: 'West',
            location: 'Mumbai, Maharashtra',
            desc: 'India\'s greatest street food — a spiced potato fritter tucked in a soft bun with fiery garlic chutney.',
            image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&fit=crop',
            tags: ['Savory', 'Street Food']
        },
        {
            id: 'pav_bhaji',
            name: 'Pav Bhaji',
            country: 'India', state: 'Maharashtra', region: 'West',
            location: 'Mumbai, Maharashtra',
            desc: 'Buttery mashed vegetable curry cooked on a massive iron griddle, served with toasted butter pav.',
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&fit=crop',
            tags: ['Savory', 'Street Food']
        },
        {
            id: 'dhokla',
            name: 'Khaman Dhokla',
            country: 'India', state: 'Gujarat', region: 'West',
            location: 'Ahmedabad, Gujarat',
            desc: 'Light, fluffy steamed chickpea-flour cake tempered with mustard seeds, curry leaves, and green chillies.',
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&fit=crop',
            tags: ['Savory']
        },
        {
            id: 'dal_baati',
            name: 'Dal Baati Churma',
            country: 'India', state: 'Rajasthan', region: 'West',
            location: 'Jaipur, Rajasthan',
            desc: 'Ghee-dipped wheat balls (baati) served with spicy five-lentil dal and crumbled sweet wheat churma.',
            image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&fit=crop',
            tags: ['Savory', 'Sweet']
        },
        {
            id: 'goan_fish',
            name: 'Goan Fish Curry',
            country: 'India', state: 'Goa', region: 'West',
            location: 'Panaji, Goa',
            desc: 'Sun-red coconut curry soured with kokum and tangy tamarind, poured over fresh catch from the Arabian Sea.',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&fit=crop',
            tags: ['Spicy', 'Seafood']
        },

        // ---- EAST INDIA ----
        {
            id: 'litti_chokha',
            name: 'Litti Chokha',
            country: 'India', state: 'Bihar', region: 'East',
            location: 'Patna, Bihar',
            desc: 'Baked wheat balls stuffed with roasted sattu, served with smoky mashed eggplant and tomato chokha.',
            image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&fit=crop',
            tags: ['Savory']
        },
        {
            id: 'rosogolla',
            name: 'Bengali Rosogolla',
            country: 'India', state: 'West Bengal', region: 'East',
            location: 'Kolkata, West Bengal',
            desc: 'Impossibly spongy fresh paneer dumplings cooked in gossamer rosewater-sugar syrup since 1868.',
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&fit=crop',
            tags: ['Sweet']
        },
        {
            id: 'machher_jhol',
            name: 'Machher Jhol',
            country: 'India', state: 'West Bengal', region: 'East',
            location: 'Kolkata, West Bengal',
            desc: 'Bengali comfort food — tender hilsa or rohu fish simmered in a light mustard and turmeric broth.',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&fit=crop',
            tags: ['Savory', 'Seafood']
        },

        // ---- INTERNATIONAL ----
        {
            id: 'sushi',
            name: 'Edo Nigiri Sushi',
            country: 'Japan', state: 'Tokyo', region: 'International',
            location: 'Tokyo, Japan',
            desc: 'Hand-pressed vinegared rice topped with ultra-fresh fish — the elegant simplicity of Edo-period Tokyo.',
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&fit=crop',
            tags: ['Savory', 'Seafood']
        },
        {
            id: 'carbonara',
            name: 'Spaghetti alla Carbonara',
            country: 'Italy', state: 'Lazio', region: 'International',
            location: 'Rome, Italy',
            desc: 'Silky egg-and-pecorino sauce coating spaghetti with crispy guanciale — Rome\'s five-ingredient miracle.',
            image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&fit=crop',
            tags: ['Savory', 'Meat']
        },
        {
            id: 'brisket',
            name: 'Texas Smoked Brisket',
            country: 'USA', state: 'Texas', region: 'International',
            location: 'Austin, Texas',
            desc: 'Mesquite-smoked beef brisket with a mahogany bark crust — 14 hours of patience on a steel offset smoker.',
            image: 'https://images.unsplash.com/photo-1544025162-d76538485696?w=600&fit=crop',
            tags: ['Savory', 'Meat']
        }
    ];

    // ============================================================
    //  STATE
    // ============================================================
    let activeRegion   = 'All';   // bottom-tab region filter
    let activeTabCat   = 'All';   // bottom-tab category filter
    let activeChipCat  = 'All';   // left-panel chip filter
    let query          = '';
    let selectedId     = null;

    // ============================================================
    //  DOM REFS
    // ============================================================
    const searchInput    = document.getElementById('searchInput');
    const dishList       = document.getElementById('dishList');
    const resultsLabel   = document.getElementById('resultsLabel');
    const chipsEl        = document.getElementById('chips');
    const tabButtons     = document.querySelectorAll('.tab');
    const quickTags      = document.querySelectorAll('.quick-tag');

    // ============================================================
    //  GLITTER GENERATOR
    // ============================================================
    const wrap = document.createElement('div');
    wrap.className = 'glitter-wrap';
    document.body.prepend(wrap);

    const colors = ['#00ffd2','#ff003c','#ffffff','#ffe600','#a78bfa','#00ff66'];
    for (let i = 0; i < 45; i++) {
        const g = document.createElement('div');
        g.className = 'glitter';
        g.style.left    = `${Math.random() * 100}%`;
        g.style.setProperty('--size',  `${1 + Math.random() * 3}px`);
        g.style.setProperty('--color', colors[i % colors.length]);
        g.style.setProperty('--speed', `${9 + Math.random() * 15}s`);
        g.style.setProperty('--delay', `${-(Math.random() * 20)}s`);
        g.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
        wrap.appendChild(g);
    }

    // ============================================================
    //  FILTER & RENDER
    // ============================================================
    const render = () => {
        const q = query.toLowerCase();

        const filtered = foods.filter(f => {
            const matchRegion  = activeRegion === 'All'  || f.region === activeRegion;
            const matchTabCat  = activeTabCat === 'All'  || f.tags.includes(activeTabCat);
            const matchChipCat = activeChipCat === 'All' || f.tags.includes(activeChipCat);
            const matchQuery   = !q || [f.name, f.country, f.state, f.location, f.desc]
                .some(s => s.toLowerCase().includes(q));
            return matchRegion && matchTabCat && matchChipCat && matchQuery;
        });

        resultsLabel.textContent = filtered.length
            ? `Showing ${filtered.length} local delicac${filtered.length === 1 ? 'y' : 'ies'}`
            : 'No results found';

        dishList.innerHTML = '';

        if (!filtered.length) {
            dishList.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🍽️</span>
                    <p>No dishes match your filters.<br>Try a different search or category.</p>
                </div>`;
            return;
        }

        filtered.forEach(f => {
            const card = document.createElement('article');
            card.className = `dish-card${f.id === selectedId ? ' active' : ''}`;
            card.id = `card-${f.id}`;
            card.innerHTML = `
                <div class="card-img-wrap">
                    <img class="card-img" src="${f.image}" alt="${f.name}" loading="lazy">
                </div>
                <div class="card-body">
                    <h3 class="card-name">${f.name}</h3>
                    <span class="card-location">📍 ${f.location}</span>
                    <p class="card-desc">${f.desc}</p>
                    <div class="card-tags">
                        ${f.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
                    </div>
                </div>`;
            card.addEventListener('click', () => {
                selectedId = f.id;
                document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
            dishList.appendChild(card);
        });
    };

    // ============================================================
    //  EVENT LISTENERS
    // ============================================================

    // Search input
    searchInput.addEventListener('input', e => {
        query = e.target.value;
        render();
    });

    // Quick-tag buttons
    quickTags.forEach(btn => {
        btn.addEventListener('click', () => {
            searchInput.value = btn.dataset.search;
            query = btn.dataset.search;
            render();
        });
    });

    // Category chips (inside search section)
    chipsEl.addEventListener('click', e => {
        const btn = e.target.closest('.chip');
        if (!btn) return;
        chipsEl.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        activeChipCat = btn.dataset.cat;
        render();
    });

    // Bottom tab buttons
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Reset both filters first
            activeRegion = 'All';
            activeTabCat = 'All';
            if (btn.dataset.region) activeRegion = btn.dataset.region;
            if (btn.dataset.cat)    activeTabCat  = btn.dataset.cat;
            render();
        });
    });

    // ============================================================
    //  INITIAL RENDER
    // ============================================================
    render();
});
