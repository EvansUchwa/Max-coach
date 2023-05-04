window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        if (!document.querySelector('.navOnScroll')) {
            document.querySelector('.nav').classList.add('navOnScroll')
        }
    } else {
        document.querySelector('.nav').classList.remove('navOnScroll')
    }
})