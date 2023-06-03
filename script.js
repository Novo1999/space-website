const navBtn = document.querySelectorAll('.navLinks');
const homePage = document.querySelector('.homepage');
const destination = document.querySelector('.container-destination');
const homeBg = document.querySelector('.home-img');
const planetBg = document.querySelector('.planet-bg');
const headline = document.querySelector('.headline');
const exploreBtn = document.querySelector('.exploreBtn');
const planet = document.querySelector('.planets');

navBtn.forEach(btn =>
  btn.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('home')) {
      showTabContent('block', 'grid', 'none');
    }
    if (e.currentTarget.classList.contains('dest')) {
      showTabContent('none', 'none', 'block');
      destination.style.display = 'grid';
    }
  })
);

// disp1 = block
// disp2 = grid
// disp3 = none

function showTabContent(disp1, disp2, disp3) {
  homePage.style.display = disp2;
  homeBg.style.display = disp1;
  headline.style.display = disp3;
  planetBg.style.display = disp3;
  destination.style.display = disp3;
}
exploreBtn.addEventListener('click', () => {
  showTabContent('none', 'none', 'block');
  destination.style.display = 'grid';
});
