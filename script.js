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
const text = {
  destinations: [
    {
      name: 'Moon',
      images: {
        png: './assets/destination/image-moon.png',
        webp: './assets/destination/image-moon.webp',
      },
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
    },
    {
      name: 'Mars',
      images: {
        png: './assets/destination/image-mars.png',
        webp: './assets/destination/image-mars.webp',
      },
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travel: '9 months',
    },
    {
      name: 'Europa',
      images: {
        png: './assets/destination/image-europa.png',
        webp: './assets/destination/image-europa.webp',
      },
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travel: '3 years',
    },
    {
      name: 'Titan',
      images: {
        png: './assets/destination/image-titan.png',
        webp: './assets/destination/image-titan.webp',
      },
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travel: '7 years',
    },
  ],
  crew: [
    {
      name: 'Douglas Hurley',
      images: {
        png: './assets/crew/image-douglas-hurley.png',
        webp: './assets/crew/image-douglas-hurley.webp',
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      name: 'Mark Shuttleworth',
      images: {
        png: './assets/crew/image-mark-shuttleworth.png',
        webp: './assets/crew/image-mark-shuttleworth.webp',
      },
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      name: 'Victor Glover',
      images: {
        png: './assets/crew/image-victor-glover.png',
        webp: './assets/crew/image-victor-glover.webp',
      },
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      name: 'Anousheh Ansari',
      images: {
        png: './assets/crew/image-anousheh-ansari.png',
        webp: './assets/crew/image-anousheh-ansari.webp',
      },
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ],
  technology: [
    {
      name: 'Launch vehicle',
      images: {
        portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
        landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: 'Spaceport',
      images: {
        portrait: './assets/technology/image-spaceport-portrait.jpg',
        landscape: './assets/technology/image-spaceport-landscape.jpg',
      },
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      name: 'Space capsule',
      images: {
        portrait: './assets/technology/image-space-capsule-portrait.jpg',
        landscape: './assets/technology/image-space-capsule-landscape.jpg',
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

const destinationsObj = text.destinations;
const crewObj = text.crew;
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
      showTabContent('block', 'grid', 'none', 'none');
    } else if (e.currentTarget.classList.contains('dest')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'block', 'none', 'flex');
      destination.style.display = 'grid';
    } else if (e.currentTarget.classList.contains('crew')) {
      modifyStyle(navBtn, e);
      showTabContent('none', 'none', 'none', 'block');
      headline.style.display = 'block';
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

function showTabContent(disp1, disp2, disp3, disp4, extra) {
  homePage.style.display = disp2;
  homeBg.style.display = disp1;
  headline.style.display = disp3;
  planetBg.style.display = disp3;
  destination.style.display = disp3;
  crew.style.display = disp4;
  planet.style.display = extra;
}
exploreBtn.addEventListener('click', () => {
  showTabContent('none', 'none', 'block');
  destination.style.display = 'grid';
  document.querySelector('.dest').classList.add('tab-border');
  document.querySelector('.home').classList.remove('tab-border');
  planet.style.display = 'flex';
});
function planetHTML(planet, description, distance, time) {
  destination.innerHTML = `<img class="planet-img" src="/assets/destination/image-${planet}.png" alt="" />
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
  crewImg.innerHTML = `<img src="/assets/crew/image-${img}.png" alt=""></img>`;
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
console.log('Douglas Hurley'.toLowerCase().split(' ').join('-'));
