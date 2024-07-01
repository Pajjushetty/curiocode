document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const registrationDiv = document.getElementById('registration');
  const loginDiv = document.getElementById('login');

  const users = JSON.parse(localStorage.getItem('users')) || [];

  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const userExists = users.some(user => user.username === username);

      if (userExists) {
          alert('User is already registered');
          registrationDiv.style.display = 'none';
          loginDiv.style.display = 'block';
      } else {
          users.push({ username, password });
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registration successful!');
      }
  });

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
          alert('Login successful!');
      } else {
          alert('Invalid username or password');
      }
  });
});
