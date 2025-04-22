// Toggle mobile nav menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

// Video play/pause functionality
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById('myVideo');
  const playBtn = document.querySelector('.play-button');

  if (video && playBtn) {
    function toggleVideo() {
      if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
      } else {
        video.pause();
        playBtn.style.display = 'flex';
      }
    }

    video.addEventListener('click', toggleVideo);
    playBtn.addEventListener('click', toggleVideo);

    video.addEventListener('pause', () => {
      playBtn.style.display = 'flex';
    });

    video.addEventListener('play', () => {
      playBtn.style.display = 'none';
    });
  }
});

// Testimonial slider logic
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let testimonialIndex = 0;
let intervalId = null;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    dots[i].classList.remove('active');
  });
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  testimonialIndex = index;
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

// Add click event to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showTestimonial(index);
    resetInterval(); // reset timer on manual navigation
  });
});

function startAutoSlide() {
  intervalId = setInterval(nextTestimonial, 5000); // 5s
}

function resetInterval() {
  clearInterval(intervalId);
  startAutoSlide();
}

// Initialize slider
showTestimonial(testimonialIndex);
startAutoSlide();

// Modal support (if needed)
function openModal() {
  document.querySelector('.modal')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelector('.modal')?.classList.remove('show');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Contact form modal trigger
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop actual submission
    if (form.checkValidity()) {
      openModal();
      form.reset(); // Optional: clear form fields
    }
  });

  closeBtn.addEventListener('click', closeModal);
});

