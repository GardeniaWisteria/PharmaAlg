document.addEventListener('DOMContentLoaded', () => {
  // ========== Swiper (Carousel) ===========================================================
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'slide',
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ========== AOS =====================================================================
  AOS.init({ duration: 800, once: true });

  // ========== Flatpickr =====================================================================
  if (document.getElementById("consultation-date")) {
    flatpickr("#consultation-date", {
      minDate: "today",
      dateFormat: "Y-m-d",
    });
  }

  // ========== Tabs =====================================================================
  const tabs = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));
      tab.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });

  // ========== Modal Setup =====================================================================
  function setupModal(openId, modalId, closeSelector) {
    const openBtn = document.getElementById(openId);
    const modal = document.getElementById(modalId);
    const closeBtn = modal?.querySelector(closeSelector);
    if (openBtn && modal && closeBtn) {
      openBtn.addEventListener("click", () => (modal.style.display = "flex"));
      closeBtn.addEventListener("click", () => (modal.style.display = "none"));
      window.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
      });
    }
  }

  setupModal("bookConsultationBtn", "consultationModal", ".close-btn");
  setupModal("loginBtn", "loginModal", ".close-btn");
  setupModal("trackOrderNavBtn", "trackOrderModal", ".close-btn");
  setupModal("openBookingModal", "bookingModal", "#closeBookingModal");

  // ========== Cart Logic =====================================================================
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let total = 0;
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));
      const item = document.createElement("li");
      item.textContent = `${name} - ${price.toFixed(2)} DA`;
      cartItems?.appendChild(item);
      total += price;
      cartTotal.textContent = total.toFixed(2);
    });
  });
  document.getElementById("checkout-btn")?.addEventListener("click", () => {
    alert("Thank you for your purchase!");
    cartItems.innerHTML = "";
    total = 0;
    cartTotal.textContent = "0.00";
  });

  // ========== Mobile Nav Toggle =====================================================================
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // ========== Track Order Form =====================================================================
  const trackOrderForm = document.getElementById("track-order-form");
  const trackOrderResult = document.getElementById("track-order-result");
  trackOrderForm?.addEventListener("submit", e => {
    e.preventDefault();
    const orderId = document.getElementById("order-id").value.trim();
    trackOrderResult.textContent = orderId
      ? `Tracking info for Order ID: ${orderId}`
      : "Please enter a valid Order ID.";
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('open-login');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');

  if (loginBtn && loginModal && closeLoginModal) {
    loginBtn.addEventListener('click', function () {
      loginModal.style.display = 'flex';
    });

    closeLoginModal.addEventListener('click', function () {
      loginModal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const trackOrderLink = document.getElementById('track-order-link');
  const trackingModal = document.getElementById('trackingModal');
  const closeModalBtn = trackingModal?.querySelector('.close-modal');

  if (trackOrderLink && trackingModal && closeModalBtn) {
    trackOrderLink.addEventListener('click', function (e) {
      e.preventDefault();
      trackingModal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', function () {
      trackingModal.style.display = 'none';
    });

    //  Close on outside click
    window.addEventListener('click', function (event) {
      if (event.target === trackingModal) {
        trackingModal.style.display = 'none';
      }
    });
  }
});
// Initialize the cart count
let cartCount = 0;

// Listen for clicks on all add-to-cart buttons
document.addEventListener('DOMContentLoaded', () => {
  const cartCountSpan = document.getElementById('cart-count');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      cartCount++;
      cartCountSpan.textContent = cartCount;
    });
  });
});
