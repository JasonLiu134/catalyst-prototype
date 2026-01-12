console.log("Page loaded. Assets are working.");
let currentPage = 0;

window.addEventListener('load', function () {
  if (!document.body.classList.contains('main-body')) {
      document.body.classList.add('fade-in');
      // setTimeout(() => {
      //     document.body.classList.remove('fade-in');
      // }, 500);
      console.log("transition");
  }
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.fade-item');
  const windowHeight = window.innerHeight;
  const currentScrollY = window.scrollY;
  const fadeStart = windowHeight; 
  const fadeFull = windowHeight * 0.5; 

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemTop = rect.top;
    let opacity = (fadeStart - itemTop) / (fadeStart - fadeFull);
    opacity = Math.min(Math.max(opacity, 0), 1);
    item.style.opacity = opacity;
  });

  lastScrollY = currentScrollY;
});

// let previousScroll = window.scrollY;
// let scrollValue = 0;
// let decreaseTimer = 0;
// let canIncrement = true;
// window.addEventListener('scroll', () => {
//     decreaseTimer = 0;
//     const scrolled = window.scrollY;
//     if (scrolled > previousScroll) {
//         scrollValue = scrollValue + scrolled - previousScroll;
//     } else if(scrolled < previousScroll) {
//         scrollValue = 0;
//     }

//     if (scrollValue >= 40){
//         incrementPage();
//     }

//     previousScroll = scrolled;
// });

// setInterval(() => {
//     decreaseTimer += 1;
//     if (decreaseTimer > 100 & scrollValue > 0 & canIncrement) {
//         scrollValue -= 1;
//     }
// }, 1);

// function incrementPage() {
//     if (canIncrement) {
//         currentPage += 1;
//         canIncrement = false;
//         console.log(currentPage);
//         setTimeout(() => {
//             canIncrement = true;
//         }, 500); 
//     }
// }

    // window.scrollBy({
    //     top: 200,
    //     left: 0,
    //     behavior: 'smooth'
    // });

// Journal Page
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
    const modal = document.getElementById('journalModal');
    const modalClose = document.getElementById('modalClose');
    const modalIframe = document.getElementById('modalIframe');
    const journalButtons = document.querySelectorAll('.boxbutton');
    const journalPreviews = document.querySelectorAll('.journal-preview');
    journalPreviews.forEach(preview => {
        preview.addEventListener('click', function() {
            const volume = this.getAttribute('data-volume');
            modalIframe.src = `./journals/volume${volume}.pdf#toolbar=0`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            journalButtons.forEach(btn => {
                btn.classList.remove('selectedjournal');
                if(btn.getAttribute('data-volume') === volume) {
                    btn.classList.add('selectedjournal');
                }
            });
        });
    });
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    journalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const volume = this.getAttribute('data-volume');
            journalButtons.forEach(btn => {
                btn.classList.remove('selectedjournal');
            });
            this.classList.add('selectedjournal');
            modalIframe.src = `./journals/volume${volume}.pdf#toolbar=0`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });


    //TO DO: have to fix this

    // document.addEventListener('keydown', (e) => {
    // const scrollStep = 100;
    // if (e.key === "ArrowDown") {
    //     modal.scrollBy({ top: scrollStep, behavior: "smooth" });
    // } else if (e.key === "ArrowUp") {
    //     modal.scrollBy({ top: -scrollStep, behavior: "smooth" });
    // }
    // });
});

const link = document.createElement('link');
link.rel = 'icon';
link.href = 'assets/favicon.png'; 
document.head.appendChild(link);