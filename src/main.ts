import {
  AsciiFilter,
  BulgePinchFilter,
  CrossHatchFilter,
  DotFilter,
  GlitchFilter,
  GodrayFilter,
  MultiColorReplaceFilter,
  OldFilmFilter,
  PixelateFilter,
  ReflectionFilter,
  ShockwaveFilter,
  TwistFilter,
  ZoomBlurFilter,
} from "pixi-filters";
import * as PIXI from "pixi.js";
import { Color, Container } from "pixi.js";
import { handleCustomCursor } from "./cursor";
import "./style.css";

// Handle cursor
handleCustomCursor();

// Create App
let app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });
document.body.appendChild(app.view);

let container = new Container();

// Add background image
let sprite = PIXI.Sprite.from("/background.jpeg");
sprite.width = window.innerWidth;
sprite.anchor.set(0.5);
sprite.position.set(app.screen.width / 2, app.screen.height / 2);
container.addChild(sprite);
app.stage.addChild(container);

// Declare filters
let activeFilter: any;
const bulgeFilter = new BulgePinchFilter({
  radius: 300,
  strength: 1,
});
const asciiFilter = new AsciiFilter(12);
const pixelFilter = new PixelateFilter(10);
const crossFilter = new CrossHatchFilter();
const replaceFilter = new MultiColorReplaceFilter(
  [
    [new Color("#E2F5F9").toRgbArray(), new Color("#FFD8D8").toRgbArray()],
    [new Color("#5B5C66").toRgbArray(), new Color("#F77058").toRgbArray()],
    [new Color("#4D9AAD").toRgbArray(), new Color("#F5D039").toRgbArray()],
  ],
  0.4
);
const glitchFilter = new GlitchFilter();
const dotFilter = new DotFilter();
const oldFilmFilter = new OldFilmFilter();
const reflectionFilter = new ReflectionFilter({
  boundary: 0.7,
  waveLength: [50, 200],
  amplitude: [0, 20],
});
const twistFilter = new TwistFilter({
  radius: 150,
  angle: 5,
  padding: 20,
});
const zoomFilter = new ZoomBlurFilter({ strength: 0.3 });
const godFilter = new GodrayFilter();
const waveFilter = new ShockwaveFilter();

// Handle filter buttons
const bulgeFilterButton = document.getElementById("button-bulge") as HTMLButtonElement;
const asciiFilterButton = document.getElementById("button-ascii") as HTMLButtonElement;
const pixelFilterButton = document.getElementById("button-pixel") as HTMLButtonElement;
const crossFilterButton = document.getElementById("button-cross") as HTMLButtonElement;
const dotFilterButton = document.getElementById("button-dot") as HTMLButtonElement;
const replaceFilterButton = document.getElementById("button-replace") as HTMLButtonElement;
const glitchFilterButton = document.getElementById("button-glitch") as HTMLButtonElement;
const oldFilmFilterButton = document.getElementById("button-old") as HTMLButtonElement;
const reflectionFilterButton = document.getElementById("button-reflection") as HTMLButtonElement;
const twistFilterButton = document.getElementById("button-twist") as HTMLButtonElement;
const zoomFilterButton = document.getElementById("button-zoom") as HTMLButtonElement;
const godFilterButton = document.getElementById("button-god") as HTMLButtonElement;
const waveFilterButton = document.getElementById("button-wave") as HTMLButtonElement;
const noneFilterButton = document.getElementById("button-none") as HTMLButtonElement;

bulgeFilterButton.addEventListener("click", () => {
  container.filters = [bulgeFilter];
});
asciiFilterButton.addEventListener("click", () => {
  container.filters = [asciiFilter];
});
pixelFilterButton.addEventListener("click", () => {
  container.filters = [pixelFilter];
});
crossFilterButton.addEventListener("click", () => {
  container.filters = [crossFilter];
});
dotFilterButton.addEventListener("click", () => {
  container.filters = [dotFilter];
});
replaceFilterButton.addEventListener("click", () => {
  container.filters = [replaceFilter];
});
glitchFilterButton.addEventListener("click", () => {
  container.filters = [glitchFilter];
  glitchFilter.slices = Math.floor(Math.random() * 20);
});
oldFilmFilterButton.addEventListener("click", () => {
  container.filters = [oldFilmFilter];
  oldFilmFilter.seed = Math.random();
});
reflectionFilterButton.addEventListener("click", () => {
  container.filters = [reflectionFilter];
});
twistFilterButton.addEventListener("click", () => {
  container.filters = [twistFilter];
});
zoomFilterButton.addEventListener("click", () => {
  container.filters = [zoomFilter];
});
godFilterButton.addEventListener("click", () => {
  container.filters = [godFilter];
});
waveFilterButton.addEventListener("click", () => {
  activeFilter = waveFilter;
  container.filters = [waveFilter];
});
noneFilterButton.addEventListener("click", () => {
  container.filters = [];
});

window.addEventListener("pointermove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const center = [x, y];
  bulgeFilter.center = center;
  twistFilter.offset.x = e.clientX;
  twistFilter.offset.y = e.clientY;
  zoomFilter.center = [e.clientX, e.clientY];
});

window.addEventListener("click", (e) => {
  waveFilter.center = [e.clientX, e.clientY];
  waveFilter.time = 0;
});

let elapsed = 0.0;
app.ticker.add((dt) => {
  elapsed += dt;
  oldFilmFilter.seed = Math.random();
  if (Math.floor(elapsed) % 20 === 0) {
    glitchFilter.slices = Math.floor(Math.random() * 20);
  }
  if (container.filters && container.filters[0] === reflectionFilter) {
    reflectionFilter.time += 0.03;
  }
  godFilter.time += 0.005;

  if (activeFilter === waveFilter) {
    waveFilter.time += 0.02;
  }
});
