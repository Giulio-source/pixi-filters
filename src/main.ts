import { AsciiFilter, BulgePinchFilter, ShockwaveFilter } from "pixi-filters";
import * as PIXI from "pixi.js";
import { handleCustomCursor } from "./cursor";
import "./style.css";

// Handle cursor
handleCustomCursor();

// Create App
let app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });
document.body.appendChild(app.view);

// Add background image
let sprite = PIXI.Sprite.from("/background.jpeg");
sprite.width = window.innerWidth;
sprite.anchor.set(0.5);
sprite.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.addChild(sprite);

// Declare filters
const bulgeFilter = new BulgePinchFilter({
  radius: 300,
  strength: 1,
});
const asciiFilter = new AsciiFilter(12);
const shockFilter = new ShockwaveFilter();

// Handle filter buttons
let center = [0.5, 0.5];
const bulgeFilterButton = document.getElementById(
  "button-bulge"
) as HTMLButtonElement;
const asciiFilterButton = document.getElementById(
  "button-ascii"
) as HTMLButtonElement;
const shockFilterButton = document.getElementById(
  "button-shock"
) as HTMLButtonElement;

bulgeFilterButton.onclick = () => {
  sprite.filters = [bulgeFilter];
  bulgeFilter.center = center;
};
asciiFilterButton.onclick = () => {
  sprite.filters = [asciiFilter];
};
shockFilterButton.onclick = () => {
  sprite.filters = [shockFilter];
  shockFilter.center = center;
  window.addEventListener("pointerdown", () => {
    console.log('click');
  });
};

window.addEventListener("pointermove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  center = [x, y];
});
