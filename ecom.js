document.addEventListener("DOMContentLoaded", () => {
  // Register Form JS
  const regForm = document.getElementById("Register-form");
  if (regForm) {
    regForm.addEventListener("click", () => {
      window.location.href = 'Register.html';
    });
  }
  // Submit Button
  const subBtn = document.getElementById("submit-btn");
  if (subBtn) {
    subBtn.addEventListener("click", () => {
      window.location.href = 'index.html';
    });
  }
  // Cart Button
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      window.location.href = 'cart.html';
    });
  }
//   Product Info
  const prodIn = document.querySelectorAll("#product-info");
  prodIn.forEach((prodIn) => {
    prodIn.addEventListener("click", () => {
      window.location.href = 'productInfo.html';
    });
  });
});
// Products Quantity
function decrease() {
    let qty = document.getElementById('quantity');
    let val = parseInt(qty.value);
    if (val > 1) qty.value = val - 1;
  }
  function increase() {
    let qty = document.getElementById('quantity');
    let val = parseInt(qty.value);
    qty.value = val + 1;
  }
// Add To Fav Toast
const toastEl = document.querySelector('.toast');
  const toast = new bootstrap.Toast(toastEl);

  document.getElementById('showToast').addEventListener('click', () => {
    toast.show();
  });
//   toaster icon change 
const heartBtn = document.getElementById('showToast');
  const heartIcon = document.getElementById('heartIcon');

  heartBtn.addEventListener('click', () => {
    // Toggle between regular and solid heart
    if (heartIcon.classList.contains('fa-regular')) {
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
    } else {
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
    }
  });
  // Handle form submit
  document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  });
// Order Created
const toastE2 = document.querySelector('#toast');
  const toast2 = new bootstrap.Toast(toastEl);

  document.getElementById('showToast-form').addEventListener('click', () => {
    toast.show();
  });