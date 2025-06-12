
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});
