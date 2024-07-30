document.getElementById('search-button').addEventListener('click', function() {
  var name = document.getElementById('search-person').value;
  if (name.trim() !== '') {
    fetch(`YOUR_BACKEND_ENDPOINT/search?query=${name}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          var italianCharacter = document.getElementById('italian-character');
          italianCharacter.src = data.results[0].thumbnailUrl;
          italianCharacter.alt = name;
        } else {
          alert('No images found for the given search.');
        }
      })
      .catch(error => console.error('Error fetching the image:', error));
  }
});

document.getElementById('flag-options').addEventListener('change', function() {
  const selectedFlag = this.value;
  const flagElement = document.getElementById('replaceable-flag');

  // Reset class names to remove any existing flag class
  flagElement.className = 'flag';

  // Add the new flag class based on the selection
  flagElement.classList.add(selectedFlag);
});
