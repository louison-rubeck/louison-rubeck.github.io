//Navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Projects section - Modal
const projectsModals = document.querySelectorAll(".projects-model");
const imgCards = document.querySelectorAll(".img-card")
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn")

var projectsModal = function(modalClick) {
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    });
});

projectsCloseBtns.forEach((projectsCloseBtn) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        });
    });
});

//Website dark/light theme

//Scroll to top button
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
})

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
      