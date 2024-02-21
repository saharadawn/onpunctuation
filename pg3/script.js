document.getElementById('clickable-word').addEventListener('click', function() {
    var hiddenImageContainer = document.getElementById('hidden-image-container');
    if (hiddenImageContainer.style.display === 'none') {
      hiddenImageContainer.style.display = 'block';
    } else {
      hiddenImageContainer.style.display = 'none';
    }
  });
  