// small UI helpers
document.getElementById('year').textContent = new Date().getFullYear();

function toggleMenu(){
  const nav = document.getElementById('navLinks');
  if(window.getComputedStyle(nav).display === 'none' || nav.style.display === ''){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
  } else {
    nav.style.display = 'none';
  }
}

// gentle intro fade-in (Soft Elegant)
window.addEventListener('load', () => {
  document.querySelector('.hero').style.opacity = 0;
  document.querySelector('.hero').style.transform = 'translateY(8px)';
  setTimeout(() => {
    document.querySelector('.hero').style.transition = 'all 700ms ease';
    document.querySelector('.hero').style.opacity = 1;
    document.querySelector('.hero').style.transform = 'translateY(0)';
  }, 120);
});
