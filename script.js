const navBtn = document.querySelectorAll('.navLinks');
const homePage = document.querySelector('.homepage');
const destination = document.querySelector('.container-destination');
const homeBg = document.querySelector('.home-img');
const planetBg = document.querySelector('.planet-bg');
const headline = document.querySelector('.headline');
const exploreBtn = document.querySelector('.exploreBtn');
const planet = document.querySelector('.planets');
function homeActiveState() {
  document.querySelector('.home').classList.add('tab-border');
  document.querySelector('.moon').classList.add('mini-tab-border');
}
homeActiveState();
navBtn.forEach(btn =>
  btn.addEventListener('click', e => {
    btn.classList.remove('tab-border');
    if (e.currentTarget.classList.contains('home')) {
      modifyStyle(navBtn, e);
      showTabContent('block', 'grid', 'none');
    }
    if (e.currentTarget.classList.contains('dest')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'block');
      destination.style.display = 'grid';
    }
  })
);

function modifyStyle(navBtn, e) {
  navBtn.forEach(btn => btn.classList.remove('tab-border'));
  e.currentTarget.classList.add('tab-border');
}

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
  document.querySelector('.dest').classList.add('tab-border');
  document.querySelector('.home').classList.remove('tab-border');
});
