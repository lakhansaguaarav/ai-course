// EdgeLearn AI — minimal JS for nav & form
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.getElementById('year').textContent = new Date().getFullYear();

function validateForm(e){
  const form = e.target;
  const email = form.email.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert('Please enter a valid email address.');
    e.preventDefault();
    return false;
  }
  // Let browser submit; Formspree/your backend handles it.
  return true;
}
