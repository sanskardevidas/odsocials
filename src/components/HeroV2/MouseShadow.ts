export function getShadow(mouseX: number, mouseY: number) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const dx = (mouseX - centerX) / centerX;
  const dy = (mouseY - centerY) / centerY;

  return {
    x: -dx * 35,
    y: -dy * 35,
  };
}