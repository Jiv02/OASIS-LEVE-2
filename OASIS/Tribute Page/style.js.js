const image = document.getElementById('swami-img');

image.addEventListener('mouseover', function() {
  this.style.opacity = 0.5;
});

image.addEventListener('mouseout', function() {
  this.style.opacity = 1;
})