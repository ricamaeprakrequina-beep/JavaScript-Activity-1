const changeNameButton = document.getElementById('changeName');
const changeBackgroundButton = document.getElementById('changeBackground');
const toggleDetailsButton = document.getElementById('toggleDetails');
const profile = document.getElementById('profile');
const studentName = document.getElementById('studentName');
const details = document.getElementById('details');

let showingRica = false;

changeNameButton.addEventListener('click', () => {
    showingRica = !showingRica;
    studentName.textContent = showingRica ? 'Rica Requina' : 'Rica Requina';
    details.textContent = showingRica
        ? 'Rica is a third-year BS Computer Science student who enjoys designing websites and learning JavaScript.'
        : 'Rica is a third-year BS Computer Science student who enjoys programming and web development.';
});

changeBackgroundButton.addEventListener('click', () => {
    profile.style.backgroundColor = profile.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

toggleDetailsButton.addEventListener('click', () => {
    details.classList.toggle('hidden');
});