import './style.css'
document.getElementById('birthday-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const birthdayInput = document.getElementById('birthday-input').value;
  const birthdayDate = new Date(birthdayInput);
  const today = new Date();

  birthdayDate.setFullYear(today.getFullYear());

  const differenceInMilliseconds = birthdayDate - today;
  const daysRemaining = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  document.getElementById('birthday-result').textContent = `Faltan ${daysRemaining} días para tucumpleaños.`;
});