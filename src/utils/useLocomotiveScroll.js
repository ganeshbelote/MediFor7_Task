import { useEffect, useRef } from 'react';

const useSmoothScroll = (wrapperRef, { lerp = 0.07 } = {}) => {
const scrollY = useRef(0);
const currentY = useRef(0);
const rAF = useRef(null);

useEffect(() => {
const wrapper = wrapperRef.current;
if (!wrapper) return;

// Set wrapper styles
wrapper.style.position = 'fixed';
wrapper.style.top = '0';
wrapper.style.left = '0';
wrapper.style.width = '100%';
wrapper.style.willChange = 'transform';

// Set body height to match wrapper height
const resize = () => {
  document.body.style.height = `${wrapper.getBoundingClientRect().height}px`;
};
resize();
window.addEventListener('resize', resize);

// Smooth scroll logic
const updateScroll = () => {
  scrollY.current = window.scrollY || window.pageYOffset;
  currentY.current += (scrollY.current - currentY.current) * lerp;
  wrapper.style.transform = `translateY(-${currentY.current}px)`;
  rAF.current = requestAnimationFrame(updateScroll);
};
updateScroll();

return () => {
  cancelAnimationFrame(rAF.current);
  window.removeEventListener('resize', resize);
  document.body.style.height = '';
};
}, [wrapperRef, lerp]);
};

export default useSmoothScroll;