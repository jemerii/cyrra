:root {
    --bg-dark: #000000;
    --glass-bg: rgba(255, 255, 255, 0.03); 
    --glass-border: rgba(255, 255, 255, 0.1);
    --accent: #FFFFFF;
    --text-primary: #FFFFFF;
    --text-secondary: #AAAAAA;
    /* Glow Color */
    --glow-color: rgba(255, 255, 255, 0.05);
}

.wave-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40vh; /* Adjust height of the wave area */
    z-index: -1; /* Place behind cards */
    overflow: hidden;
    pointer-events: none;
}

.waves {
    position: relative;
    width: 100%;
    height: 100%;
}

/* Wave Animation */
.parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% { transform: translate3d(-90px,0,0); }
    100% { transform: translate3d(85px,0,0); }
}

body {
    background-color: var(--bg-dark);
    /* Layered gradients to create a deep "glow" effect */
    background: 
        radial-gradient(circle at 20% 30%, rgba(46, 46, 46, 0.8) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(53, 53, 53, 0.8) 0%, transparent 40%),
        var(--bg-dark);
    color: var(--text-primary);
    font-family: 'DM Mono', monospace;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}

body::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    z-index: -1; /* Sits behind the cards */
    filter: blur(200px);
    animation: pulseGlow 8s infinite alternate;
}

@keyframes pulseGlow {
    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
}

.wrapper {
    display: flex;
    gap: 20px;
    width: 90%;
    max-width: 900px;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: -20px;
}

.side-card, .main-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    padding: 2.5rem;
    border-radius: 24px;
    box-shadow: 
        0 0 50px 0 rgba(255, 255, 255, 0.05),
        inset 0 0 20px 0 rgba(255, 255, 255, 0.02),
        0 20px 50px rgba(0, 0, 0, 0.9);
    /* Ensure a smooth transition for the border color */
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

/* Hover State: Magenta Border and Glow */
.side-card:hover, .main-card:hover {
    transform: translateY(-5px); /* Optional subtle lift */
    border-color: #ff00ff; /* Magenta */
    box-shadow: 
        0 0 60px 0 rgba(255, 0, 255, 0.2), /* Magenta outer glow */
        0 20px 50px rgba(0, 0, 0, 0.9);
}

.side-card {
    flex: 1.2;
    min-width: 310px;
    text-align: center;
    height: 715px;
}

.main-card {
    flex: 1.8;
    min-width: 300px;
    height: 715px;
}

/* Typography */
h1 {
    font-size: 2rem;
    margin: 1rem 0;
}

h2 {
    text-align: center;
    font-size: 1rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
}

/* Bio Section Styling */
.bio {
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    padding: 0 5px;
}

.bio p {
    margin-bottom: 1rem;
    line-height: 20px;
    text-align: justify;
}

/* Image Placeholders */
.image-placeholder {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    text-transform: uppercase;
    width: 140px;
    height: 140px;
}

.profile-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 0 auto;
}

.profile-img popup {
    width: 20px;
    width: 20px;
}

.section-img {
    width: 100%;
    height: 345px;
    margin-bottom: 1rem;
    border-radius: 4px;
}

.hobbies-list {
    margin-bottom: 2rem;
}

.hobbies-list p:hover {
    color: var(--accent);
    cursor: pointer;
}

.hobbies-list p {
    color: #AAAAAA;
}

.content-group {
    margin-bottom: 3rem;
}

span {
    color: var(--accent);
    font-weight: bold;
}

/* Links */
.links {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
    font-weight: bold;
}

.links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 10px;
    transition: 0.2s;
}

.links a:hover {
    color: var(--accent);
}

.note {
    font-weight: bold;
    margin-top: 0;
}

.note a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.7rem;
    transition: 0.2s;
}

.note a:hover {
    color: var(--accent);
}

.modal-overlay {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    flex: 1.2;
    min-width: 310px;
    text-align: center;
}

/* Modal Content Box */
.modal-content {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    padding: 2.5rem;
    border-radius: 24px;
    box-shadow: 
        0 0 50px 0 rgba(255, 255, 255, 0.05),
        inset 0 0 20px 0 rgba(255, 255, 255, 0.02),
        0 20px 50px rgba(0, 0, 0, 0.9);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    animation: glass-emerge 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.modal-content:hover {
    border-color: #ff00ff;
    box-shadow: 
        0 0 60px 0 rgba(255, 0, 255, 0.2), /* Magenta outer glow */
        0 20px 50px rgba(0, 0, 0, 0.9);
}

.modal-closing {
    animation: glass-vanish 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

.overlay-closing {
    opacity: 0;
    transition: opacity 0.3s ease;
}

@keyframes glass-emerge {
    0% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
        backdrop-filter: blur(0px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        backdrop-filter: blur(20px);
    }
}

@keyframes glass-vanish {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
        backdrop-filter: blur(20px);
    }
    100% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
        backdrop-filter: blur(0px);
    }
}

@keyframes modalFade {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.close-button {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: 0.2s;
}

.close-button:hover {
    color: var(--accent);
}

.discord-tag {
    font-family: 'DM Mono', monospace;
    font-size: 1.2rem;
    color: var(--accent);
    background: rgba(255, 255, 255, 0.05);
    padding: 10px;
    border-radius: 8px;
    margin: 15px 0;
    border: 1px solid var(--glass-border);
}

.hobby-link {
    cursor: pointer;
    transition: color 0.3s ease, padding-left 0.3s ease;
    padding: 5px 0;
}

.hobby-link:hover {
    color: #ff00ff; /* Magenta hover */
    padding-left: 10px;
}

#trigger-games, #trigger-mock, #trigger-docs {
    text-decoration: none;
}

.game-img {
    aspect-ratio: 1 / 1;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    width: 140px;
    height: 140px;
}

.games-grid, .software-grid {
    display: flex;
    flex-direction: row; /* Force horizontal alignment */
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin: 20px 0;
    width: 100%;
    flex-wrap: nowrap; /* Prevents stacking unless on very small screens */
}

.game-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100px; /* Fixed width for consistency */
}

.game-img-container {
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin-bottom: 10px;
}

.game-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Ensure the modal content is wide enough for side-by-side icons */
.modal-content {
    max-width: 500px; /* Increased from 350px */
    width: 90%;
}

/* Ensure software grid matches the game grid style */
.software-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
}

.modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(10px);
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

.close-btn {
    position: absolute;
    top: 15px; right: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--text-secondary);
}


@media (max-width: 1024px), (max-height: 800px) {
    html, body {
        width: 100%;
        position: relative;
        overflow-y: scroll; 
        overflow-x: hidden;
        align-items: flex-start; 
        padding: 40px 0;
    }
    
    .wrapper {
        margin-top: 0; 
        flex-direction: column;
    }

    .games-grid {
        grid-template-columns: 1fr; /* Single column for list view */
        gap: 15px;
    }

    .game-item {
        display: flex;
        flex-direction: row; /* Aligns image and text horizontally */
        align-items: center;
        text-align: left;
        width: 100%;
        height: auto; /* Allow height to adjust */
        gap: 15px;
    }

    .game-img-container, .game-img {
        width: 120px; /* Smaller size for side-by-side layout */
        height: 120px;
        margin-bottom: 0; /* Remove bottom margin used in desktop grid */
        margin-left: 20px;
    }

    .side-card, .main-card { 
        width: 100%; 
        box-sizing: border-box; 
    }

    .games-grid { 
        grid-template-columns: 1fr; 
    }

    .game-name {
        display: none;
    }

    .hobbies-img { 
        aspect-ratio: 1 / 1; 
        width: 10px;
    }

    #splash-text {
        font-size: 1rem; 
    }

    #splash-screen{
        position: fixed;
        align-items: left;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .modal-content {
        width: 92%; /* Give a small margin on the sides */
        scale: 80%;
        padding: 1.5rem; /* Reduce padding to save space */
        max-height: 80vh; /* Prevent the popup from being taller than the screen */
        overflow-y: auto; /* Allow internal scrolling if content is long */
    }

    .modal-content h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    /* Adjust grids to fit smaller screens */
    .games-grid, .software-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Two items per row on mobile */
        gap: 10px;
        margin: 15px 0;
    }

    /* Special case: If there are 3 items, make the last one center or stay in grid */
    .games-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .game-item {
        width: 100%; /* Let the grid control the width */
    }

    .game-img-container {
        width: 70px; /* Slightly smaller icons */
        height: 70px;
        margin-bottom: 5px;
    }

    .game-item strong {
        font-size: 0.7rem;
    }

    .close-btn {
        top: 10px;
        right: 15px;
        font-size: 1.2rem;
    }

    .bio {
        font-size: 0.8rem;
        line-height: 1.4;
        text-align: justify;
    }
}
