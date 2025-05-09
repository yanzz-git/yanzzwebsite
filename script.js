function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");

  // Toggle class "responsive"
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  } else {
    navbar.classList.add("responsive");
  }
}

// Tutup navbar jika klik di luar ikon/menu
document.addEventListener("click", function (event) {
  var navbar = document.getElementById("myNavbar");
  var icon = document.querySelector(".navbar .icon");

  // Jika menu sedang terbuka dan klik bukan pada ikon atau navbar
  if (
    navbar.classList.contains("responsive") &&
    !navbar.contains(event.target)
  ) {
    navbar.classList.remove("responsive");
  }
});

function openPhotoModal() {
  document.getElementById("photoModal").style.display = "block";
}

function closePhotoModal() {
  document.getElementById("photoModal").style.display = "none";
}

// Tutup jika klik di luar foto
window.onclick = function(event) {
  var modal = document.getElementById("photoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
