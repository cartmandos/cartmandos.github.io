class MapBuilder {
  #prevMapIndex = 0;

  constructor(mapInventory, elementNode = document.querySelector("iframe")) {
    if (MapBuilder._instance) {
      return MapBuilder._instance;
    }
    MapBuilder._instance = this;
    this.mapInventory = mapInventory;
    this.mapHTMLElement = elementNode;
    this.#buildMap();
  }

  #buildMap() {
    this.currentMapIndex = 0;
    this.#prevMapIndex = -1;
    if (this.mapHTMLElement.tagName.toLowerCase() === "iframe") {
      this.mapHTMLElement.setAttribute(
        "src",
        MapBuilder.getEmbedMapURL(this.mapInventory[this.currentMapIndex])
      );
    }
  }

  get length() {
    return this.mapInventory ? this.mapInventory.length : -1;
  }

  get mapName() {
    return this.mapInventory ? this.mapInventory[this.currentMapIndex] : "";
  }

  static get currentMapIndex() {
    let index = this.currentMapIndex;
    return index;
  }

  displayMap(index) {
    if (index != null && index >= 0 && index <= this.mapInventory.length - 1) {
      this.#prevMapIndex = this.currentMapIndex;
      this.currentMapIndex = index;
      this.mapHTMLElement.setAttribute(
        "src",
        MapBuilder.getEmbedMapURL(this.mapInventory[this.currentMapIndex])
      );
    }
  }

  static getEmbedMapURL(place, zoom = 13) {
    return new URL(
      `https://maps.google.com/maps?q=${place}&z=${zoom}&output=embed`
    ).href;
  }
}

const CITIES_BY_NAMES = [
  "Kefar Sava",
  "Paris",
  "Budapest",
  "Amsterdam",
  "Lisbon",
  "Philadelphia",
  "Washington DC",
  "New York",
  "Zanzibar Tanzania",
  "Antalya",
];

const updateMapButtonsState = () => {
  prevMapButton.disabled =
    map.currentMapIndex === 0
      ? (prevMapButton.disabled = "true")
      : (prevMapButton.disabled = "");
  nextMapButton.disabled =
    map.currentMapIndex === map.mapInventory.length - 1
      ? (nextMapButton.disabled = "true")
      : (nextMapButton.disabled = "");
};

const nextMap = () => {
  let currentIndex = map.currentMapIndex;
  if (currentIndex < map.mapInventory.length - 1) {
    map.displayMap(currentIndex + 1);
  }
  updateMapButtonsState();
};

const prevMap = () => {
  let currentIndex = map.currentMapIndex;
  if (currentIndex > 0) {
    map.displayMap(currentIndex - 1);
  }
  updateMapButtonsState();
};

/**
 * Initialize map and buttons event and state
 */
const map = new MapBuilder(CITIES_BY_NAMES);
const prevMapButton = document.querySelector(".map-button.prev");
const nextMapButton = document.querySelector(".map-button.next");
prevMapButton.addEventListener("click", prevMap);
nextMapButton.addEventListener("click", nextMap);
updateMapButtonsState();
