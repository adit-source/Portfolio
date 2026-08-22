const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const progressBar = document.getElementById('progress');

window.addEventListener('scroll', () => {
    if (!progressBar) return;

    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;

    progressBar.style.width = progress + '%';
});
