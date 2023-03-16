export function handleCustomCursor() {
  const cursor = document.querySelector("#cursor") as HTMLDivElement;

  window.addEventListener("pointermove", (e) => {
    cursor.style.transform = `translate3d(${e.clientX - 15}px, ${
      e.clientY - 15
    }px, 0)`;
  });
}
