function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}

function formatDate(date, locale = 'cs-CZ') {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(locale, options);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function slugify(text, separator = '-') {
  return text.toLowerCase().replace(/\s+/g, separator).replace(/[^\w-]/g, '');
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '…';
}

module.exports = { calculateSum, calculateAverage, formatDate, validateEmail, slugify };
