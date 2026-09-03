
(function () {
    var toggle = document.getElementById('navToggle');
    var panel = document.getElementById('navMobilePanel');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
        var isOpen = panel.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            panel.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
})();
