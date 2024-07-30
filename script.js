document
  .getElementById("upload-file")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        var italianCharacter = document.getElementById("italian-character");
        italianCharacter.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.getElementById("flag-options").addEventListener("change", function () {
  const selectedFlag = this.value;
  const flagElement = document.getElementById("replaceable-flag");
  const textElement = document.getElementById("flag-text");

  
  flagElement.className = "flag";

  flagElement.classList.add(selectedFlag);
  
  switch (selectedFlag) {
    case "american":
      textElement.textContent = "Someone you know is American.";
      break;
    case "british":
      textElement.textContent = "Someone you know is British.";
      break;
    case "french":
      textElement.textContent = "Someone you know is French.";
      break;
    case "brazilian":
      textElement.textContent = "Someone you know is Brazilian.";
      break;
    case "canadian":
      textElement.textContent = "Someone you know is Canadian.";
      break;
    default:
      textElement.textContent = "Someone you know is Italian.";
      break;
  }
});
