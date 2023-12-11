document.addEventListener('DOMContentLoaded', function () {
    var findOutButton = document.getElementById('findOutButton');
    var overlay = document.getElementById('overlay');

    if (findOutButton && overlay) {
        findOutButton.addEventListener('click', function () {
            overlay.classList.remove('hidden');
        });
    }
});
