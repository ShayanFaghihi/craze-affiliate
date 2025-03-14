const mobileHeader = document.getElementById("mobileHeader");
const slideInTrigger = document.getElementById("slideInTrigger");
const menuLinks = document.querySelectorAll("#mobileHeader nav ul li a")
const mobileHeaderLogo = document.getElementById("mobileHeaderLogo")


slideInTrigger.addEventListener("click", () =>
  mobileHeader.classList.toggle("active")
  
);

mobileHeaderLogo.addEventListener('click', () => mobileHeader.classList.remove('active'))
menuLinks.forEach(link => link.addEventListener('click', () => mobileHeader.classList.remove('active')))
