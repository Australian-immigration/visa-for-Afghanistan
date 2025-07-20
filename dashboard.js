document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  document.querySelector('.content h1').textContent = `Welcome ${user.firstName} ${user.lastName}`;

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  });

  // Set finalResult link dynamically
  const btn1 = document.getElementById('btn1');
  if (btn1 && user.dashboardLinks && user.dashboardLinks.finalResult) {
    btn1.href = user.dashboardLinks.finalResult;
  }
});
