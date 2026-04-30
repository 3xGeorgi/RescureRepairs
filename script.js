let textState = 0;

function cycleTextSize() {
    const root = document.documentElement;

    textState = (textState + 1) % 4;

    if (textState === 0) root.style.setProperty('--text-size', '1rem');
    if (textState === 1) root.style.setProperty('--text-size', '1.5rem');
    if (textState === 2) root.style.setProperty('--text-size', '2rem');
    if (textState === 3) root.style.setProperty('--text-size', '0.75rem');
}

let lineToggle = false;

function toggleLineSpacing() {
    lineToggle = !lineToggle;
    document.documentElement.style.setProperty('--spacing', lineToggle ? '2.2' : '1.4');
}

let dark = false;

function toggleDarkMode() {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
}

let cb1 = false;
let cb2 = false;

function colourBlindMode1() {
    document.body.classList.remove('cb2');
    cb2 = false;

    cb1 = !cb1;
    document.body.classList.toggle('cb1', cb1);
}

function colourBlindMode2() {
    document.body.classList.remove('cb1');
    cb1 = false;

    cb2 = !cb2;
    document.body.classList.toggle('cb2', cb2);
}

/* SETTINGS PANEL */
function toggleSettings() {
    const panel = document.getElementById("settingsPanel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}
