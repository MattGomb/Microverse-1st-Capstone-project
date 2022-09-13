// eslint-disable-next-line no-unused-vars
function toggleHamburger() {
  const dropDown = document.getElementById('myLinks');
  if (dropDown.style.display === 'block') {
    dropDown.style.display = 'none';
  } else {
    dropDown.style.display = 'block';
  }
}