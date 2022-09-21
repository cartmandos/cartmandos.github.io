// Initialize and add the map
/** function initMap() {
  const uluru = { lat: -25.344, lng: 131.031 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
*/
const MAPS = [
  "Kefar Sava",
  "Paris",
  "Budapest",
  "Amsterdam",
  "Lisbon",
  "Philadelphia",
  "Washington DC",
  "New York",
  "Zanzibar",
];
//map.setAttribute("src", kefarSava);
const map = document.getElementById("map");

function nextMap() {
  const map = document.getElementById("map");
  let current = map.getAttribute("src");
  if (current && MAPS.indexOf(current) < MAPS.length - 1) {
    map.setAttribute("src", MAPS[MAPS.indexOf(current) + 1]);
    if (MAPS.indexOf(current) + 1 === MAPS.length - 1) {
      let nextButton = document.getElementById("next");
      nextButton.disabled = "true";
    } else {
      nextButton.disabled = "";
    }
    prevButton.disabled = "";
  }
}

function prevMap() {
  const map = document.getElementById("map");
  let current = map.getAttribute("src");
  if (current && MAPS.indexOf(current) > 0) {
    map.setAttribute("src", MAPS[MAPS.indexOf(current) - 1]);
    if (MAPS.indexOf(current) - 1 === 0) {
      let prevButton = document.getElementById("prev");
      prevButton.disabled = "true";
    } else {
      prevButton.disabled = "";
    }
    nextButton.disabled = "";
  }
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
prevButton.addEventListener("click", prevMap);
nextButton.addEventListener("click", nextMap);

function getMapUrl(place, zoom = 13) {
  return new URL(
    `https://maps.google.com/maps?q=${place}&z=${zoom}&output=embed`
  ).href;
}
