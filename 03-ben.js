const aliens = [
  {
    name: "Heatblast",
    species: "Pyronite",
    image: "img/Heatblast_omniverse_official.webp"
  },
  {
    name: "Wildmutt",
    species: "Vulpimancer",
    image: "img/PN775IM_29.webp"
  },
  {
    name: "Diamondhead",
    species: "Petrosapien",
    image: "img/Diamondhead_oficial.webp"
  },
  {
    name: "XLR8",
    species: "Kineceleran",
    image: "img/XLR8_OV2.webp"
  },
  {
    name: "Four Arms",
    species: "Tetramand",
    image: "img/Four_Arms_OV_Model.webp"
  },
  {
    name: "Upgrade",
    species: "Galvanic Mechamorph",
    image: "img/Midmad_29.webp"
  },
  {
    name: "Ghostfreak",
    species: "Ectonurite",
    image: "img/Ghostfreak_ov_official.webp"
  },
  { name: "Cannonbolt", species: "Arburian Pelarota", image: "img/Primus_29.webp" },
  { name: "Wildvine", species: "Florauna", image: "img/Midmad_28.webp" },
  { name: "Spitter", species: "Insectoid", image: "img/OIP.jpeg" },
  { name: "Buzzshock", species: "Insectoid", image: "https://via.placeholder.com/150x120?text=Buzzshock" },
  { name: "Arctiguana", species: "Reptilian", image: "https://via.placeholder.com/150x120?text=Arctiguana" },
  { name: "Blitzwolfer", species: "Lupin", image: "https://via.placeholder.com/150x120?text=Blitzwolfer" },
  { name: "Upchuck", species: "Gourmand", image: "https://via.placeholder.com/150x120?text=Upchuck" },
  { name: "Snare-oh", species: "Plumbers’ alien", image: "https://via.placeholder.com/150x120?text=Snare-oh" },
  { name: "Frankenstrike", species: "Synthetic", image: "https://via.placeholder.com/150x120?text=Frankenstrike" },
  { name: "Eye Guy", species: "Optical", image: "https://via.placeholder.com/150x120?text=Eye+Guy" },
  { name: "Way Big", species: "To'kustar", image: "https://via.placeholder.com/150x120?text=Way+Big" },
  { name: "Ditto", species: "Splixson", image: "https://via.placeholder.com/150x120?text=Ditto" },
  { name: "Swampfire", species: "Methanosian", image: "https://via.placeholder.com/150x120?text=Swampfire" },
  { name: "Echo Echo", species: "Sonorosian", image: "https://via.placeholder.com/150x120?text=Echo+Echo" },
  { name: "Humungousaur", species: "Vaxasaurian", image: "https://via.placeholder.com/150x120?text=Humungousaur" },
  { name: "Jetray", species: "Aerophibian", image: "https://via.placeholder.com/150x120?text=Jetray" },
  { name: "Big Chill", species: "Necrofriggian", image: "https://via.placeholder.com/150x120?text=Big+Chill" },
  { name: "Chromastone", species: "Crystalsapien", image: "https://via.placeholder.com/150x120?text=Chromastone" },
  { name: "Brainstorm", species: "Galvanic Mechamorph", image: "https://via.placeholder.com/150x120?text=Brainstorm" },
  { name: "Grey Matter", species: "Galvan", image: "https://via.placeholder.com/150x120?text=Grey+Matter" },
   { name: "Stinkfly", species: "Lepidopterran", image: "https://via.placeholder.com/150x120?text=Stinkfly" },
  { name: "Ripjaws", species: "Piscciss Volann", image: "https://via.placeholder.com/150x120?text=Ripjaws" },
  { name: "Spidermonkey", species: "Arachnichimp", image: "https://via.placeholder.com/150x120?text=Spidermonkey" },
  { name: "Goop", species: "Polymorph", image: "https://via.placeholder.com/150x120?text=Goop" },
  { name: "Alien X", species: "Celestialsapien", image: "https://via.placeholder.com/150x120?text=Alien+X" },
  { name: "Lodestar", species: "Polarian", image: "https://via.placeholder.com/150x120?text=Lodestar" },
  { name: "Rath", species: "Appoplexian", image: "https://via.placeholder.com/150x120?text=Rath" },
  { name: "Nanomech", species: "Nanite", image: "https://via.placeholder.com/150x120?text=Nanomech" },
  { name: "Water Hazard", species: "Orishan", image: "https://via.placeholder.com/150x120?text=Water+Hazard" },
  { name: "Ampfibian", species: "Amphibian", image: "https://via.placeholder.com/150x120?text=Ampfibian" },
  { name: "Armodrillo", species: "Talpaedan", image: "https://via.placeholder.com/150x120?text=Armodrillo" },
  { name: "Terraspin", species: "Geochelone", image: "https://via.placeholder.com/150x120?text=Terraspin" },
  { name: "NRG", species: "Solenoid", image: "https://via.placeholder.com/150x120?text=NRG" },
  { name: "Fasttrack", species: "Arburian Pelarota", image: "https://via.placeholder.com/150x120?text=Fasttrack" },
  { name: "Clockwork", species: "Chronosapien", image: "https://via.placeholder.com/150x120?text=Clockwork" },
  { name: "Chamalien", species: "Chamelien", image: "https://via.placeholder.com/150x120?text=Chamalien" },
  { name: "Eatle", species: "Insectoid", image: "https://via.placeholder.com/150x120?text=Eatle" },
  { name: "Juryrigg", species: "Plumber Tech", image: "https://via.placeholder.com/150x120?text=Juryrigg" },
  { name: "Shocksquatch", species: "Energic", image: "https://via.placeholder.com/150x120?text=Shocksquatch" },
  { name: "Feedback", species: "Conductoid", image: "https://via.placeholder.com/150x120?text=Feedback" },
  { name: "Bloxx", species: "Segmentasapien", image: "https://via.placeholder.com/150x120?text=Bloxx" },
  { name: "Gravattack", species: "Galilean", image: "https://via.placeholder.com/150x120?text=Gravattack" },
  { name: "Crashhopper", species: "Kineceleran", image: "https://via.placeholder.com/150x120?text=Crashhopper" },
  { name: "Ball Weevil", species: "Arborian", image: "https://via.placeholder.com/150x120?text=Ball+Weevil" },
  { name: "Walkatrout", species: "Piscciss", image: "https://via.placeholder.com/150x120?text=Walkatrout" },
  { name: "Pesky Dust", species: "Petroalien", image: "https://via.placeholder.com/150x120?text=Pesky+Dust" },
  { name: "Mole-Stache", species: "Talpaedan", image: "https://via.placeholder.com/150x120?text=Mole-Stache" },
  { name: "The Worst", species: "Unknown", image: "https://via.placeholder.com/150x120?text=The+Worst" },
  { name: "Kickin Hawk", species: "Bird", image: "https://via.placeholder.com/150x120?text=Kickin+Hawk" },
  { name: "Toepick", species: "Reptilian", image: "https://via.placeholder.com/150x120?text=Toepick" },
  { name: "Astrodactyl", species: "Avian", image: "https://via.placeholder.com/150x120?text=Astrodactyl" },
  { name: "Bullfrag", species: "Frog", image: "https://via.placeholder.com/150x120?text=Bullfrag" },
  { name: "Atomix", species: "Atomic", image: "https://via.placeholder.com/150x120?text=Atomix" },
  { name: "Gutrot", species: "Ooze", image: "https://via.placeholder.com/150x120?text=Gutrot" },
  { name: "Whampire", species: "Vampire", image: "https://via.placeholder.com/150x120?text=Whampire" }
];
  

// DOM REFERENCE
const alienImg = document.getElementById("alienImg");
const alienName = document.getElementById("alienName");
const alienSpecies = document.getElementById("alienSpecies");
const randomBtn = document.getElementById("randomBtn");
const alienGrid = document.getElementById("alienGrid");
const searchInput = document.getElementById("searchInput");

//DISPLAY FUNCTION

// Show a single alien
function showAlien(alien) {
  alienImg.src = alien.image;
  alienName.textContent = alien.name;
  alienSpecies.textContent = alien.species;
}

// Populate grid view
function showAlienGrid() {
  alienGrid.innerHTML = "";
  aliens.forEach(alien => {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `
      <img src="${alien.image}" alt="${alien.name}">
      <h4>${alien.name}</h4>
    `;
    alienGrid.appendChild(div);
  });
}
// RANDOM & ANIMATION

randomBtn.addEventListener("click", () => {
  const randomAlien = aliens[Math.floor(Math.random() * aliens.length)];
  showAlien(randomAlien);

  // Animate button
  randomBtn.classList.add("animate");
  setTimeout(() => randomBtn.classList.remove("animate"), 1000);
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const found = aliens.find(a => a.name.toLowerCase().includes(value));
  if (found) showAlien(found);
});
// Show grid on page load
showAlienGrid();
