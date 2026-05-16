// template_s3chdi9      Template #
// service_fmuhico       Service ID
// mzNVKH2R4r1FK-Grw     Account - Public Key

const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_fmuhico',
            'template_s3chdi9',
            event.target,
            'mzNVKH2R4r1FK-Grw'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classsList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at edpage985@gmail.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += " modal__open"
}