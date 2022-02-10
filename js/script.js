const navBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sideNav = document.getElementById('navigation');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function () {
  sideNav.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  sideNav.classList.remove('show');
});
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    sideNav.classList.remove('show');
  }
});