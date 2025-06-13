
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

let unlockTime = localStorage.getItem('unlockUntil');
const now = new Date().getTime();
if (!unlockTime || now > unlockTime) {
  document.getElementById('lockScreen').style.display = 'flex';
}
function verifyCode() {
  const code = document.getElementById('accessCode').value;
  if (code === '2025') {
    const unlockUntil = new Date().getTime() + 30 * 60 * 1000;
    localStorage.setItem('unlockUntil', unlockUntil);
    document.getElementById('lockScreen').style.display = 'none';
  } else if (code === '5050') {
    localStorage.setItem('unlockUntil', new Date().getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
    document.getElementById('lockScreen').style.display = 'none';
  } else {
    alert('Cod incorect!');
  }
}
