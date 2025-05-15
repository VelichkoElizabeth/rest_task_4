document.addEventListener('DOMContentLoaded', () => {
    const bannerText = document.getElementById('animated-text');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 20) {
            bannerText.classList.add('active');
        }
    });


    document.querySelectorAll('.nav .dropdown > a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            document.querySelectorAll('.dropdown-content').forEach(menu => {
                if (menu !== link.nextElementSibling) {
                    menu.classList.remove('show');
                }
            });

            const dropdown = link.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('show');
            }
        });
    });

    document.addEventListener('click', e => {
        const isClickInsideMenu = e.target.closest('.dropdown');
        if (!isClickInsideMenu) {
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    const modalTriggers = {
        'open-calc': 'modal-calc',
        'open-call': 'modal-call',
        'open-order': 'modal-order',
        'calculate-btn': 'callback-modal'
    };

    Object.entries(modalTriggers).forEach(([btnId, modalId]) => {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);

        if (btn && modal) {
            btn.addEventListener('click', () => {
                modal.classList.remove('hidden');
            });
        }
    });

    document.querySelectorAll('.close, .close-btn, .close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });

    window.addEventListener('scroll', function () {
        const grid = document.querySelector('.catalog-grid');
        if (grid) {
            const rect = grid.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                grid.classList.add('visible');
            }
        }
    });

    const orderButtons = document.querySelectorAll('.order-btn');
    const orderModal = document.getElementById('order-modal');

    if (orderButtons.length && orderModal) {
        orderButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                orderModal.classList.remove('hidden');
            });
        });
    }
});

function openCallForm() {
  document.getElementById("call-form").classList.remove("hidden");
}

function openCallForm() {
    document.getElementById('call-form').classList.remove('hidden');
}

function closeCallForm() {
    document.getElementById('call-form').classList.add('hidden');
}

function scrollToForm() {
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
}

let currentReviewIndex = 0;

function scrollReviews(direction) {
  const container = document.getElementById("reviews-container");
  const totalReviews = container.children.length;
  const maxIndex = totalReviews - 1;

  currentReviewIndex += direction;
  if (currentReviewIndex < 0) currentReviewIndex = 0;
  if (currentReviewIndex > maxIndex) currentReviewIndex = maxIndex;

  const offset = currentReviewIndex * container.offsetWidth;
  container.style.transform = `translateX(-${offset}px)`;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function openCallbackModal() {
    document.getElementById("callbackModal").style.display = "block";
  }

  document.querySelectorAll(".modal .close").forEach(function (btn) {
    btn.onclick = function () {
      btn.closest(".modal").style.display = "none";
    };
  });


  window.onclick = function (event) {
    const modal = document.getElementById("callbackModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

document.querySelectorAll('.faq-question').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const isActive = parent.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-toggle').textContent = '+';
    });

    if (!isActive) {
      parent.classList.add('active');
      parent.querySelector('.faq-toggle').textContent = '−';
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-callback-form");
  const form = document.querySelector(".callback-form");
  const closeBtn = document.querySelector(".callback-form .close");

  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      form.style.display = "block";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      form.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === form) {
      form.style.display = "none";
    }
  });
});



