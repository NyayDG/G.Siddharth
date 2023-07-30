function showSentence() {
    const numberInput = document.getElementById('numberInput').value;
    const sentences = [
      "sun", "shoes", "tree", "door", "wife", "vicks", "heaven", "plate", "wine",
      "hen", "stick", "duck", "heart", "chair", "hook", "hockey stick", "table lamp", 
      "spectacle", "lollipop", "balls"
    ];
  
    if (numberInput >= 1 && numberInput <= 20) {
      const sentence = sentences[numberInput - 1];
      const imageFilename = 'images/' + numberInput + '.png'; // Assuming your image filenames follow this pattern: image1.jpg, image2.jpg, ...
  
      const resultContainer = document.getElementById('result');
      resultContainer.querySelector('p').textContent = sentence;
  
      const imageElement = resultContainer.querySelector('.sentence-image');
      imageElement.src = imageFilename;
      imageElement.style.display = "block"; // Show the image
  
    } else {
      document.getElementById('result').textContent = 'Please enter a number between 1 and 20.';
    }
  }
  
