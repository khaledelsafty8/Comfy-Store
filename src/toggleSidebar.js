import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const clseBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show');
});

clseBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show');
});
