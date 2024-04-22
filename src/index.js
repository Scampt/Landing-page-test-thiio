document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById('toggleMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    mobileMenuBtn.addEventListener('click', function() {
        toggleMenu.classList.toggle('hidden');
    });

    toggleMenu.addEventListener('click', function(event) {
        if (event.target === toggleMenu) {
            toggleMenu.classList.add('hidden');
        }
    });
});
