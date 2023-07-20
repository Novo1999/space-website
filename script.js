import { text } from './destinations.js';
const navBtn = document.querySelectorAll('.navLinks');
const homePage = document.querySelector('.homepage');
const destination = document.querySelector('.container-destination');
const homeBg = document.querySelector('.home-img');
const headline = document.querySelector('.headline');
const headlineCrew = document.querySelector('.head-crew');

const exploreBtn = document.querySelector('.exploreBtn');
// Planet
const planet = document.querySelector('.planets');
const planetTab = document.querySelectorAll('.planet-name');
const planetBg = document.querySelector('.planet-bg');
const planetSection = document.querySelector('.planet-section');
// Crew
const crew = document.querySelector('.show-crew');
const crewBtn = document.querySelectorAll('.crew-btn');
const crewContent = document.querySelector('.crew-content');
const crewImg = document.querySelector('.crew-img');
// Tech
const techSection = document.querySelector('.show-tech');
const spaceBtn = document.querySelectorAll('.space-btn');
const techContent = document.querySelector('.tech-container');
const techImg = document.querySelector('.insert');

const destinationsObj = text.destinations;
const crewObj = text.crew;
const techObj = text.technology;
function homeActiveState() {
  document.querySelector('.home').classList.add('tab-border');
  document.querySelector('.moon').classList.add('mini-tab-border');
}
homeActiveState();

navBtn.forEach(btn =>
  btn.addEventListener('click', e => {
    planet.style.display = 'none';
    if (e.currentTarget.classList.contains('home')) {
      modifyStyle(navBtn, e);
      showTabContent('block', 'grid', 'none', 'none', 'none');
    } else if (e.currentTarget.classList.contains('dest')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'block', 'none', 'none', 'flex');
      destination.style.display = 'grid';
    } else if (e.currentTarget.classList.contains('crew')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'none', 'block', 'none');
      headline.style.display = 'block';
    } else if (e.currentTarget.classList.contains('tech')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'none', 'none', 'block');
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

function showTabContent(disp1, disp2, disp3, disp4, extra, extra2) {
  homePage.style.display = disp2;
  homeBg.style.display = disp1;
  headline.style.display = disp3;
  planetBg.style.display = disp3;
  destination.style.display = disp3;
  crew.style.display = disp4;
  planet.style.display = extra2;
  techSection.style.display = extra;
}
exploreBtn.addEventListener('click', () => {
  showTabContent('none', 'none', 'block');
  destination.style.display = 'grid';
  document.querySelector('.dest').classList.add('tab-border');
  document.querySelector('.home').classList.remove('tab-border');
  planet.style.display = 'flex';
});
function planetHTML(planet, description, distance, time) {
  destination.innerHTML = `<img class="planet-img" src="./assets/destination/image-${planet.toLowerCase()}.png" alt="" />
  <div class="planet-section">
    <h1 class="planet-title">${planet}</h1>
    <p class="planet-description">
      ${description}
    </p>
    <hr class="planet-line" />
    <div class="distance-time">
      <div>
        <h3>avg. distance</h4>
          <h2 class="distance">${distance}</h2>
      </div>
      <div>
        <h3>est. travel time</h3>
        <h2 class="time">${time}</h2>
      </div>
    </div>
  </div>`;
}

function changePlanet() {
  planetTab.forEach((planet, index) => {
    planet.addEventListener('click', e => {
      console.log(index);
      if (
        e.currentTarget.classList.contains(
          destinationsObj[index].name.toLowerCase()
        )
      ) {
        planetTab.forEach(btn => btn.classList.remove('mini-tab-border'));
        e.currentTarget.classList.add('mini-tab-border');
        planetHTML(
          destinationsObj[index].name,
          destinationsObj[index].description,
          destinationsObj[index].distance,
          destinationsObj[index].travel
        );
      }
    });
  });
}

changePlanet();

function crewHTML(role, name, bio) {
  crewContent.innerHTML = `<h2>${role}</h2>
  <h1>${name}</h1> 
  <p>
    ${bio}
  </p>`;
  const img = name.toLowerCase().split(' ').join('-');
  crewImg.innerHTML = `<img src="./assets/crew/image-${img}.png" alt=""></img>`;
}

function changeCrew() {
  crewBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      if (e.currentTarget.classList.contains(`btn-${i + 1}`)) {
        crewBtn.forEach(btn => (btn.style.backgroundColor = '#979797'));
        e.currentTarget.style.backgroundColor = 'var(--text-color)';
        crewHTML(crewObj[i].role, crewObj[i].name, crewObj[i].bio);
      }
    });
  });
}
changeCrew();

function techHTML(name, description) {
  const img = name.toLowerCase().split(' ').join('-');
  techContent.innerHTML = `<div class="tech-content"> 
  <h3>The terminology...</h3>
  <h1>${name}</h1>
  <p>
    ${description}
  </p>
</div>
<img
src="./assets/technology/image-${img}-portrait.jpg"
alt=""
/>`;
}

function changeTech() {
  spaceBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      spaceBtn.forEach(btn => {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'white';
      });
      if (e.currentTarget.classList.contains(`btn-${i + 1}`)) {
        techHTML(techObj[i].name, techObj[i].description);
        e.currentTarget.style.backgroundColor = 'var(--text-color)';
        e.currentTarget.style.color = 'black';
      }
    });
  });
}
changeTech();
