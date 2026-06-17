const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const skillBars = document.querySelectorAll('.skill-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, {threshold: 0.5});

skillBars.forEach(bar => {
    observer.observe(bar);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendWhats(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const telephone = '5544920049561';

    const text =`Olá! Meu nome é ${name}, ${message}`
    const formattedMessage =  encodeURIComponent(text)

    const url = `https://wa.me/${telephone}?text=${message}`

    window.open(url, '_blank')

}

const themeBtn = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    if(darkMode){
        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';


        localStorage.setItem("theme","dark");

    }else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme","light");
    }
});
