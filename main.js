const svgPath = document.querySelectorAll('#harisa-text-svg > .path');

const svgText = anime({
  targets: svgPath,
  loop: false,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 600,
  delay: (el, i) => {return i * (500-50);} });