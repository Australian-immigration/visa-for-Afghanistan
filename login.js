document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const passport = document.getElementById('passport').value.trim();
    const caseNum = document.getElementById('case').value.trim();

    fetch('data.json')
      .then(res => res.json())
      .then(users => {
        const matchedUser = users.find(user =>
          user.firstName.toLowerCase() === firstName.toLowerCase() &&
          user.lastName.toLowerCase() === lastName.toLowerCase() &&
          user.passport.toLowerCase() === passport.toLowerCase() &&
          user.case.toLowerCase() === caseNum.toLowerCase()
        );

        if (matchedUser) {
          localStorage.setItem('user', JSON.stringify(matchedUser));
          window.location.href = 'index.html';
        } else {
          errorMsg.style.display = 'block';
          errorMsg.textContent = 'Invalid credentials, please try again.';
        }
      })
      .catch(() => {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Error loading user data.';
      });
  });
});
