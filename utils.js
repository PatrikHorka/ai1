function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

module.exports = { calculateSum, formatDate, validateEmail };
