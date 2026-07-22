export function getShadow(mouseX: number, mouseY: number) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const centerX = width / 2;
  const centerY = height / 2;

  const dx = (mouseX - centerX) / centerX;
  const dy = (mouseY - centerY) / centerY;

  let strength: number;

  if (width < 640) {
    // Mobile
    strength = 12;
  } else if (width < 1024) {
    // Tablet
    strength = 22;
  } else if (width < 1536) {
    // Desktop
    strength = 36;
  } else {
    // Ultra-wide
    strength = 44;
  }

  return {
    x: -dx * strength,
    y: -dy * strength,
  };
}