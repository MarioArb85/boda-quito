function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

function updateCountdown() {
    const weddingDate = new Date("July 11, 2026 12:30:00").getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
        const wrapper = document.querySelector(".countdown-wrapper");
        if (wrapper) wrapper.style.display = "none";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (document.getElementById("days")) {
        document.getElementById("days").innerText = d.toString().padStart(2, '0');
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = (navigator.language || navigator.userLanguage).startsWith('es') ? 'es' : 'en';
    const langData = translations[userLang];

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (langData && langData[key]) {
            el.innerText = langData[key];
        }
    });

    updateCountdown();
    setInterval(updateCountdown, 60000);
});

